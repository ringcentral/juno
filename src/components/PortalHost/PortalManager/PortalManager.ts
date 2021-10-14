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

export class PortalManager<D extends {} = {}> extends Connectable<
  PortalDescriptor[]
> {
  constructor(scheduler: Scheduler = new ThrottleScheduler()) {
    super(scheduler);

    this.portalStore[ConnectSymbol]((portals) => this.emit(portals));
  }

  /**
   * you can custom your manager by control this
   */
  protected readonly portalStore = new PortalStore<D>();

  private readonly _feedbackMap = new Map<UniqID, any>();

  private readonly _uniqIdUtils = new UniqIdUtil();

  /**
   * open a component with portal (Dialog, snackbar, modal...)
   * @param Component the component you want to open
   * @param options some options (id, props...)
   */
  open<P extends {} = {}, F = undefined>(
    Component: ComponentType<ControlledProps<P, F>>,
    options: PortalOptions<P, D> = {},
  ): PortalController<P, F, D> {
    const { id: _id, props, data } = options;

    const id = _id ?? this._uniqIdUtils.get();

    const currPortal = this.portalStore.get(id);

    // portalWithSameID opened
    if (currPortal?.open) {
      logInDev({
        component: 'RcPortalHost',
        message: `open the portal with id('${id}') failed, this portal is already open`,
      });
      return currPortal.portalController;
    }

    const portalDescriptor = this.createPortalDescriptor({
      Component,
      id,
      props,
      data,
    });

    // portalWithSameID closed and not unmount
    if (currPortal) {
      // when closing (Animating), trigger open again.
      currPortal.portalController.onClosed.then(() => {
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
    this.portalStore.batch((store) => {
      for (const portal of this.portalStore.portals) {
        store.addOrUpdate({ ...portal, open: false });
      }
    });
  }

  /**
   * get portal controller which on top
   */
  getTop<P extends {} = {}, F = any>(): PortalController<P, F> | undefined {
    return this.portalStore.lastPortal?.portalController;
  }

  /**
   * get portal controller by id
   */
  getByID<P extends {} = {}, F = any>(
    id: UniqID,
  ): PortalController<P, F> | undefined {
    return this.portalStore.get(id)?.portalController;
  }

  /**
   * check if it's opened by id. equal 'portalController.isOpened'
   */
  isOpened(id: UniqID) {
    const portal = this.portalStore.get(id);
    return Boolean(portal?.open);
  }

  /**
   * check if it's on top by id. equal 'portalController.isTop'
   */
  isTop(id: UniqID) {
    return this.portalStore.lastPortal?.id === id;
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
    const portal = this.portalStore.get(id);
    if (!portal?.open) {
      logInDev({
        component: 'RcPortalHost',
        message: 'close portal failed, this portal is already closed',
      });
      return;
    }

    this._feedbackMap.set(portal.id, feedback);
    this.portalStore.addOrUpdate({ ...portal, open: false });
  }

  /**
   * invoke this to close portal is not recommend, will loss close animation
   *
   * this function just help you unmount component after close animation finish
   *
   * RC component (Modal, component based on modal, snackbar) would invoke this after close animation finish
   */
  [UnmountSymbol](id: UniqID) {
    const portal = this.portalStore.get(id);
    if (!portal) {
      logInDev({
        component: 'RcPortalHost',
        message: 'unmount portal failed, this portal is already unmount',
      });
      return;
    }

    this.portalStore.delete(portal.id);
  }

  /**
   * update props by id, equal 'portalController.updateProps(newProps)'
   */
  updatePropsByID<P extends {}>(id: UniqID, props: UncontrolledProps<P>) {
    const portal = this.portalStore.get(id);
    if (!portal?.open) {
      logInDev({
        component: 'RcPortalHost',
        message: 'update props failed, this portal is already closed',
      });
      return;
    }

    this.portalStore.addOrUpdate({ ...portal, props });
  }

  protected onConnected() {
    super.onConnected();

    // prevent invoke 'open()' fail before PortalHost connect this
    this.portalStore.forceEmit();
  }

  protected onDisconnected() {
    super.onDisconnected();

    // clean all portal after PortalHost disconnect this
    this.portalStore.clear();
    this._feedbackMap.clear();
  }

  private _openPortal(portal: PortalDescriptor<D>) {
    this.portalStore.addOrUpdate(portal);
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

    const portalDescriptor: PortalDescriptor<D, P, F> = {
      id,
      Component,

      onMounted: () => {
        resolveOnOpened();
      },

      onUnmounted: () => {
        const feedback = this._feedbackMap.get(id);
        resolveOnClosed(feedback);
      },

      props,

      onClose: (feedback: F) => {
        this.closeByID(id, feedback);
      },

      open: true,

      portalController,
    };

    return portalDescriptor;
  }
}
