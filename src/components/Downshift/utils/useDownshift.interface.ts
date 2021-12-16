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
    /** current input value */
    inputValue?: string;
    /** is that input value have been changed or not */
    inputChanged?: boolean;
    /** get option label */
    getOptionLabel: (option: T) => string;
    /** current be selected item array  */
    selectedItems: T[];
  },
) => T[];

export type RcDownshiftHighlightChangeReason =
  | 'keyboard'
  | 'mouse'
  | 'auto'
  | undefined;
