import { ComponentType } from 'react';
import { combineProps, DeepPartial, logInDev } from '../../../foundation';
import {
  ThrottleScheduler,
  Connectable,
  ConnectSymbol,
  Scheduler,
} from '../Connectable';
import { PortalStore } from './PortalStore';
import {
  ControlledProps,
  PortalController,
  PortalDescriptor,
  PortalOptions,
  UncontrolledProps,
  UniqID,
} from './types';
import { createPromise, UniqIdUtil } from './utils';

const managerUniqIdUtils = new UniqIdUtil();

export class PortalManager<A extends {} = {}> extends Connectable<
  PortalDescriptor[]
> {
  constructor(scheduler: Scheduler = new ThrottleScheduler()) {
    super(scheduler);

    this._portalStore[ConnectSymbol]((portals) => this.emit(portals));
  }

  readonly id = managerUniqIdUtils.get();

  protected readonly _portalStore = new PortalStore<A>();

  private readonly _portalUniqIdUtils = new UniqIdUtil();

  open<P extends {} = {}, F = undefined>(
    component: ComponentType<ControlledProps<P, F>>,
    options: PortalOptions<P, A> = {},
  ) {
    const { id: _id, props, addition } = options;

    const id = _id ?? this._portalUniqIdUtils.get();

    const [afterOpened, resolveAfterOpened] = createPromise<void>();
    const [afterClosed, resolveAfterClosed] = createPromise<F | undefined>();

    const portalController: PortalController<P, F> = {
      id,
      afterOpened,
      afterClosed,

      close: (feedback?: F) => {
        this.closeByID(id, feedback);
      },

      unmount: () => {
        this.unmountById(id);
      },

      isOpened: () => {
        return this.isOpened(id);
      },

      updateProps: (
        newProps: UncontrolledProps<P> | DeepPartial<UncontrolledProps<P>>,
        isCombined: boolean = false,
      ) => {
        this.updatePropsByID(id, newProps as any, isCombined as any);
      },

      isTop: () => {
        return this.isTop(id);
      },
    };

    // mutable object
    const portalDescriptor: PortalDescriptor<{}, A> = {
      id,
      Component: component,
      feedback: undefined,

      onAfterOpened: () => {
        resolveAfterOpened();
      },

      onAfterClosed: () => {
        resolveAfterClosed(portalDescriptor.feedback);
      },

      props: { ...props },

      onClose: (feedback: F) => {
        // check if open. prevent close twice if close outside component
        if (portalDescriptor.open) this.closeByID(id, feedback);
      },

      open: true,

      portalController,

      addition,
    };

    this._openPortal(portalDescriptor);

    return portalController;
  }

  closeAll() {
    for (const portal of this._portalStore.portals()) {
      portal.open = false;
    }
    this._portalStore.manuallyEmit();
  }

  unmountAll() {
    this._portalStore.clear();
  }

  getTop<P extends {} = {}, F = any>(): PortalController<P, F> | undefined {
    return this._portalStore.lastPortal?.portalController;
  }

  getByID<P extends {} = {}, F = any>(
    id: UniqID,
  ): PortalController<P, F> | undefined {
    return this._portalStore.get(id)?.portalController;
  }

  getAdditionByID(id: UniqID) {
    return this._portalStore.get(id)?.addition;
  }

  isOpened(id: UniqID) {
    const portal = this._portalStore.get(id);
    return Boolean(portal?.open);
  }

  isTop(id: UniqID) {
    return this._portalStore.lastPortal?.id === id;
  }

  /**
   * for RC component (Modal, component based on modal, snackbar).
   * invoke this function would set 'open' prop to be false
   * then unmount component after animation finish
   *
   * for non-RC component, you need unmount by self or call unmount directly
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

  unmountById(id: UniqID) {
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

  updatePropsByID<P extends {}>(
    id: UniqID,
    props: UncontrolledProps<P>,
    isCombined: false,
  ): void;

  updatePropsByID<P extends {}>(
    id: UniqID,
    props: DeepPartial<UncontrolledProps<P>>,
    isCombined: true,
  ): void;

  updatePropsByID<P extends {}>(
    id: UniqID,
    props: DeepPartial<UncontrolledProps<P>> | UncontrolledProps<P>,
    isCombined = false,
  ) {
    const portal = this._portalStore.get(id);
    if (!portal?.open) {
      logInDev({
        component: 'RcPortalHost',
        message: 'update props failed, this portal is already closed',
      });
      return;
    }

    if (isCombined) {
      portal.props = combineProps(portal.props, props);
    } else {
      portal.props = props;
    }

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

  private _openPortal(portal: PortalDescriptor<{}, A>) {
    this._portalStore.add(portal);
  }
}
