import { RcIconButtonProps } from '../../Buttons/IconButton';

export type RcDownshiftSelectedItem = {
  /** children item id */
  id?: number | string;
  /** display label */
  label?: string;
  /** is that item disabled */
  disabled?: boolean;
  /** is that item error */
  error?: boolean;
  /** is that come from freeSolo item */
  freeSolo?: boolean;
  /** that item belongs group */
  group?: RcDownshiftGroupedOption;

  /**
   * @deprecated
   * use for when that item is from freeSolo,
   * please use `freeSold` to replace that,
   * remember `isSuggestion=false` equal to `freeSolo=true`
   */
  isSuggestion?: boolean;
  /** @deprecated */
  email?: string | Promise<any>;
  /** @deprecated */
  isMember?: boolean;
  /** @deprecated is that unSelectable, should use `disabled` to replace that */
  unSelectable?: boolean;
  /** @deprecated is that item error, should use `error` to replace that */
  isError?: boolean;
};

export type RcDownshiftSelectedItemAdditionProps = {
  /** that key of item */
  key?: string;
  /** role of that item */
  role?: string;
  /** when that item is group, that will get class with `classes.groupTitle` */
  className?: string;
  /** current position of set */
  'aria-posinset'?: number;
  /** number of all options */
  'aria-setsize'?: number;
  /** binding event when click item */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /** stop propagation */
  onMouseDown?: React.MouseEventHandler<HTMLElement>;
  /** binding mouse over event */
  onMouseOver?: React.MouseEventHandler<HTMLElement>;
};

export interface RcDownshiftGroupedOption<T = RcDownshiftSelectedItem> {
  /** group key */
  key: number;
  /** group index */
  index: number;
  /** group title */
  group: string;
  /** expanded state */
  expanded: boolean;
  /** The props apply on `ExpandIconProps` */
  getExpandIconProps?: (
    additionProps?: Partial<RcIconButtonProps>,
  ) => Partial<RcIconButtonProps> | undefined;
  options: T[];
}
