import { ComponentType, Key } from 'react';
import { DeepPartial } from '../../../foundation';

export type PortalDescriptor<P extends {} = {}, A extends {} = {}, F = any> = {
  id: UniqID;
  Component: ComponentType<P>;
  props: P;
  /**
   * lifecycle hook
   */
  onAfterOpened: () => void;
  /**
   * lifecycle hook
   */
  onAfterClosed: () => void;

  /**
   * pass to component. component can call this fn to close self
   */
  onClose: (feedback?: F) => void;

  /**
   * pass to component.
   */
  open: boolean;

  /**
   * mutable object
   */
  portalController: PortalController<P, F>;

  /**
   * custom data
   */
  addition?: A;

  feedback: F | undefined;
};

export type PortalController<P, F> = {
  id: UniqID;
  /**
   * after portal mounted
   */
  afterOpened: Promise<void>;
  /**
   * after portal unmounted
   */
  afterClosed: Promise<F | undefined>;

  close(feedback?: F): void;

  unmount(): void;

  // moveToTop(): void;

  isOpened(): boolean;

  isTop(): boolean;

  updateProps: UpdatePropsHandler<UncontrolledProps<P>>;
};

export interface UpdatePropsHandler<P extends {} = {}> {
  (newProps: DeepPartial<P>, isCombined: true): void;
  (newProps: P): void;
  (newProps: P, isCombined: false): void;
}

export type ControlledProps<P extends {}, F> = P & {
  onClose: (feedback?: F) => void;
  open: boolean;
};

export type UncontrolledProps<P extends {}> = Omit<P, 'onClose' | 'open'>;

export type PortalOptions<P, A> = {
  props?: Omit<P, 'onClose'>;
  id?: UniqID;
  addition?: A;
};

export type UniqID = Key;
