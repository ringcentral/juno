import { PopoverOrigin } from '@material-ui/core/Popover';
import { SelectProps as MuiSelectProps } from '@material-ui/core/Select';
import React, { forwardRef, useMemo } from 'react';

import {
  combineClasses,
  combineProps,
  RcBaseProps,
  RcBaseSize,
  styled,
  useThemeProps,
} from '../../../foundation';
import { RcMenu } from '../../Menu/Menu';
import { RcVirtualizedMenu } from '../../VirtualizedMenu';
import { RcTextFieldProps } from '../TextField';
import { SelectArrowDownIcon, selectStyle } from './styles';
import {
  RcSelectClasses,
  RcSelectInputClasses,
  RcSelectInputClassesMap,
  RcSelectInputWhenPlaceholderClasses,
  RcSelectTextField,
  SelectInput,
  SelectInputProps,
} from './utils';

type RcSelectVariant = 'box' | 'line';

type RcSelectSize = RcBaseSize<'medium' | 'large'>;

type RcSelectProps = {
  /** size with type 'medium' , 'large' , default with medium */
  size?: RcSelectSize;
  /** variant for select component */
  variant?: RcSelectVariant;
  /** apply for inputComponent component, you can custom `MenuComponent`, `MenuProps` here */
  SelectInputProps?: SelectInputProps;
  /** is that menu virtualize  */
  virtualize?: boolean;
} & RcBaseProps<
  MuiSelectProps,
  | 'variant'
  | 'color'
  | 'rows'
  | 'rowsMax'
  | 'rowsMin'
  | 'maxRows'
  | 'minRows'
  | 'startAdornment'
  | 'disableUnderline'
  | 'autoWidth'
  | 'renderSuffix'
  | 'multiline'
  | 'margin'
> &
  Pick<
    RcTextFieldProps,
    | 'InputProps'
    | 'helperText'
    | 'label'
    | 'validate'
    | 'focused'
    | 'gutterBottom'
    | 'textVariant'
  >;

const leftBottomAnchorOrigin: PopoverOrigin = {
  horizontal: 'left',
  vertical: 'bottom',
};

/** @release */
const _RcSelect = forwardRef<any, RcSelectProps>(
  (inProps: RcSelectProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcSelect' });
    const {
      children,
      onChange,
      SelectInputProps: SelectInputPropsProp,
      textVariant,
      placeholder,
      renderValue,
      displayEmpty,
      variant,
      size,
      value,
      virtualize,
      // * below is should pick into TextField props
      focused,
      gutterBottom,
      helperText,
      label,
      id,
      className,
      validate,
      InputProps,
      required,
      fullWidth,
      disabled,
      error,
      ...rest
    } = props;
    const nonValue =
      value === undefined ||
      value === null ||
      // * if that can't displayEmpty, and that value === '', same as no value
      (!displayEmpty && value === '') ||
      (value instanceof Array && value.length === 0);

    const applyClasses = useMemo(() => {
      const variantClasses = RcSelectInputClassesMap[variant!];

      return combineClasses(RcSelectInputClasses, variantClasses);
    }, [variant]);

    const _SelectProps = useMemo<MuiSelectProps>(() => {
      const additionProps: Partial<SelectInputProps> = {
        MenuComponent: undefined,
        MenuProps: undefined,
      };
      if (rest?.multiple) {
        additionProps.MenuComponent = RcMenu;
        additionProps.MenuProps = {
          anchorOrigin: leftBottomAnchorOrigin,
        };
      }
      if (virtualize) {
        additionProps.MenuComponent = RcVirtualizedMenu;
        additionProps.MenuProps = {
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
          transformOrigin: { horizontal: 0, vertical: 8 },
        };
      }

      return {
        renderValue,
        classes: combineClasses(RcSelectClasses, rest?.classes),
        IconComponent: SelectArrowDownIcon,
        displayEmpty,
        inputComponent: SelectInput as any,
        inputProps: {
          ...additionProps,
          ...rest?.inputProps,
          ...(SelectInputPropsProp as any),
        },
        ...rest,
      };
    }, [rest, virtualize, renderValue, displayEmpty, SelectInputPropsProp]);

    const _InputProps = useMemo<RcSelectProps['InputProps']>(() => {
      let result = InputProps;

      if (placeholder && nonValue) {
        result = combineProps(
          {
            classes: combineClasses(
              RcSelectInputWhenPlaceholderClasses,
              applyClasses,
            ),
            disableUnderline: variant === 'box',
          },
          result,
        );
      }

      return combineProps(
        {
          classes: applyClasses,
        },
        result,
      );
    }, [InputProps, variant, placeholder, nonValue, applyClasses]);

    const valueIsNumber = typeof value === 'number';

    return (
      <RcSelectTextField
        ref={ref}
        id={id}
        className={className}
        // for when that is select type that type will be select onChange, just any for ignore that
        onChange={onChange as any}
        select
        focused={focused}
        gutterBottom={gutterBottom}
        helperText={helperText}
        label={label}
        value={valueIsNumber ? value : value || ''}
        validate={validate}
        required={required}
        fullWidth={fullWidth}
        disabled={disabled}
        error={error}
        InputProps={_InputProps}
        clearBtn={false}
        placeholder={placeholder}
        SelectProps={_SelectProps}
      >
        {children}
      </RcSelectTextField>
    );
  },
);

const RcSelect = styled(_RcSelect)`
  ${selectStyle};
`;

RcSelect.displayName = 'RcSelect';

RcSelect.defaultProps = {
  size: 'medium',
  variant: 'line',
};

export { RcSelect };
export type { RcSelectProps, RcSelectSize, RcSelectVariant };
