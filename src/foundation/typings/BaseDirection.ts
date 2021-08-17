type BaseDirections = {
  horizontal: any;
  vertical: any;
};

export type RcBaseDirection<
  T extends keyof BaseDirections = 'horizontal' | 'vertical'
> = keyof Pick<BaseDirections, T>;
