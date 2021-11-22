import React, { forwardRef, useCallback, useMemo, useState } from 'react';

import { PopoverOrigin } from '@material-ui/core/Popover';

import { combineProps, RcBaseProps, styled } from '../../../../foundation';
import { RcButton, RcButtonProps } from '../../../Buttons';
import { RcMenu } from '../../../Menu';
import { RcVirtualizedMenu } from '../../../VirtualizedMenu';
import { RcSelect, RcSelectProps } from '../Select';
import { SelectArrowDownIcon } from '../styles';
import { plainSelectStyle } from './styles';
import {
  RcPlainSelectInputClasses,
  RcPlainSelectTouchRippleClasses,
  switchVariantToButtonVariant,
  UnionButtonVariant,
} from './utils';

type RcPlainSelectPropsVariant = 'round' | 'plainIcon' | UnionButtonVariant;

type RcPlainSelectProps = {
  /** value of this component, required in PlainSelect */
  value: unknown;
  /** type of variant, default is `text` */
  variant?: RcPlainSelectPropsVariant;
  /** Button Props */
  ButtonProps?: RcButtonProps;
  /** item for the select options */
  children: JSX.Element[];
} & RcBaseProps<RcSelectProps, 'variant' | 'multiple' | 'error'>;

const defaultButtonProps: RcButtonProps = {
  TouchRippleProps: { classes: RcPlainSelectTouchRippleClasses },
};

const EmptyIcon = () => null;

const plainAnchorOrigin: PopoverOrigin = {
  horizontal: 'left',
  vertical: 'bottom',
};

const _RcPlainSelect = forwardRef<any, RcPlainSelectProps>(
  (
    {
      children,
      className,
      classes,
      value,
      renderValue,
      variant,
      ButtonProps,
      innerRef,
      SelectInputProps,
      InputProps,
      disabled,
      autoFocus,
      size,
      virtualize,
      fullWidth,
      //
      IconComponent,
      onOpen: onOpenProp,
      onClose: onCloseProp,
      ...rest
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);

    const display = useMemo(() => {
      const item = children.find((child) => {
        return child.props['value'] === value;
      });

      return item?.props['children'];
    }, [children, value]);

    const _renderValue = useCallback(
      (value: any) => {
        const _variant = switchVariantToButtonVariant(variant!);

        return (
          <RcButton
            ref={ref}
            innerRef={innerRef}
            disabled={disabled}
            size={size}
            fullWidth={fullWidth}
            autoFocus={autoFocus}
            variant={_variant}
            aria-label="open menu"
            aria-haspopup="listbox"
            {...combineProps(defaultButtonProps, ButtonProps)}
          >
            {renderValue ? renderValue(value) : display}
            {(IconComponent && <IconComponent open={open} />) || (
              <SelectArrowDownIcon
                // * reset default color
                color={undefined}
                // *for reverse button
                className={open ? 'MuiSelect-iconOpen' : ''}
              />
            )}
          </RcButton>
        );
      },
      [
        ButtonProps,
        IconComponent,
        autoFocus,
        disabled,
        display,
        fullWidth,
        innerRef,
        open,
        ref,
        renderValue,
        size,
        variant,
      ],
    );

    const _SelectInputProps = useMemo<RcSelectProps['SelectInputProps']>(() => {
      return combineProps(
        {
          MenuComponent: virtualize ? RcVirtualizedMenu : RcMenu,
          MenuProps: {
            anchorOrigin: plainAnchorOrigin,
          },
          SelectDisplayProps: {
            // * clean default select tabIndex set,
            // * use our custom button render to trigger default event
            tabIndex: undefined,
            'aria-haspopup': undefined,
            role: undefined,
          },
        },
        SelectInputProps,
      );
    }, [SelectInputProps, virtualize]);

    const _InputProps = useMemo<RcSelectProps['InputProps']>(() => {
      return combineProps(
        {
          classes: RcPlainSelectInputClasses,
          disableUnderline: true,
        },
        InputProps,
      );
    }, [InputProps]);

    return (
      <RcSelect
        className={className}
        value={value}
        // * set any for select could not find any class
        variant={'none' as any}
        disabled={disabled}
        IconComponent={EmptyIcon}
        onOpen={(e: React.ChangeEvent<{}>) => {
          setOpen(true);
          onOpenProp?.(e);
        }}
        onClose={(e: React.ChangeEvent<{}>) => {
          setOpen(false);
          onCloseProp?.(e);
        }}
        SelectInputProps={_SelectInputProps}
        InputProps={_InputProps}
        renderValue={_renderValue}
        fullWidth={fullWidth}
        {...rest}
      >
        {children}
      </RcSelect>
    );
  },
);

/** @release */
const RcPlainSelect = styled(_RcPlainSelect)`
  ${plainSelectStyle}
`;

RcPlainSelect.defaultProps = {
  variant: 'text',
  size: 'medium',
};

RcPlainSelect.displayName = 'RcPlainSelect';

export { RcPlainSelect };
export type { RcPlainSelectProps, RcPlainSelectPropsVariant };
