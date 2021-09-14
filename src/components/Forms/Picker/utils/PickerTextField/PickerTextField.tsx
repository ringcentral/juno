import { PopoverOrigin } from '@material-ui/core/Popover';
import uniqueId from 'lodash/uniqueId';
import React, {
  forwardRef,
  Ref,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  combineProps,
  RcBaseProps,
  useA11yKeyEvent,
  useEventCallback,
} from '../../../../../foundation';
import DeleteCircleIcon from '../../../../../icon/DeleteCircle';
import { RcIconButton } from '../../../../Buttons/IconButton';
import { SvgSymbol } from '../../../../Icon';
import { RcPopoverProps } from '../../../../Popover';
import { RcVisuallyHidden } from '../../../../VisuallyHidden';
import { RcTextFieldProps } from '../../../TextField';
import { StyledPickerTextField, StyledPopover } from '../../styles';

const popoverAnchorOrigin: PopoverOrigin = {
  vertical: 'bottom',
  horizontal: 'left',
};

const popoverTransformOrigin: PopoverOrigin = {
  vertical: 'top',
  horizontal: 'left',
};

type PickerTextFieldProps = {
  /** trigger when user click the clear button */
  onClear?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * announcementText for screen reader read
   */
  inputProps?: {
    /** announcementText announced by screen reader when textField focused */
    announcementText?: string;
  } & RcTextFieldProps['inputProps'];
  /** props for hourPicker component */
  PopoverProps?: RcBaseProps<
    RcPopoverProps,
    'open' | 'anchorEl' | 'anchorOrigin' | 'transformOrigin'
  >;
  /** children for render in popover */
  children: React.ReactNode;
  /** action icon */
  ActionSymbol?: SvgSymbol;
  /** can manual trigger close by ref */
  action?: Ref<PickerTextFieldRef>;
} & Pick<
  RcTextFieldProps,
  | 'value'
  | 'inputRef'
  | 'placeholder'
  | 'gutterBottom'
  | 'disabled'
  | 'required'
  | 'helperText'
  | 'label'
  | 'onKeyDown'
  | 'error'
  | 'InputProps'
  | 'fullWidth'
  | 'className'
  | 'onFocus'
  | 'onBlur'
  | 'onClick'
  | 'id'
  | 'autoFocus'
  | 'clearBtn'
  | 'clearButtonProps'
  | 'validate'
  | 'variant'
  | 'size'
  | 'radius'
>;

const PICKER_DISPLAY_NAME = 'PickerTextField';

type PickerTextFieldRef = {
  close: () => void;
};

const PickerTextField = forwardRef<any, PickerTextFieldProps>((props, ref) => {
  const {
    onClear,
    InputProps,
    disabled,
    action,
    onKeyDown,
    inputProps: { announcementText, ...inputProps } = {},
    PopoverProps: PopoverPropsProp,
    children,
    ActionSymbol,
    clearBtn,
    clearButtonProps,
    value,
    ...rest
  } = props;

  const { current: idForInput } = useRef(uniqueId(`${PICKER_DISPLAY_NAME}-`));
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const idForHelperText = `${idForInput}-helper-text`;
  const idForInstruction = `${idForInput}-instruction`;

  const handlePickerClick = useEventCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!disabled && !anchorEl) {
        setAnchorEl(event.currentTarget);
      }
    },
  );

  const handleA11yKeydown = useA11yKeyEvent(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      setAnchorEl(event.currentTarget);
    },
  );

  const handleKeydown = useEventCallback((event: React.KeyboardEvent<any>) => {
    if (disabled) return;

    handleA11yKeydown(event);
    onKeyDown?.(event);
  });

  const handleClearClick = useEventCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.stopPropagation();
      e.preventDefault();
      onClear?.(e);
    },
  );

  const _InputProps = useMemo<RcTextFieldProps['InputProps']>(() => {
    const iconTitle = clearButtonProps?.title;
    const combineClearProps =
      clearBtn &&
      combineProps(
        {
          TooltipProps: {
            tooltipForceHide: !iconTitle,
          },
          onClick: handleClearClick,
        },
        clearButtonProps,
      );

    return combineProps(
      {
        readOnly: true,
        endAdornment: (
          <>
            {value && (
              <RcIconButton
                className="picker-clear"
                variant="plain"
                tabIndex={-1}
                disabled={disabled}
                symbol={DeleteCircleIcon}
                title={iconTitle}
                aria-label={iconTitle}
                {...combineClearProps}
              />
            )}
            <RcIconButton
              className="picker-action"
              variant="plain"
              tabIndex={-1}
              disabled={disabled}
              symbol={ActionSymbol!}
            />
          </>
        ),
        onClick: handlePickerClick,
        onKeyDown: handleKeydown,
        inputProps: {
          'aria-describedby': `${idForHelperText} ${idForInstruction}`,
          'aria-haspopup': true,
          ...inputProps,
        },
      },
      InputProps,
    );
  }, [
    clearBtn,
    handleClearClick,
    clearButtonProps,
    value,
    disabled,
    ActionSymbol,
    handlePickerClick,
    handleKeydown,
    idForHelperText,
    idForInstruction,
    inputProps,
    InputProps,
  ]);

  const _FormHelperTextProps = useMemo(
    () => ({
      id: idForHelperText,
    }),
    [idForHelperText],
  );

  const onPickerViewClose = useEventCallback(() => {
    setAnchorEl(null);
  });

  const PopoverProps = useMemo(
    () =>
      combineProps(
        {
          onClose: onPickerViewClose,
        },
        PopoverPropsProp,
      ),
    [PopoverPropsProp, onPickerViewClose],
  );

  const popoverOpen = Boolean(anchorEl);

  useImperativeHandle(
    action,
    () => ({
      close: onPickerViewClose,
    }),
    [onPickerViewClose],
  );

  return (
    <>
      <StyledPickerTextField
        id={idForInput}
        ref={ref}
        InputProps={_InputProps}
        FormHelperTextProps={_FormHelperTextProps}
        focused={popoverOpen ? true : undefined}
        disabled={disabled}
        clearBtn={clearBtn}
        value={value}
        {...rest}
      />
      <StyledPopover
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={onPickerViewClose}
        anchorOrigin={popoverAnchorOrigin}
        transformOrigin={popoverTransformOrigin}
        {...PopoverProps}
      >
        {children}
      </StyledPopover>
      <RcVisuallyHidden id={idForInstruction}>
        {announcementText}
      </RcVisuallyHidden>
    </>
  );
});

PickerTextField.displayName = PICKER_DISPLAY_NAME;

export { PickerTextField, PickerTextFieldProps, PickerTextFieldRef };
