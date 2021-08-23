/* eslint-disable jsx-a11y/no-static-element-interactions */
import clsx from 'clsx';
import isString from 'lodash/isString';
import trimEnd from 'lodash/trimEnd';
import { InputProps } from '@material-ui/core/Input';
import React, {
  CSSProperties,
  DOMAttributes,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  clearReactReferencesInNode,
  clearWindowSelection,
  combineClasses,
  RcBaseProps,
  RcClassesProps,
  RcPaletteKeys,
  RcTypographyKeys,
  styled,
  useDepsChange,
  useEventCallback,
  useRefState,
  useThemeProps,
  combineProps,
} from '../../foundation';
import { RcTooltip, RcTooltipProps } from '../Tooltip';
import { InlineEditableStyle } from './styles';
import { RcInlineEditableClasses } from './utils';

type RcInlineEditableOnChangeReason = 'leave' | 'confirm';

type RcInlineEditableProps = {
  /** inline value */
  value: string;
  /**
   * trigger when value change apply
   *
   * reason:
   * - leave: trigger when blur input
   * - confirm: trigger when keydown enter
   */
  onChange?: (value: string, reason?: RcInlineEditableOnChangeReason) => void;
  /** text variant, default is `body1` */
  variant?: RcTypographyKeys;
  /** color for apply to text, support full palette, default is `neutral.f06` */
  color?: RcPaletteKeys;
  /** maxLength of that value */
  maxLength?: number;
  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline?: boolean;
  /**
   * If `true`, the editable state will be saving mode
   */
  saving?: boolean;
  /**
   * If `true`, the editable state will be disable, just plain string render.
   */
  disabled?: boolean;
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder?: string;
  /**
   * class apply to root component
   */
  className?: string;
  /**
   * class apply to root component
   */
  style?: CSSProperties;
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth?: boolean;
  /** apply title on label */
  title?: string;
  /** props for pass into `RcTooltip` when is not editing */
  TooltipProps?: RcBaseProps<RcTooltipProps, 'children'>;

  /** @deprecated not need set anymore */
  shouldRemoveNode?: boolean;
  /** @deprecated use `data-test-automation-id="your-key"` directly */
  automationId?: string;
  /**
   * @deprecated
   * use `onChange` to replace that, if your have async method,
   * should set `saving` when async method not complete
   */
  onSave?: (draft: string) => void;
  /** @deprecated use `TooltipProps` with `title` to replace that */
  tooltipTitle?: string;
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps?: InputProps['inputProps'];
} & Pick<
  DOMAttributes<HTMLDivElement>,
  'onKeyDown' | 'onFocus' | 'onBlur' | 'onMouseDown'
> &
  RcClassesProps<'placeholder' | 'label' | 'textField' | 'saving'>;

const _RcInlineEditable = forwardRef<any, RcInlineEditableProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcInlineEditable' });
    const {
      onSave,
      automationId,
      tooltipTitle,
      shouldRemoveNode = true,
      TooltipProps,
      onChange,
      onKeyDown,
      onFocus,
      onBlur,
      onMouseDown,
      value,
      variant,
      multiline,
      disabled,
      maxLength,
      placeholder,
      fullWidth,
      title,
      classes: classesProp,
      color,
      className,
      saving: saving_,
      inputProps,
      ...rest
    } = props;

    const [isEditing, setEditing] = useState(false);
    const [isSaving, setSaving] = useState(false);

    const [draftRef, setDraft] = useRefState('');

    const isNotNeedSaveWhenBlurRef = useRef(false);

    const textFieldRef = useRef<HTMLInputElement & HTMLTextAreaElement>();

    const labelRef = useRef<HTMLDivElement>(null);

    const saving = isSaving || saving_;

    const handleSave = async (
      newValue: string,
      reason?: RcInlineEditableOnChangeReason,
    ) => {
      const outputValue = multiline ? trimEnd(newValue) : newValue.trim();

      if (value !== newValue) {
        if (onChange) {
          onChange?.(outputValue, reason);
        } else if (onSave) {
          // TODO: that method will be remove
          setSaving(true);
          await onSave?.(outputValue);
          setSaving(false);
        }
      }
    };

    const handleKeyDown = useEventCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        onKeyDown?.(e);
        const { key, shiftKey } = e;

        if (!isEditing || (multiline && key === 'Enter' && shiftKey)) {
          return;
        }

        const moveFocus = () => {
          e.stopPropagation();
          e.preventDefault();

          if (textFieldRef.current) {
            isNotNeedSaveWhenBlurRef.current = true;
            // * enter/esc should blur the input (tab does this automatically)
            textFieldRef.current.blur();

            // ! blur input will move the focus to body
            // * should trap the focus at current position for esc/tab to work
            labelRef.current?.focus({ preventScroll: true });
          }
        };

        switch (key) {
          case 'Enter':
            moveFocus();
            handleSave(draftRef.current, 'confirm');
            break;
          case 'Escape':
            moveFocus();
            break;

          default:
            break;
        }
      },
    );

    const handleFocus = useEventCallback((e) => {
      onFocus?.(e);
      setEditing(true);
    });

    const focusTextField = useEventCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
          textFieldRef.current?.focus({ preventScroll: true });
          e.preventDefault();
        }
      },
    );

    const handleBlur = useEventCallback((e) => {
      onBlur?.(e);
      // * clear selection for make that can select all when refocus
      clearWindowSelection();

      const isNeedSave = !isNotNeedSaveWhenBlurRef.current;

      // * when already save in keydown, not need save again
      if (isNeedSave) {
        handleSave(draftRef.current, 'leave');
      }

      setEditing(false);
      isNotNeedSaveWhenBlurRef.current = false;
    });

    const handleMouseDown = useEventCallback((e) => {
      onMouseDown?.(e);
      if (disabled) return;

      setEditing(true);
    });

    const handleDraftChange = useEventCallback(
      (
        e:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLTextAreaElement>,
      ) => {
        setDraft(e.target.value);
      },
    );

    const handleFocusCapture = useEventCallback((e) => {
      e.stopPropagation();
    });

    const classes = useMemo(
      () => combineClasses(RcInlineEditableClasses, classesProp),
      [classesProp],
    );

    useEffect(() => {
      return () => {
        if (shouldRemoveNode && textFieldRef && textFieldRef.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          clearReactReferencesInNode(textFieldRef.current);
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const Component = multiline ? 'textarea' : 'input';

    useDepsChange(() => {
      if (!(isEditing || saving)) {
        setDraft(value, false);
      }
    }, [isEditing, saving, value]);

    const draft = draftRef.current;

    const displayValue = isEditing || saving ? draft : value;

    const toTooltipTitle =
      (isString(TooltipProps?.title) ? TooltipProps?.title : undefined) ??
      tooltipTitle;

    const children = (
      <div
        ref={ref}
        data-test-automation-id={automationId}
        onKeyDown={handleKeyDown}
        className={clsx(className, {
          [classes.saving]: saving,
        })}
        onMouseDown={handleMouseDown}
        {...rest}
      >
        {disabled ? null : (
          <Component
            ref={textFieldRef as any}
            value={draft}
            autoComplete="off"
            maxLength={maxLength}
            placeholder={placeholder}
            {...{
              ...(multiline
                ? {}
                : {
                    type: 'text',
                    'aria-label': toTooltipTitle,
                  }),
            }}
            {...combineProps(
              {
                onChange: handleDraftChange,
                onFocus: handleFocus,
                onBlurCapture: handleBlur,
                className: classes.textField,
              },
              inputProps,
            )}
          />
        )}
        <div
          ref={labelRef}
          title={title || displayValue}
          className={clsx(classes.label, {
            [classes.placeholder]: !displayValue,
          })}
          tabIndex={-1}
          onFocusCapture={handleFocusCapture}
          onKeyDown={disabled || saving ? undefined : focusTextField}
        >
          {displayValue || placeholder}
        </div>
      </div>
    );

    if (!disabled && toTooltipTitle && (TooltipProps || tooltipTitle)) {
      return (
        <RcTooltip
          tooltipForceHide={isEditing}
          disableFocusListener
          {...TooltipProps}
          title={toTooltipTitle}
        >
          {children}
        </RcTooltip>
      );
    }

    return children;
  },
);

const RcInlineEditable = styled(_RcInlineEditable)`
  ${InlineEditableStyle}
`;

RcInlineEditable.defaultProps = {
  variant: 'body1',
  color: 'neutral.f06',
};

RcInlineEditable.displayName = 'RcInlineEditable';

export { RcInlineEditable, RcInlineEditableProps };
