type BaseColor = {
  primary: any;
  secondary: any;
  inherit: any;
  default: any;
  error: any;
  /**  */
  positive: any;
  negative: any;
  action: any;
  neutral: any;
};

export type RcBaseColor<T extends keyof BaseColor = 'primary' | 'secondary'> =
  keyof Pick<BaseColor, T>;
