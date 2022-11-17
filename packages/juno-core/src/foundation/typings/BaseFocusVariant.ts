type BaseFocusVariant = {
  ripple: any;
  focusRing: any;
  highlight: any;
};

export type RcBaseFocusVariant<T extends keyof BaseFocusVariant> = keyof Pick<
  BaseFocusVariant,
  T
>;
