import { ComponentType, Key } from 'react';

export type PortalDescriptor<D extends {} = {}, P extends {} = {}, F = any> = {
  readonly id: UniqID;
  readonly Component: ComponentType;
  /**
   * lifecycle hook
   */
  readonly onMounted: () => void;
  /**
   * lifecycle hook
   */
  readonly onUnmounted: () => void;

  /**
   * pass to component. component can call this fn to close self
   */
  readonly onClose: (feedback: any) => void;

  /**
   * mutable object
   */
  readonly portalController: PortalController<P, F, D>;

  props?: {};

  /**
   * pass to component.
   */
  open: boolean;

  feedback: any;
};

export type createPortalDescriptorProps<P extends {}, F, D extends {}> = {
  id: UniqID;
  Component: ComponentType<ControlledProps<P, F>>;
  props?: UncontrolledProps<P>;
  data?: D;
};

// ****** public type ******
export interface PortalController<
  P extends {} = {},
  F = any,
  D extends {} = {}
> {
  id: UniqID;
  /**
   * resolve after portal mounted
   */
  onOpened: Promise<void>;
  /**
   * resolve after portal unmounted
   */
  onClosed: Promise<F | undefined>;

  /**
   * close portal
   * @param feedback onClosed will resolve this feedback value
   */
  close(feedback?: F): void;

  /**
   * update props
   * @param newProps will cover old props
   */
  updateProps: (newProps: UncontrolledProps<P>) => void;

  /**
   * check if it's opened
   */
  readonly isOpened: boolean;

  /**
   * check if it's on top
   */
  readonly isTop: boolean;

  /**
   * custom data
   */
  readonly data?: D;
}

export type ControlledProps<P extends {} = {}, F = undefined> = P & {
  onClose: (feedback?: F) => void;
  open: boolean;
};

export type UncontrolledProps<P extends {}> = Omit<P, 'onClose' | 'open'>;

export type PortalOptions<P, D> = {
  /**
   * props without 'onClose' and 'open'
   */
  props?: UncontrolledProps<P>;
  /**
   * manager will generate id if no provide id
   */
  id?: UniqID;
  /**
   * custom data
   */
  data?: D;
};

export type UniqID = Key;

export const UnmountSymbol = Symbol('UmountPortal');
