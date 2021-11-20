type BaseLabelPlacement = {
  top: any;
  start: any;
  end: any;
  bottom: any;
};

export type RcBaseLabelPlacement<
  T extends keyof BaseLabelPlacement = 'top' | 'start' | 'end' | 'bottom',
> = keyof Pick<BaseLabelPlacement, T>;
