import React from 'react';

import { RcClasses } from '../../../foundation';
import { RcMenuItem } from '../../Menu/MenuItem';
import { RcDownshiftProps } from '../Downshift';
import { RcDownshiftSelectedItem } from './SelectItem';

export const RcDownshiftInputClasses = RcClasses<
  RcDownshiftProps['InputProps']
>(['root', 'input', 'container'], 'RcDownshiftInput');

export const isItemCanSelected = (
  item?: RcDownshiftSelectedItem | null,
): item is RcDownshiftSelectedItem => {
  return !!(item && !item.disabled && !item.isMember && !item.unSelectable);
};

export const DEFAULT_KEY_TO_CHIPS = [';', ',', '\\n'];
export const DEFAULT_LIMIT_CHIPS = 20;
export const DEFAULT_GET_OPTION_LABEL = (item: RcDownshiftSelectedItem) =>
  item.label || '';

export const RcDownshiftDefaultRenderNoOptions: RcDownshiftProps['renderNoOptions'] =
  (getNoOptionsProps) => {
    return (
      <RcMenuItem component="div" {...getNoOptionsProps()}>
        No Options
      </RcMenuItem>
    );
  };

export const RcDownshiftDefaultFilterOptions: RcDownshiftProps['filterOptions'] =
  (options, { inputValue, getOptionLabel, selectedItems }) => {
    return options.filter(
      (item) =>
        selectedItems.indexOf(item) < 0 &&
        getOptionLabel?.(item)
          .toLowerCase()
          .startsWith(inputValue?.toLowerCase() || ''),
    );
  };
