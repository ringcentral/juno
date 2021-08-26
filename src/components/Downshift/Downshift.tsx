import React, {
  ComponentProps,
  forwardRef,
  HTMLAttributes,
  memo,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  combineClasses,
  combineProps,
  CustomStyledComponentResult,
  omit,
  RcBaseProps,
  RcClassesProps,
  styled,
  useEventCallback,
  useForkRef,
  useThemeProps,
  withDeprecatedCheck,
} from '../../foundation';
import ArrowDown from '../../icon/ArrowDown';
import ArrowUp from '../../icon/ArrowUp';
import { RcIconButtonProps } from '../Buttons/IconButton';
import { RcChip } from '../Chip';
import { RcTextFieldProps } from '../Forms/TextField';
import { ClearIconButton } from '../Forms/TextField/styles/ClearIconButton';
import { RcPopperProps } from '../Popper';
import { WithTooltipProps } from '../Tooltip';
import { RcVisuallyHidden } from '../VisuallyHidden';
import {
  ArrowDownButton,
  DownshiftStyle,
  EndAdornment,
  PopperPosition,
  RcDownshiftInput,
  StyledPopper,
  StyledTextField,
} from './styles';
import { RcSuggestionList, RcSuggestionListProps } from './SuggestionList';
import {
  DEFAULT_GET_OPTION_LABEL,
  DEFAULT_KEY_TO_CHIPS,
  DEFAULT_LIMIT_CHIPS,
  RcDownshiftDefaultFilterOptions,
  RcDownshiftFilterOptions,
  RcDownshiftGroupedOption,
  RcDownshiftInputClasses,
  RcDownshiftSelectedItem,
  useDownshift,
  useDownshiftError,
} from './utils';

export interface RcDownshiftRenderOptionState {
  /** current input value */
  inputValue?: string;
  /** is that item selected */
  selected: boolean;
  /** that item index */
  index: number;
  /** if that item is group title, that have that `expanded` state */
  expanded?: boolean;
  /** if that item is group title, that will have that `expandIconProps` */
  expandIconProps?: Partial<RcIconButtonProps>;
}

export type RcDownshiftCloseReason =
  | 'toggleInput'
  | 'escape'
  | 'select-option'
  | 'blur';

type RcDownshiftProps<
  T = RcDownshiftSelectedItem,
  K = T & RcDownshiftSelectedItem
> = {
  /**
   * display mode,
   * when be `autocomplete`, that `multiple` will be `false`
   *
   * @default tags
   */
  variant?: 'tags' | 'autocomplete';
  /**
   * @requires
   * this is required, must have options, but because need with old code suggestionItems, so make that to be optional
   */
  options?: T[];
  /** selectedItems array list */
  value?: T[];
  /**
   * If `true`, will allow disabled items highlightable.
   */
  disabledItemsHighlightable?: boolean;
  /** emit tags change event */
  onChange?: (selectedItems: T[]) => void;
  /** is that can select multiple, default is `false` */
  multiple?: boolean;
  /** If `true`, the popup will ignore the blur event. You can inspect the popup markup with your browser tools. Consider this option when you need to customize the component. */
  debug?: boolean;
  /** This is the initial isOpen value when downshift is initialized. */
  initialIsOpen?: boolean;
  /**
   * If `true`, the popup won't close when a value is selected.
   */
  disableCloseOnSelect?: boolean;
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * @param {T} option
   * @returns {string}
   */
  getOptionLabel?: (option: T) => string;
  /**
   * A filter function that determines the options that are eligible.
   *
   * @param {T[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {T[]}
   */
  filterOptions?: RcDownshiftFilterOptions<T>;
  /** emit current input value */
  onInputChange?: (value: string) => any;
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {T} option The option to render.
   * @param {object} state The state of the component.
   * @returns {ReactNode}
   */
  renderOption?: (
    option: T & RcDownshiftSelectedItem,
    state: RcDownshiftRenderOptionState,
  ) => React.ReactNode;
  /**
   * group layout mode
   *
   * - `normal`: use group name as group title
   * - `expanded`: use first-item as group title, and that is `clickable`
   *
   * @default 'normal'
   */
  groupVariant?: 'normal' | 'expanded';
  /**
   * group expanded state, you can control expanded state by that,
   * use when `groupVariant` is `expanded`
   *
   * - `true`: expand all
   * - `false`: collapse all
   * - `{key: boolean}`: control group state
   */
  groupExpanded?: Record<string, boolean> | boolean;
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {T} option The options to group.
   * @returns {string} The group key
   */
  groupBy?: (option: T) => string;
  /**
   * Render the group title item, also with for toggle button props.
   *
   * > when you have set custom `renderOption`, the `renderGroup` must be set.
   *
   * @param {T} option The option to render.
   * @param {object} state The state of the component.
   * @returns {ReactNode}
   */
  renderGroup?: (
    option: T & RcDownshiftSelectedItem,
    state: RcDownshiftRenderOptionState,
  ) => React.ReactNode;
  /**
   * Trigger when group item expanded state change.
   *
   * @param {object} group The state of the group.
   * @param {object} groupStateMap The whole group state
   */
  onGroupExpanded?: (
    group: RcDownshiftGroupedOption<T>,
    groupStateMap: Record<string, boolean>,
  ) => any;
  /** SuggestionList VirtualizedList Props */
  SuggestionListProps?: RcSuggestionListProps<T>;
  /**
   * @param event keydown event
   * @param highlightedIndex current menu highlightedIndex
   */
  onKeyDown?: (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    highlightedIndex?: number | null,
  ) => void;
  /**
   * If `true`, the RcDownshift is free solo, meaning that the user input is not bound to provided options.
   */
  freeSolo?: boolean;
  /**
   * Render the selected value.
   *
   * @param {T[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @returns {ReactNode}
   */
  renderTags?: (
    selectedItems: K[],
    getTagProps: (
      selectedItem: K,
      index: number,
    ) => Omit<React.HTMLAttributes<HTMLElement>, 'children'> & {
      onDelete?: React.EventHandler<any>;
    },
  ) => React.ReactNode;
  /**
   * Render when search no have any options.
   *
   * @param {object} additionItems
   * render when not have any options,
   * if set that the freeSolo auto add items will not be cover
   */
  renderNoOptions?: (
    getNoOptionsProps: (
      additionProps?: HTMLAttributes<HTMLElement>,
    ) => HTMLAttributes<HTMLElement>,
    additionItem?: RcDownshiftSelectedItem,
  ) => React.ReactNode;
  /**
   * one of that character, also can be confirm a tag
   * @default
   * [',', ';', '↵']
   */
  keyToTags?: string[];
  /**
   * max number of tags,
   * @default 20
   */
  maxFreeSolo?: number;
  /** emit when bigger than maxFreeSolo number */
  onMaxFreeSolo?: (max?: number) => any;
  /**
   * If `true`, the selected option becomes the value of the input
   * when the input loses focus unless the user chooses
   * a different option or changes the character string in the input.
   */
  autoSelect?: boolean;
  /** props for apply on `RcPopper` */
  PopperProps?: RcBaseProps<
    RcPopperProps,
    'open' | 'keepMounted' | 'anchorEl' | 'style'
  >;
  /** is have ToggleButton */
  toggleButton?: boolean;
  /** Props for apply on ToggleButton */
  ToggleButtonProps?: RcBaseProps<
    RcIconButtonProps & WithTooltipProps,
    'symbol'
  >;
  /**
   * A ref for imperative actions.
   *
   * - `getActiveIndex`: get current active index
   * - `setActiveIndex`: set current active index;
   * - `getHighlightedIndex`: get current highlight index;
   * - `setHighlightedIndex`: set current highlight index;
   * - `openMenu`: open the listbox menu
   * - `closeMenu`: close the listbox menu
   * - `focus`: focus on text field input
   * - `reset(isFocus)`: reset whole downshift, `isFocus` default is `false`
   */
  action?: React.Ref<RcDownshiftRef>;
  /** auto close menu when options filter result is zero */
  autoClose?: boolean;
  /**
   * If `true`, the popup will open on input focus.
   * and that also set `disableCloseOnSelect` to `true`
   */
  openOnFocus?: boolean;
  /** get expand addition props  */
  getExpandIconProps?: (
    group: RcDownshiftGroupedOption,
  ) => Partial<RcIconButtonProps>;
  /**
   * If `true`, the first option is automatically highlighted.
   * @default true
   */
  autoHighlight?: boolean;
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {T} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled?: (option: T) => boolean;
  /**
   * Props applied to the Input element
   */
  InputProps?: RcClassesProps<'container'>;
  /**
   * Render the input, default is `RcTextField`
   */
  renderInput?: (params: Partial<RcTextFieldProps>) => React.ReactNode;
  /**
   * Control the popup` open state.
   */
  open?: boolean;
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen?: (event: React.ChangeEvent<{}>) => void;
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"select-option"`, `"blur"`.
   */
  onClose?: (
    event: React.ChangeEvent<{}>,
    reason: RcDownshiftCloseReason,
  ) => void;
} & RcBaseProps<
  Partial<RcTextFieldProps>,
  | 'children'
  | 'value'
  | 'onChange'
  | 'onKeyDown'
  | 'variant'
  | 'radius'
  | 'size'
  | 'defaultValue'
  | 'multiline'
  | 'rows'
  | 'rowsMax'
  | 'align'
  | 'textVariant'
  | 'autoSelect'
  | 'focusOnMount'
  | 'selectOnMount'
  | 'autoFocusDelay'
  | 'clearLabel'
  | 'clearAriaLabel'
> & {
    /**
     * @deprecated
     * if you don't want close popup when select, use `disableCloseOnSelect` with `true` to replace that
     */
    defaultIsOpen?: boolean;
    /** @deprecated should use `onChange` */
    onSelectChange?: (selectedItems: T[]) => void;
    /** @deprecated  should use `options` to replace */
    suggestionItems?: T[];
    /** @deprecated  not need any more */
    selectedItems?: T[];
    /** @deprecated use `getOptionLabel` to replace that */
    itemToString?: (item: T) => string;
    /** @deprecated should use `renderOption` to replace that */
    MenuItem?: React.ComponentType<any>;
    /** @deprecated suggestion list row min height for virtual list, please replace with `estimatedItemSize` */
    minRowHeight?: number;
    /** @deprecated enable free chip mode, should use `freeSolo` to replace that */
    enableFreeChips?: boolean;
    /** @deprecated please use `label` to replace that */
    inputLabel?: RcTextFieldProps['label'];
    /** current text field input value */
    inputValue?: string;
    /** @deprecated input element placeholder attribute */
    inputPlaceholder?: RcTextFieldProps['placeholder'];
    /** @deprecated input element maxlength, please use `TextFieldProps.inputProps.maxLength` */
    maxLength?: number;
    /** @deprecated should use `screenReaderProps` */
    screenReader?: {
      entry: string;
      entries: string;
    };
    /** @deprecated wrapper automationId, should use `data-test-automation-id` directly */
    automationId?: string;
    /** @deprecated just use the `renderTags` to render whole tags  */
    InputItem?: React.ComponentType<any>;
    /**
     * @deprecated
     * just use the `helperText` to control helper text
     */
    allowPlainHelperText?: boolean;
    /** @deprecated please calculate error outside by your self with `renderTags`, or prepare ready items with error field */
    emailError?: string;
    /** @deprecated please calculate error outside by your self with `renderTags`, or prepare ready items with error field */
    errorSelectedItems?: (string | number | undefined)[];
    /** @deprecated replace to `error` */
    nameError?: boolean;
    /**
     * @deprecated
     * ! no have any function
     */
    autoSwitchEmail?: boolean;
    /** @deprecated rename to `keyToTags` */
    keyToChips?: string[];
    /** @deprecated should use `max` */
    limitOfFreeChips?: number;
    /** @deprecated should use `autoSelect` */
    enableAutoTransform?: boolean;
    /** @deprecated should use `inputRef` */
    messageRef?: RcTextFieldProps['inputRef'];
    /** @deprecated TextField props */
    TextFieldProps?: Pick<RcTextFieldProps, 'required' | 'inputProps'>;
  };

type RcDownshiftRef = {
  /** get current active index */
  getActiveIndex: () => number;
  /** set current active index */
  setActiveIndex: (index: number) => void;
  /** get current highlight index */
  getHighlightedIndex: () => number;
  /** set current highlight index */
  setHighlightedIndex: (index: number) => void;
  /**
   * keep highlightedIndex for next render when options change,
   * can use when lazy load more options
   */
  keepHighlightedIndex: () => void;
  /** open the listbox menu */
  openMenu: () => void;
  /** close the listbox menu */
  closeMenu: () => void;
  /** focus on text field input */
  focus: () => void;
  /** reset whole downshift, isFocus default is `false` */
  reset: (isFocus?: boolean) => void;
  /** method to clean input value */
  clearInput: () => void;
};

const _RcDownshift = memo(
  forwardRef<any, RcDownshiftProps<RcDownshiftSelectedItem>>((inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcDownshift' });

    const {
      itemToString = DEFAULT_GET_OPTION_LABEL,
      keyToChips = DEFAULT_KEY_TO_CHIPS,
      limitOfFreeChips = DEFAULT_LIMIT_CHIPS,
      minRowHeight,
      suggestionItems,
      messageRef,
      MenuItem,
      inputLabel,
      nameError,
      maxLength,
      InputItem,
      emailError,
      autoSwitchEmail,
      enableFreeChips,
      inputPlaceholder,
      errorSelectedItems,
      enableAutoTransform,
      allowPlainHelperText,
      TextFieldProps,
      selectedItems: selectedItemsProp,
      automationId,
      screenReader,
      onSelectChange,
      variant,
      groupExpanded,
      groupVariant = 'normal',
      getExpandIconProps,
      groupBy,
      value: valueProp = selectedItemsProp,
      autoHighlight = true,
      fullWidth = true,
      clearBtn = false,
      toggleButton = false,
      multiple = false,
      clearButtonProps,
      onClear,
      ToggleButtonProps,
      inputValue: inputValueProp,
      onKeyDown: onKeyDownProp,
      helperText: helperTextProp,
      options,
      openOnFocus,
      getOptionLabel = itemToString,
      renderInput,
      label = inputLabel,
      inputRef: inputRefProp = messageRef,
      error = nameError,
      placeholder = inputPlaceholder,
      freeSolo = enableFreeChips,
      keyToTags = keyToChips,
      maxFreeSolo = limitOfFreeChips,
      SuggestionListProps,
      autoSelect = enableAutoTransform,
      PopperProps,
      initialIsOpen,
      disabled,
      required: requiredProp,
      defaultIsOpen = openOnFocus,
      disableCloseOnSelect = defaultIsOpen,
      onChange: onChangeProp = onSelectChange,
      onInputChange: onInputChangeProp,
      onMaxFreeSolo,
      FormHelperTextProps: FormHelperTextPropsProp,
      action,
      filterOptions,
      renderOption,
      renderTags,
      getOptionDisabled,
      renderGroup,
      onGroupExpanded,
      renderNoOptions,
      InputProps: InputPropsProp,
      debug,
      disabledItemsHighlightable,
      open: openProp,
      onOpen,
      onClose,
      ...rest
    } = props;

    const [position, setPosition] = useState<PopperPosition>('bottom');

    const innerInputRef = useRef<HTMLInputElement>(null);
    const textFieldRef = useRef<HTMLDivElement>(null);
    const inputRef = useForkRef(inputRefProp!, innerInputRef);
    const inputContainerRef = useRef<HTMLDivElement>(null);

    // * if that have pass old suggestionItems mean that use old logic
    const isNew = !suggestionItems;

    let oneOfTagError = false;

    useDownshiftError({ isNew, MenuItem, InputItem });

    const required = requiredProp || TextFieldProps?.required;

    const {
      focusInput,
      optionItems,
      optionsGroupList,
      selectedItems,
      highlightedIndex,
      getToggleButtonProps,
      getTagProps,
      getTagListBoxProps,
      getMenuProps,
      getPopperProps,
      getInputProps,
      getInputAriaProps,
      getLabelProps,
      getItemProps,
      isOpen,
      inputValue,
      isTagsFocus,
      activeIndex,
      setActiveIndex,
      setHighlightedIndex,
      onInputChange,
      keepHighlightedIndex,
      changeHighlightedIndexReason,
      closeMenu,
      openMenu,
      reset,
      getClearButtonProps,
      noOptionItem,
      getNoOptionsProps,
      isKeepHighlightedIndex,
    } = useDownshift({
      open: openProp,
      variant,
      onOpen,
      onClose,
      wrapperRef: textFieldRef,
      inputContainerRef,
      inputRef: innerInputRef,
      value: valueProp,
      inputValue: inputValueProp,
      getOptionDisabled,
      groupExpanded: groupVariant === 'normal' ? true : groupExpanded,
      getExpandIconProps,
      options: suggestionItems || options,
      freeSolo,
      label,
      multiple,
      keyToTags,
      maxFreeSolo,
      autoSelect,
      disableCloseOnSelect,
      initialIsOpen,
      disabled,
      required,
      openOnFocus,
      autoHighlight,
      groupBy,
      groupVariant,
      onChange: onChangeProp,
      onInputChange: onInputChangeProp,
      getOptionLabel,
      filterOptions,
      onMaxFreeSolo,
      renderNoOptions,
      onKeyDown: onKeyDownProp,
      disabledItemsHighlightable,
      onGroupExpanded,
    });

    const open = Boolean((isOpen || noOptionItem) && textFieldRef.current);

    const { onBlur, ...InputProps } = getInputProps();

    const helperText = isNew
      ? helperTextProp
      : nameError || allowPlainHelperText
      ? helperTextProp
      : undefined;

    const describedbyId = `${InputProps.id}-helper-text`;
    const FormHelperTextProps = FormHelperTextPropsProp || {};

    const screenReaderText = useMemo(() => {
      if (!screenReader || !selectedItems.length) return;
      const { entry, entries } = screenReader;
      return `${selectedItems.length === 1 ? entry : entries}`.trim();
    }, [screenReader, selectedItems.length]);

    if (screenReaderText) {
      if (!helperText) {
        InputProps['aria-describedby'] = describedbyId;
      } else if (helperText) {
        FormHelperTextProps[
          'aria-label'
        ] = `${screenReaderText} ${helperText}`.trim();
      }
    }

    const toTextFieldRef = useForkRef(textFieldRef, ref);

    const startAdornment = (() => {
      if (variant === 'autocomplete') {
        return undefined;
      }
      const getCustomizedTagProps = (
        selectedItem: RcDownshiftSelectedItem,
        index: number,
      ) => {
        const tagProps = getTagProps({
          selectedItem,
          index,
          label: getOptionLabel(selectedItem),
          disabled,
        });

        if (selectedItem.error) {
          oneOfTagError = true;
        }

        return tagProps;
      };

      return renderTags
        ? renderTags(selectedItems, getCustomizedTagProps)
        : selectedItems.map((selectedItem, index) => {
            const itemChipProps = getCustomizedTagProps(selectedItem, index);
            // TODO: here should be remove
            if (InputItem) {
              // TODO: should remove when all migrate
              const isError =
                (emailError && emailError === selectedItem.label?.trim()) ||
                (selectedItem.id &&
                  errorSelectedItems?.includes(selectedItem.id)) ||
                selectedItem.isError ||
                selectedItem.error;

              return (
                <InputItem
                  {...selectedItem}
                  {...itemChipProps}
                  isError={isError}
                />
              );
            }
            return (
              <RcChip
                {...itemChipProps}
                deleteIconProps={{
                  'aria-label': 'remove',
                }}
              />
            );
          });
    })();

    const endAdornment = (toggleButton || clearBtn) && (
      <EndAdornment>
        {clearBtn && (
          <ClearIconButton {...getClearButtonProps(clearButtonProps as any)} />
        )}
        {toggleButton && (
          <ArrowDownButton
            variant="plain"
            aria-hidden
            color={error ? 'danger.f02' : 'neutral.f04'}
            size="large"
            symbol={isOpen ? ArrowUp : ArrowDown}
            {...getToggleButtonProps(ToggleButtonProps)}
          />
        )}
      </EndAdornment>
    );

    const { containerClassName, TextFieldInputProps } = (() => {
      const { classes, ...restInputPropsProp } = InputPropsProp || {};

      const toClasses = combineClasses(classes, RcDownshiftInputClasses);

      return {
        containerClassName: toClasses.container,
        TextFieldInputProps: combineProps(
          {
            classes: omit(toClasses, ['container']),
            endAdornment,
            inputComponent: RcDownshiftInput,
            ...(getTagListBoxProps() as any),
            ...InputProps,
            onBlur: debug ? undefined : onBlur,
          },
          restInputPropsProp,
        ),
      };
    })();

    useImperativeHandle(action, () => ({
      getActiveIndex: () => activeIndex,
      setActiveIndex,
      getHighlightedIndex: () => highlightedIndex,
      setHighlightedIndex: (index) =>
        setHighlightedIndex(index, { reason: 'auto', reRender: true }),
      closeMenu,
      openMenu,
      reset,
      clearInput: () => onInputChange('', false),
      keepHighlightedIndex: () => keepHighlightedIndex(),
      focus: focusInput,
    }));

    const hasTags = selectedItems.length > 0;
    const isRenderNoOptions = !!noOptionItem;

    const popperRef: ComponentProps<typeof StyledPopper>['popperRef'] = useRef(
      null,
    );

    const handleUpdatePopper = useEventCallback(() => {
      popperRef.current?.update();
    });

    return (
      <>
        <StyledTextField
          renderInput={renderInput}
          hasTags={hasTags}
          ref={toTextFieldRef}
          inputRef={inputRef}
          data-test-automation-id={automationId}
          fullWidth={fullWidth}
          placeholder={!hasTags ? placeholder : undefined}
          label={label}
          focused={isTagsFocus ? true : undefined}
          disabled={disabled}
          required={required}
          // * if below one of tag is error, that main downshift default will be error
          error={error ?? oneOfTagError}
          FormHelperTextProps={FormHelperTextProps}
          InputProps={TextFieldInputProps}
          helperText={helperText}
          {...combineProps(
            {
              InputLabelProps: getLabelProps(),
              inputProps: {
                startAdornment,
                containerClassName,
                maxLength,
                containerRef: inputContainerRef,
                ...getInputAriaProps(TextFieldProps?.inputProps),
              },
            },
            rest,
          )}
          value={inputValue}
          clearBtn={false}
        />
        {!helperText && screenReaderText && (
          <RcVisuallyHidden id={describedbyId}>
            {screenReaderText}
          </RcVisuallyHidden>
        )}
        <StyledPopper
          open={open}
          position={position}
          anchorEl={textFieldRef.current}
          data-test-automation-id="suggestions-list"
          popperRef={popperRef}
          // * view type in popper.js
          popperOptions={{
            onUpdate: (e: any) => {
              const currPosition = e.placement;
              if (position !== currPosition) {
                setPosition(currPosition);
              }
            },
          }}
          {...getPopperProps(PopperProps)}
        >
          {isOpen && (
            <RcSuggestionList
              highlightedIndex={highlightedIndex}
              optionsGroupList={optionsGroupList}
              options={optionItems}
              groupVariant={groupVariant}
              groupExpanded={groupExpanded}
              renderGroup={renderGroup}
              MenuItem={MenuItem}
              renderOption={renderOption}
              inputValue={inputValue}
              getItemProps={getItemProps}
              getMenuProps={getMenuProps}
              changeHighlightedIndexReason={changeHighlightedIndexReason}
              getOptionDisabled={getOptionDisabled}
              isKeepHighlightedIndex={isKeepHighlightedIndex}
              onUpdatePopper={handleUpdatePopper}
              maxContainerHeight={180}
              getOptionLabel={getOptionLabel}
              {...(SuggestionListProps as any)}
            />
          )}
          {isRenderNoOptions &&
            renderNoOptions?.(getNoOptionsProps, noOptionItem)}
        </StyledPopper>
      </>
    );
  }),
);

const RcDownshift = styled(
  withDeprecatedCheck(
    _RcDownshift,
    [
      {
        prop: 'onSelectChange',
        time: '2021-10',
        comment: `@deprecated should use \`onChange\` */`,
      },
      {
        prop: 'suggestionItems',
        time: '2021-10',
        comment: `@deprecated  should use \`options\` to replace */`,
      },
      {
        prop: 'selectedItems',
        time: '2021-10',
        comment: `@deprecated  not need any more */`,
      },
      {
        prop: 'itemToString',
        time: '2021-10',
        comment: `@deprecated use \`getOptionLabel\` to replace that */`,
      },
      {
        prop: 'MenuItem',
        time: '2021-10',
        comment: `@deprecated should use \`renderOption\` to replace that */`,
      },
      {
        prop: 'minRowHeight',
        time: '2021-10',
        comment: `@deprecated suggestion list row min height for virtual list */`,
      },
      {
        prop: 'enableFreeChips',
        time: '2021-10',
        comment: `@deprecated enable free chip mode, should use \`freeSolo\` to replace that */`,
      },
      {
        prop: 'inputLabel',
        time: '2021-10',
        comment: `@deprecated please use \`label\` to replace that */`,
      },
      {
        prop: 'inputPlaceholder',
        time: '2021-10',
        comment: `@deprecated input element placeholder attribute */`,
      },
      {
        prop: 'maxLength',
        time: '2021-10',
        comment: `@deprecated input element maxlength, please use \`TextFieldProps.inputProps.maxLength\` */`,
      },
      {
        prop: 'screenReader',
        time: '2021-10',
        comment: `@deprecated should use \`screenReaderProps\` */`,
      },
      {
        prop: 'automationId',
        time: '2021-10',
        comment: `@deprecated wrapper automationId, should use \`data-test-automation-id\` directly */`,
      },
      {
        prop: 'InputItem',
        time: '2021-10',
        comment: `@deprecated just use the \`renderTags\` to render whole tags  */`,
      },
      {
        prop: 'emailError',
        time: '2021-10',
        comment: `@deprecated please calculate error outside by your self with \`renderTags\`, or prepare ready items with error field */`,
      },
      {
        prop: 'errorSelectedItems',
        time: '2021-10',
        comment: `@deprecated please calculate error outside by your self with \`renderTags\`, or prepare ready items with error field */`,
      },
      {
        prop: 'nameError',
        time: '2021-10',
        comment: `@deprecated replace to \`error\` */`,
      },
      {
        prop: 'keyToChips',
        time: '2021-10',
        comment: `@deprecated rename to \`keyToTags\` */`,
      },
      {
        prop: 'limitOfFreeChips',
        time: '2021-10',
        comment: `@deprecated should use \`max\` */`,
      },
      {
        prop: 'enableAutoTransform',
        time: '2021-10',
        comment: `@deprecated should use \`autoSelect\` */`,
      },
      {
        prop: 'messageRef',
        time: '2021-10',
        comment: `@deprecated should use \`inputRef\` */`,
      },
      {
        prop: 'TextFieldProps',
        time: '2021-10',
        comment: `@deprecated TextField props */`,
      },
    ],
    'RcDownshift',
  ),
)`
  ${DownshiftStyle}
`;

RcDownshift.defaultProps = {};

RcDownshift.displayName = 'RcDownshift';

const ExportType: <T extends RcDownshiftSelectedItem>(
  props: RcDownshiftProps<T>,
) => JSX.Element &
  CustomStyledComponentResult<RcDownshiftProps<T>> = RcDownshift as any;

export {
  ExportType as RcDownshift,
  RcDownshiftProps,
  RcDownshiftRef,
  RcDownshiftDefaultFilterOptions,
};
