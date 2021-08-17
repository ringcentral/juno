type BaseSizes = {
  xxxsmall: any;
  xxsmall: any;
  xsmall: any;
  small: any;
  medium: any;
  large: any;
  inherit: any;
  xlarge: any;
  xxlarge: any;
  xxxlarge: any;
};

export type BaseSizeKey = keyof BaseSizes;

export type RcBaseSize<
  T extends BaseSizeKey = 'small' | 'medium' | 'large'
> = keyof Pick<BaseSizes, T>;
