import MuiTextField, {
  StandardTextFieldProps as MuiStandardTextFieldProps,
} from '@material-ui/core/TextField';
import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  clearReactReferencesInNode,
  combineClasses,
  combineProps,
  RcBaseProps,
  RcBaseSize,
  RcTheme,
  styled,
  useEventCallback,
  useForkRef,
  useThemeProps,
  withDeprecatedCheck,
} from '../../../foundation';
import DeleteCircle from '../../../icon/DeleteCircle';
import { RcIconButtonProps } from '../../Buttons';
import { WithTooltipProps } from '../../Tooltip';
import { RcTypographyProps } from '../../Typography';
import { useRcFormContext } from '../Form/Form/FormContext';
import { ClearIconButton, TextFieldStyle } from './styles';
import {
  RcOutlineTextFieldIconSizes,
  RcOutlineTextFieldInputClasses,
  RcTextFieldClasses,
  RcTextFieldFormHelperTextClasses,
  RcTextFieldInputClasses,
  RcTextFieldInputLabelClasses,
} from './utils';

type RcOutlineTextSizeRadius = keyof RcTheme['radius'];

type RcOutlineTextSize = RcBaseSize<'small' | 'medium' | 'large'>;

type RcTextFieldVariant = 'standard' | 'outline' | 'borderLess';

type RcTextFieldProps = {
  /** variant type for different display TextField */
  variant?: RcTextFieldVariant;
  /** border radius for outline text field */
  radius?: RcOutlineTextSizeRadius;
  /** size for TextField when `variant="outline"` */
  size?: RcOutlineTextSize;
  /** align for text */
  align?: 'left' | 'center' | 'right';
  /** set input text size when `variant="borderLess"` */
  textVariant?: RcTypographyProps['variant'];
  /** is should show clear button */
  clearBtn?: boolean;
  /** when clear button trigger */
  onClear?: React.MouseEventHandler<HTMLButtonElement>;
  /** props apply on default clear button */
  clearButtonProps?: RcIconButtonProps & WithTooltipProps;
  /** If `true`, the input element will be `select` during the first mount. */
  autoSelect?: boolean;

  /** @deprecated please use `autoFocus` to replace that */
  focusOnMount?: boolean;
  /** @deprecated please use `autoSelect` to replace that */
  selectOnMount?: boolean;
  /** @deprecated */
  autoFocusDelay?: number;
  /** @deprecated clear button label, please use `clearButtonProps` with `title` replace that */
  clearLabel?: string;
  /** @deprecated clear button aria-label, use `clearButtonProps` with `aria-label` replace that */
  clearAriaLabel?: string;
  /** if you use validate, the error you pass in will not take effect anymore */
  validate?: (value: RcTextFieldProps['value']) => string | false;
} & RcBaseProps<
  MuiStandardTextFieldProps,
  | 'variant'
  | 'color'
  | 'hiddenLabel'
  | 'select'
  | 'SelectProps'
  | 'size'
  | 'margin'
  | 'rowsMax'
  | 'rows'
> &
  Pick<RcTypographyProps, 'gutterBottom'>;

const combineOutlineClasses = combineClasses(
  RcTextFieldInputClasses,
  RcOutlineTextFieldInputClasses,
);

const _RcTextField = forwardRef<any, RcTextFieldProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcTextField' });
  const {
    classes: classesProp,
    InputLabelProps: InputLabelPropsProp,
    FormHelperTextProps: FormHelperTextPropsProp,
    value: valueProp,
    focusOnMount,
    selectOnMount,
    clearAriaLabel,
    // TODO: remove when remove focusOnMount
    autoFocus: autoFocusProp = focusOnMount,
    InputProps: InputPropsProp,
    error,
    helperText,
    defaultValue,
    inputRef: inputRefProp,
    autoSelect = selectOnMount,
    autoFocusDelay,
    clearLabel,
    clearButtonProps,
    clearBtn,
    validate,
    onChange,
    onBlur,
    onFocus,
    onClear,
    id,
    // #region outline pick props
    variant,
    radius,
    size,
    align,
    textVariant,
    gutterBottom,
    // #endregion
    ...rest
  } = props;
  const formContext = useRcFormContext();

  const innerRef = useRef<HTMLInputElement>();
  const inputRef = useForkRef(inputRefProp!, innerRef);

  const [validateMessage, setValidateMessage] = useState('');

  const runValidate = useEventCallback((value = valueProp) => {
    let validateMessage: string | false = false;

    if (validate) {
      validateMessage = validate(value);

      setValidateMessage(validateMessage !== false ? validateMessage : '');
    }
    return validateMessage;
  });

  const handleClear = useEventCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const fakeEvent = { target: { value: '' } } as any;

      onClear?.(event);
      onChange?.(fakeEvent);
      setValidateMessage('');
    },
  );

  const endAdornment = useMemo(() => {
    const getCleanButton = () => {
      const iconTitle = clearLabel || clearButtonProps?.title;

      const combineClearProps = combineProps(
        {
          TooltipProps: {
            tooltipForceHide: !iconTitle,
          },
          onClick: handleClear,
          size: RcOutlineTextFieldIconSizes[size!],
        },
        clearButtonProps,
      );

      return (
        <ClearIconButton
          title={iconTitle}
          aria-label={clearAriaLabel || iconTitle}
          symbol={DeleteCircle}
          {...combineClearProps}
        />
      );
    };

    if (InputPropsProp?.endAdornment) {
      if (clearBtn) {
        return (
          <>
            {getCleanButton()}
            {InputPropsProp.endAdornment}
          </>
        );
      }
      return InputPropsProp.endAdornment;
    }

    return clearBtn ? getCleanButton() : undefined;
  }, [
    InputPropsProp,
    clearAriaLabel,
    clearBtn,
    clearButtonProps,
    clearLabel,
    handleClear,
    size,
  ]);

  const events = useMemo(
    () =>
      combineProps(
        {
          onBlur: () => {
            runValidate();
          },
          onFocus: () => {
            if (validateMessage !== '') {
              setValidateMessage('');
            }
          },
        },
        {
          onBlur,
          onFocus,
        },
      ),
    [onBlur, onFocus, runValidate, validateMessage],
  );

  const classes = useMemo(
    () => combineClasses(RcTextFieldClasses, classesProp),
    [classesProp],
  );

  const InputProps = useMemo(() => {
    const curr = {
      outline: combineOutlineClasses,
      borderLess: undefined,
      standard: undefined,
    }[variant!];

    return combineProps(
      {
        classes: curr || RcTextFieldInputClasses,
        disableUnderline: ['outline', 'borderLess', 'inline'].includes(
          variant as any,
        ),
      },
      {
        ...InputPropsProp,
        endAdornment,
      },
    );
  }, [InputPropsProp, endAdornment, variant]);

  const FormHelperTextProps = useMemo(
    () =>
      combineProps(
        { classes: RcTextFieldFormHelperTextClasses },
        FormHelperTextPropsProp,
      ),
    [FormHelperTextPropsProp],
  );

  const InputLabelProps = useMemo(
    () =>
      combineProps(
        { classes: RcTextFieldInputLabelClasses, shrink: true },
        InputLabelPropsProp,
      ),
    [InputLabelPropsProp],
  );

  useLayoutEffect(() => {
    const inputElm = innerRef.current;
    const autoFocus = autoFocusProp || InputPropsProp?.autoFocus;

    let timerId: ReturnType<typeof setTimeout> | null = null;

    if (autoSelect && inputElm?.value) {
      inputElm.select();
    } else {
      const focus = () => inputElm?.focus();

      if (autoFocus) {
        if (autoFocusDelay) {
          timerId = setTimeout(focus, autoFocusDelay);
        } else {
          focus();
        }
      }
    }

    return () => {
      if (timerId) clearTimeout(timerId);

      if (inputElm) {
        clearReactReferencesInNode(inputElm);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (id) formContext.set(id, { validate: () => runValidate() });

    return () => {
      if (id) formContext.delete(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MuiTextField
      {...rest}
      {...events}
      id={id}
      value={valueProp}
      onChange={onChange}
      defaultValue={defaultValue}
      error={validate ? !!validateMessage : error}
      helperText={validateMessage || helperText}
      classes={classes}
      FormHelperTextProps={FormHelperTextProps}
      InputLabelProps={InputLabelProps}
      InputProps={InputProps}
      inputRef={inputRef}
      ref={ref}
    />
  );
});

/** @release */
const RcTextField = styled(
  withDeprecatedCheck(
    _RcTextField,
    [
      {
        prop: 'focusOnMount',
        time: '2021-4',
        comment: `please use \`autoFocus\` to replace that`,
      },
      {
        prop: 'selectOnMount',
        time: '2021-4',
        comment: `please use \`autoSelect\` to replace that`,
      },
      {
        prop: 'clearLabel',
        time: '2021-4',
        comment: `clear button label, please use \`clearButtonProps\` with \`title\` replace that`,
      },
      {
        prop: 'clearAriaLabel',
        time: '2021-4',
        comment: `clear button aria-label, use \`clearButtonProps\` with \`aria-label\` replace that`,
      },
    ],
    'RcTextField',
  ),
)`
  ${TextFieldStyle}
`;

RcTextField.defaultProps = {
  clearBtn: true,
  variant: 'standard',
  radius: 'lg',
  size: 'medium',
  textVariant: 'subheading1',
};

RcTextField.displayName = 'RcTextField';

export {
  RcTextField,
  RcTextFieldProps,
  RcTextFieldVariant,
  RcOutlineTextSizeRadius,
  RcOutlineTextFieldIconSizes,
  RcOutlineTextSize,
};
