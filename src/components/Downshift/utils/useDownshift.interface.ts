export type RcDownshiftGetItemPropsOptions<T> = {
  index?: number;
  item: T;
  isSelected?: boolean;
  disabled?: boolean;
  ref?: React.RefObject<any>;
} & React.HTMLAttributes<HTMLElement>;

export type RcDownshiftGetSelectedItemProps<T> = {
  index: number;
  selectedItem: T;
  [arbitrary: string]: any;
} & Omit<React.HTMLAttributes<HTMLElement>, 'children'>;

export type RcDownshiftFilterOptions<T> = (
  options: T[],
  state: {
    inputValue?: string;
    getOptionLabel: (option: T) => string;
    selectedItems: T[];
  },
) => T[];

export type RcDownshiftHighlightChangeReason =
  | 'keyboard'
  | 'mouse'
  | 'auto'
  | undefined;
