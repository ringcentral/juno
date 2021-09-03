import { ComponentType } from 'react';
import { logInDev } from '../../../foundation';
import {
  Connectable,
  ConnectSymbol,
  Scheduler,
  ThrottleScheduler,
} from '../Connectable';
import { PortalStore } from './PortalStore';
import {
  ControlledProps,
  createPortalDescriptorProps,
  PortalController,
  PortalDescriptor,
  PortalOptions,
  UncontrolledProps,
  UniqID,
  UnmountSymbol,
} from './types';
import { createPromise, UniqIdUtil } from './utils';

const managerUniqIdUtils = new UniqIdUtil();

export class PortalManager<D extends {} = {}> extends Connectable<
  PortalDescriptor[]
> {
  constructor(scheduler: Scheduler = new ThrottleScheduler()) {
    super(scheduler);

    this._portalStore[ConnectSymbol]((portals) => this.emit(portals));
  }

  readonly id = managerUniqIdUtils.get();

  protected readonly _portalStore = new PortalStore<D>();

  private readonly _uniqIdUtils = new UniqIdUtil();

  /**
   * open a component with portal (Dialog, snackbar, modal...)
   * @param Component the component you want to open
   * @param options some options (id, props...)
   */
  open<P extends {} = {}, F = undefined>(
    Component: ComponentType<ControlledProps<P, F>>,
    options: PortalOptions<P, D> = {},
  ) {
    const { id: _id, props, data } = options;

    const id = _id ?? this._uniqIdUtils.get();

    const portalWithSameID = this._portalStore.get(id);

    // portalWithSameID opened
    if (portalWithSameID?.open) {
      logInDev({
        component: 'RcPortalHost',
        message: `open the portal with id('${id}') failed, this portal is already open`,
      });
      return portalWithSameID.portalController;
    }

    const portalDescriptor = this.createPortalDescriptor({
      Component,
      id,
      props,
      data,
    });

    // portalWithSameID closed and not unmount
    if (portalWithSameID) {
      portalWithSameID.portalController.onClosed.then(() => {
        this._openPortal(portalDescriptor);
      });
    }
    // portalWithSameID unmounted
    else {
      this._openPortal(portalDescriptor);
    }

    return portalDescriptor.portalController;
  }

  /**
   * close all
   */
  closeAll() {
    for (const portal of this._portalStore.portals) {
      portal.open = false;
    }
    this._portalStore.manuallyEmit();
  }

  /**
   * get portal controller which on top
   */
  getTop<P extends {} = {}, F = any>(): PortalController<P, F> | undefined {
    return this._portalStore.lastPortal?.portalController;
  }

  /**
   * get portal controller by id
   */
  getByID<P extends {} = {}, F = any>(
    id: UniqID,
  ): PortalController<P, F> | undefined {
    return this._portalStore.get(id)?.portalController;
  }

  /**
   * check if it's opened by id. equal 'portalController.isOpened'
   */
  isOpened(id: UniqID) {
    const portal = this._portalStore.get(id);
    return Boolean(portal?.open);
  }

  /**
   * check if it's on top by id. equal 'portalController.isTop'
   */
  isTop(id: UniqID) {
    return this._portalStore.lastPortal?.id === id;
  }

  /**
   * for RC component (Modal, component based on modal, snackbar).
   * invoke this function would set 'open' prop to be false
   * then unmount component after animation finish
   *
   * for non-RC component, you need unmount by self or call unmount directly
   *
   * equal 'portalController.close()'
   */
  closeByID<F>(id: UniqID, feedback?: F) {
    const portal = this._portalStore.get(id);
    if (!portal?.open) {
      logInDev({
        component: 'RcPortalHost',
        message: 'close portal failed, this portal is already closed',
      });
      return;
    }

    portal.feedback = feedback;
    portal.open = false;

    this._portalStore.manuallyEmit();
  }

  /**
   * invoke this to close portal is not recommend, will loss close animation
   *
   * this function just help you unmount component after close animation finish
   *
   * RC component (Modal, component based on modal, snackbar) would invoke this after close animation finish
   */
  [UnmountSymbol](id: UniqID) {
    const portal = this._portalStore.get(id);
    if (!portal) {
      logInDev({
        component: 'RcPortalHost',
        message: 'unmount portal failed, this portal is already unmount',
      });
      return;
    }

    this._portalStore.delete(portal.id);
  }

  /**
   * update props by id, equal 'portalController.updateProps(newProps)'
   */
  updatePropsByID<P extends {}>(id: UniqID, props: UncontrolledProps<P>) {
    const portal = this._portalStore.get(id);
    if (!portal?.open) {
      logInDev({
        component: 'RcPortalHost',
        message: 'update props failed, this portal is already closed',
      });
      return;
    }

    portal.props = props;

    this._portalStore.manuallyEmit();
  }

  protected onConnected() {
    super.onConnected();

    // prevent invoke 'open()' fail before PortalHost connect this
    this._portalStore.manuallyEmit();
  }

  protected onDisconnected() {
    super.onDisconnected();

    // clean all portal after PortalHost disconnect this
    this._portalStore.clear(false);
  }

  private _openPortal(portal: PortalDescriptor<D>) {
    this._portalStore.add(portal);
  }

  private createPortalDescriptor<P extends {}, F>({
    props,
    data,
    Component,
    id,
  }: createPortalDescriptorProps<P, F, D>) {
    const [onOpened, resolveOnOpened] = createPromise<void>();
    const [onClosed, resolveOnClosed] = createPromise<F | undefined>();

    const isTop = () => this.isTop(id);
    const isOpened = () => this.isOpened(id);

    const portalController: PortalController<P, F, D> = {
      id,
      onOpened,
      onClosed,

      close: (feedback?: F) => {
        this.closeByID(id, feedback);
      },

      updateProps: (newProps: UncontrolledProps<P>) => {
        this.updatePropsByID(id, newProps);
      },

      data,

      get isOpened() {
        return isOpened();
      },

      get isTop() {
        return isTop();
      },
    };

    // mutable object
    const portalDescriptor: PortalDescriptor<D, P, F> = {
      id,
      Component,
      feedback: undefined,

      onMounted: () => {
        resolveOnOpened();
      },

      onUnmounted: () => {
        resolveOnClosed(portalDescriptor.feedback);
      },

      props,

      onClose: (feedback: F) => {
        // check if open. prevent close twice if close outside component
        if (portalDescriptor.open) this.closeByID(id, feedback);
      },

      open: true,

      portalController,
    };

    return portalDescriptor;
  }
}
