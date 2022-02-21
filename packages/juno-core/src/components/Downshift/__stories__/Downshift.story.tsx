import React, {
  ComponentProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  combineProps,
  DEFAULT_KEY_TO_CHIPS,
  RcAutocompleteDefaultFilterOptions,
  RcAvatar,
  RcBox,
  RcButton,
  RcChip,
  RcClasses,
  RcDownshift,
  RcDownshiftDefaultFilterOptions,
  RcDownshiftFilterOptions,
  RcDownshiftProps,
  RcDownshiftRef,
  RcDownshiftSelectedItem,
  RcIconButton,
  RcListItemText,
  RcMenuItem,
  RcText,
  RcTextField,
  RcTypography,
  spacing,
  styled,
  useEventCallback,
} from '@ringcentral/juno';
import { ArrowDown2 } from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  paletteChoice,
  sortInDocTable,
  switchToControlKnobs,
  Title,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import { DialogExampleComponent } from '../../Dialog/__stories__/Dialog.story';
import { DownshiftDoc } from './Downshift.doc';
import { options } from './options';

export default {
  title: '🚀 Cleanup Components/Downshift',
  component: DownshiftDoc,
  argTypes: {
    color: {
      options: paletteChoice,
      control: {
        type: 'select',
      },
    },
    ...sortInDocTable<keyof DownshiftProps>([
      'options',
      'value',
      'onChange',
      'onInputChange',
      'multiple',
      'freeSolo',
      'autoSelect',
      'getOptionLabel',
      'renderOption',
      'renderTags',
      'inputValue',
      'label',
      'placeholder',
      'action',
      'toggleButton',
      'keyToTags',
      'maxFreeSolo',
      'onMaxFreeSolo',
      'onKeyDown',
      'disabled',
      'error',
      'defaultIsOpen',
      'initialIsOpen',
      'ToggleButtonProps',
      'PopperProps',
    ]),
    ...notControlInDocTable<keyof DownshiftProps>([]),
    ...notShowInDocTable<keyof DownshiftProps>([
      'style',
      'onSelectChange',
      'itemToString',
      'keyToChips',
      'limitOfFreeChips',
      'suggestionItems',
      'messageRef',
      'MenuItem',
      'inputLabel',
      'nameError',
      'maxLength',
      'InputItem',
      'emailError',
      'autoSwitchEmail',
      'enableFreeChips',
      'inputPlaceholder',
      'errorSelectedItems',
      'enableAutoTransform',
      'allowPlainHelperText',
      'TextFieldProps',
      'selectedItems',
      'automationId',
      'minRowHeight',
    ]),
  },
  args: {
    keyToTags: DEFAULT_KEY_TO_CHIPS,
  },
} as Meta;

type DownshiftProps = Partial<ComponentProps<typeof RcDownshift>>;

export const Downshift: Story<DownshiftProps> = ({ ...args }) => {
  switchToControlKnobs();

  const ref = useRef(null);
  const inputRef = useRef(null);

  const [value, setValue] = useState<RcDownshiftSelectedItem[]>([]);

  useEffect(() => {
    console.log(ref, inputRef);
  }, []);

  return (
    <RcDownshift
      {...args}
      ref={ref}
      options={options}
      value={value}
      onChange={(selectedItems) => {
        setValue(selectedItems);
        console.log('onChange', selectedItems);
      }}
      onInputChange={(e) => {
        console.log('textChange', e);
      }}
      onMaxFreeSolo={(max) => {
        alert(`you get the max free sole count ${max}`);
      }}
      filterOptions={RcDownshiftDefaultFilterOptions}
      renderTags={(selectedItems, getTagProps) => {
        return selectedItems.map((selectedItem, index) => {
          const tagProps = getTagProps(selectedItem, index);

          return (
            <RcChip
              {...tagProps}
              deleteIconProps={{
                title: 'remove',
              }}
            />
          );
        });
      }}
    />
  );
};

Downshift.args = {
  label: 'Downshift',
  placeholder: 'Search and select',
  freeSolo: true,
  toggleButton: true,
  autoSelect: true,
  gutterBottom: true,
  multiple: true,
  clearBtn: true,
};

Downshift.argTypes = {
  ...notControlInDocTable<keyof DownshiftProps>([]),
};

Downshift.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://app.abstract.com/projects/d893ad32-0d8d-4e65-a37a-b4a5c881c51b/branches/master/commits/3952c27d13b050f313cfd227467437458b36cf8b/files/8ffaf9bc-6939-4ef9-9bd1-6aa5b460e2ae/layers/63AFC39B-35B2-432F-B4DC-A8337BD3FFD2',
    },
    {
      name: 'Source',
      value: 'virtuoso',
      href: 'https://virtuoso.dev/',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

export const DownshiftDebug: Story<DownshiftProps> = ({ ...args }) => {
  return <Downshift {...args} />;
};

DownshiftDebug.args = { ...Downshift.args, debug: true };

export const DownshiftFixedItemHeight: Story<DownshiftProps> = ({
  ...args
}) => {
  return <Downshift {...args} />;
};
DownshiftFixedItemHeight.args = {
  ...Downshift.args,
  SuggestionListProps: { fixedItemHeight: 32 },
};

const DownshiftExample = ({ actionRef, additionValue = [], ...rest }: any) => {
  const inputRef = useRef(null);

  const [value, setValue] = useState<RcDownshiftSelectedItem[]>([
    options[0],
    options[1],
    ...additionValue,
  ]);

  useEffect(() => {
    console.log(inputRef, actionRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RcDownshift
      gutterBottom
      action={actionRef}
      label="Country"
      toggleButton
      multiple
      clearBtn
      helperText="please select country"
      placeholder="What country have you been to?"
      onInputChange={(e) => console.log('textChange')}
      value={value}
      onChange={(selectedItems) => {
        setValue(selectedItems);
        console.log('onChange', selectedItems);
      }}
      onFocus={(e) => console.log('focus')}
      onKeyDown={(e, highlightedIndex) =>
        console.log('onKeyDown', highlightedIndex)
      }
      inputRef={inputRef}
      onMaxFreeSolo={(max) => {
        alert(`you get the max free sole count ${max}`);
      }}
      options={options}
      filterOptions={RcDownshiftDefaultFilterOptions}
      {...rest}
      renderOption={(
        { label, id, error, unSelectable, isSuggestion, isError, ...restProps },
        state,
      ) => (
        <RcMenuItem
          id={`${id}`}
          {...{ ...restProps, component: 'div' }}
          selected={state.selected}
          key={`${id || label}-${state.index}`}
        >
          {label}
        </RcMenuItem>
      )}
    />
  );
};

export const DownshiftExamples: Story<DownshiftProps> = () => {
  const actionRef = useRef<RcDownshiftRef>(null);

  return (
    <>
      <DownshiftExample
        actionRef={actionRef}
        additionValue={[
          {
            id: 'free',
            label:
              'If true, the selected option becomes the value of the input when the Autocomplete loses focus unless the user chooses a different option or changes the character string in the input. Callback fired when the popup requests to be closed. Use in controlled mode (see open).',
            freeSolo: true,
          },
        ]}
      />
      <DownshiftExample disabled />
      <DownshiftExample error />
      <DownshiftExample color="success.f11" />
      <DialogExampleComponent>
        <DownshiftExample />
      </DialogExampleComponent>
      {'  '}
      <RcButton
        onClick={() => {
          if (actionRef.current) {
            actionRef.current.focus();
            actionRef.current.openMenu();
          }
        }}
      >
        Focus Downshift And Open Outside
      </RcButton>
      {'  '}
      <RcButton
        onClick={() => {
          actionRef.current?.reset();
        }}
      >
        Reset Downshift
      </RcButton>
    </>
  );
};

const showNumber = 20;
const toLoadCount = 10;

const lazyLoadOptions = options.slice(0, showNumber);

export const DownshiftLazyLoadExamples: Story<DownshiftProps> = () => {
  const setMapRef = useRef<any>({});
  const actionRef = useRef<RcDownshiftRef>(null);
  const [currOptions, setOptions] = useState(lazyLoadOptions);

  const [value, setValue] = useState<RcDownshiftSelectedItem[]>([]);

  return (
    <RcDownshift
      gutterBottom
      options={currOptions}
      label="Country"
      value={value}
      action={actionRef}
      onChange={(selectedItems) => {
        setValue(selectedItems);
      }}
      toggleButton
      multiple
      clearBtn
      helperText="please select country"
      placeholder="What country have you been to?"
      filterOptions={RcDownshiftDefaultFilterOptions}
      SuggestionListProps={{
        rangeChanged: (e) => {
          const endIndex = e.endIndex;

          const currentStep = Math.floor(endIndex / (showNumber - 5));

          if (
            currentStep > 0 &&
            (endIndex % (showNumber - 5)) % toLoadCount > 0
          ) {
            const currLatest =
              currentStep * showNumber + (showNumber - toLoadCount);

            if (!setMapRef.current[currLatest]) {
              setMapRef.current[currLatest] = true;

              const result = [
                ...currOptions,
                ...options.slice(currLatest, currLatest + showNumber),
              ];
              // console.log('load', result);

              actionRef.current?.keepHighlightedIndex();
              setOptions(result);
            }
          }
        },
      }}
    />
  );
};

export const DownshiftGroupBy: Story<DownshiftProps> = () => {
  const [value, setValue] = useState<RcDownshiftSelectedItem[]>([]);

  const [groupExpanded, setGroupExpanded] = useState<Record<string, boolean>>(
    {},
  );

  const getExpandIconProps = useCallback<
    NonNullable<DownshiftProps['getExpandIconProps']>
  >(({ group, expanded }) => {
    const showMessage = expanded ? 'less' : 'more';

    return {
      'aria-label': `${group} group, use Shift F10 to show ${showMessage} emails`,
      title: showMessage,
    };
  }, []);

  const handleChange = useEventCallback(
    (selectedItems: RcDownshiftSelectedItem[]) => {
      setValue(selectedItems);
    },
  );

  const groupBy = useCallback(
    (option: RcDownshiftSelectedItem) => option.label?.[0] || '',
    [],
  );

  const filterOptions: RcDownshiftFilterOptions<RcDownshiftSelectedItem> = (
    options,
    { inputValue, getOptionLabel, selectedItems },
  ): RcDownshiftSelectedItem[] => {
    return options.filter(
      (item) =>
        !selectedItems.some((selectedItem) => item.id === selectedItem.id) &&
        getOptionLabel?.(item)
          .toLowerCase()
          .startsWith(inputValue?.toLowerCase() || ''),
    );
  };
  return (
    /**
     * When have some country or address label or others chrome support autofill
     * that will support auto fill address in input
     * if you not need should use autoComplete="chrome-off"
     * more detail https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill
     */
    <>
      <Title>Normal Group</Title>
      <RcDownshift
        gutterBottom
        options={options}
        label="Country"
        value={value}
        onChange={handleChange}
        groupExpanded={groupExpanded}
        getExpandIconProps={getExpandIconProps}
        onGroupExpanded={(group, groupStateMap) => {
          console.log(group, groupStateMap);
          setGroupExpanded(groupStateMap);
        }}
        InputProps={{
          autoComplete: 'chrome-off',
        }}
        toggleButton
        groupBy={groupBy}
        multiple
        clearBtn
        helperText="please select country"
        placeholder="What country have you been to?"
        filterOptions={filterOptions}
      />
      <Title>Expanded Group</Title>
      <RcDownshift
        gutterBottom
        options={options}
        label="Address"
        value={value}
        onChange={handleChange}
        groupVariant="expanded"
        groupExpanded={groupExpanded}
        getExpandIconProps={getExpandIconProps}
        onGroupExpanded={(group, groupStateMap) => {
          console.log(group, groupStateMap);
          setGroupExpanded(groupStateMap);
        }}
        InputProps={{
          autoComplete: 'chrome-off',
        }}
        toggleButton
        groupBy={groupBy}
        multiple
        clearBtn
        helperText="please select country"
        placeholder="What country have you been to?"
        filterOptions={filterOptions}
      />
      <Title>Normal Group (Custom render)</Title>
      <RcDownshift
        gutterBottom
        options={options}
        label="Country"
        value={value}
        onChange={handleChange}
        getExpandIconProps={getExpandIconProps}
        toggleButton
        groupBy={groupBy}
        InputProps={{
          autoComplete: 'chrome-off',
        }}
        renderGroup={(
          {
            label,
            id,
            error,
            unSelectable,
            isSuggestion,
            isError,
            group,
            ...restProps
          },
          { selected, expanded, expandIconProps },
        ) => {
          return (
            <RcBox margin="1em" id={`${id}`} {...restProps}>
              <RcTypography color="neutral.b04" variant="title2">
                {label}
              </RcTypography>
            </RcBox>
          );
        }}
        multiple
        clearBtn
        helperText="please select country"
        placeholder="What country have you been to?"
        filterOptions={filterOptions}
      />
      <Title>Expanded Group (Custom render)</Title>
      <RcDownshift
        gutterBottom
        options={options}
        label="Country"
        value={value}
        onChange={handleChange}
        groupVariant="expanded"
        getExpandIconProps={getExpandIconProps}
        toggleButton
        groupBy={groupBy}
        InputProps={{
          autoComplete: 'chrome-off',
        }}
        renderGroup={(
          {
            label,
            id,
            error,
            unSelectable,
            isSuggestion,
            isError,
            group,
            ...restProps
          },
          { selected, expanded, expandIconProps },
        ) => {
          return (
            <RcMenuItem
              component="div"
              id={`${id}`}
              selected={selected}
              {...restProps}
            >
              <RcListItemText
                primary={label}
                secondary={`(${expanded ? 'open' : 'close'})`}
              />

              <RcBox flex="1 1 auto" />
              {expandIconProps && (
                <RcIconButton
                  color="content.brand"
                  {...expandIconProps}
                  symbol={ArrowDown2}
                />
              )}
            </RcMenuItem>
          );
        }}
        multiple
        clearBtn
        helperText="please select country"
        placeholder="What country have you been to?"
        filterOptions={filterOptions}
      />
    </>
  );
};

export const DownshiftDisabled: Story<DownshiftProps> = ({ ...args }) => {
  switchToControlKnobs();

  const ref = useRef(null);
  const inputRef = useRef(null);
  const actionRef = useRef<RcDownshiftRef>(null);

  const [value, setValue] = useState<RcDownshiftSelectedItem[]>([]);

  useEffect(() => {
    console.log(ref, inputRef, actionRef);
  }, []);
  // console.log(options);

  return (
    <>
      <RcDownshift
        {...args}
        ref={ref}
        action={actionRef}
        options={options.slice(0, 10)}
        openOnFocus
        value={value}
        getOptionDisabled={(option) => option.label?.includes('e') || false}
        onChange={(selectedItems) => {
          setValue(selectedItems);
          console.log('onChange', selectedItems);
        }}
        onInputChange={(e) => {
          console.log('textChange', e);
        }}
        onMaxFreeSolo={(max) => {
          alert(`you get the max free sole count ${max}`);
        }}
        filterOptions={RcDownshiftDefaultFilterOptions}
        renderTags={(selectedItems, getTagProps) => {
          return selectedItems.map((selectedItem, index) => {
            const tagProps = getTagProps(selectedItem, index);

            return (
              <RcChip
                {...tagProps}
                deleteIconProps={{
                  title: 'remove',
                }}
              />
            );
          });
        }}
      />
      <Title>
        no skip disabled option highlight
        <br />
        <RcText component="span" variant="subheading2" color="neutral.f04">
          (if you also like can be focus with mouse, use renderOption to custom
          your render)
        </RcText>
      </Title>
      <RcDownshift
        {...args}
        ref={ref}
        action={actionRef}
        options={options.slice(0, 10)}
        openOnFocus
        disabledItemsHighlightable
        value={value}
        getOptionDisabled={(option) => option.label?.includes('e') || false}
        onChange={(selectedItems) => {
          setValue(selectedItems);
          console.log('onChange', selectedItems);
        }}
        onInputChange={(e) => {
          console.log('textChange', e);
        }}
        onMaxFreeSolo={(max) => {
          alert(`you get the max free sole count ${max}`);
        }}
        filterOptions={RcDownshiftDefaultFilterOptions}
        renderTags={(selectedItems, getTagProps) => {
          return selectedItems.map((selectedItem, index) => {
            const tagProps = getTagProps(selectedItem, index);

            return (
              <RcChip
                {...tagProps}
                deleteIconProps={{
                  title: 'remove',
                }}
              />
            );
          });
        }}
      />
      <RcButton onClick={() => actionRef.current?.clearInput()}>
        Clear input value
      </RcButton>
    </>
  );
};

DownshiftDisabled.args = {
  label: 'Downshift',
  placeholder: 'Search and select',
  freeSolo: true,
  toggleButton: true,
  autoSelect: true,
  gutterBottom: true,
  multiple: true,
};

export const DownshiftWithDynamic: Story<DownshiftProps> = ({ ...args }) => {
  switchToControlKnobs();

  const [value, setValue] = useState<RcDownshiftSelectedItem[]>([]);

  return (
    <RcDownshift
      {...args}
      options={options}
      value={value}
      onChange={(selectedItems) => {
        setValue(selectedItems);
        console.log('onChange', selectedItems);
      }}
      filterOptions={RcDownshiftDefaultFilterOptions}
      renderOption={(
        { label, id, error, unSelectable, isSuggestion, isError, ...restProps },
        state,
      ) => (
        <RcMenuItem
          id={`${id}`}
          {...{ ...restProps, component: 'div' }}
          selected={state.selected}
          key={`${id || label}-${state.index}`}
        >
          {state.index % 2 === 0 ? (
            <RcBox bgcolor="neutral.b04">
              <br />
              <br />
              {label}
              <br />
              <br />
            </RcBox>
          ) : (
            label
          )}
        </RcMenuItem>
      )}
    />
  );
};

DownshiftWithDynamic.args = {
  label: 'Downshift',
  placeholder: 'Search and select',
  multiple: true,
  clearBtn: true,
  toggleButton: true,
};

export const DownshiftWithAvatar: Story<DownshiftProps> = ({ ...args }) => {
  switchToControlKnobs();

  const [value, setValue] = useState<RcDownshiftSelectedItem[]>([]);

  return (
    <>
      <RcDownshift
        {...args}
        options={options}
        value={value}
        onChange={(selectedItems) => {
          setValue(selectedItems);
          console.log('onChange', selectedItems);
        }}
        filterOptions={RcDownshiftDefaultFilterOptions}
        getOptionLabel={(option) => `${option.label} (Custom String)`}
        gutterBottom
      />
      <RcDownshift
        {...args}
        options={options}
        value={value}
        onChange={(selectedItems) => {
          setValue(selectedItems);
          console.log('onChange', selectedItems);
        }}
        filterOptions={RcDownshiftDefaultFilterOptions}
        renderOption={(
          {
            label,
            id,
            error,
            unSelectable,
            isSuggestion,
            isError,
            ...restProps
          },
          state,
        ) => (
          <RcMenuItem
            id={`${id}`}
            {...{ ...restProps, component: 'div' }}
            selected={state.selected}
            key={`${id || label}-${state.index}`}
          >
            <RcAvatar src={`https://placeimg.com/100/100/${state.index}`} />
            <RcBox marginLeft="2rem">{label}</RcBox>
          </RcMenuItem>
        )}
      />
    </>
  );
};

DownshiftWithAvatar.args = {
  label: 'Downshift',
  placeholder: 'Search and select',
  multiple: true,
  clearBtn: true,
  toggleButton: true,
};

const CustomDownshiftInputClasses = RcClasses<RcDownshiftProps['InputProps']>(
  ['root', 'input'],
  'CustomDownshiftInput',
);

const CustomTextField = styled(RcTextField)`
  .${CustomDownshiftInputClasses.root} {
    padding-left: ${spacing(2)};
    height: auto;
  }

  .${CustomDownshiftInputClasses.input} {
    margin-left: 0;
  }
`;

export const DownshiftWithCustomInput: Story<DownshiftProps> = ({
  ...args
}) => {
  switchToControlKnobs();

  const [value, setValue] = useState<RcDownshiftSelectedItem[]>([]);

  return (
    <RcDownshift
      {...args}
      options={options}
      value={value}
      onChange={(selectedItems) => {
        setValue(selectedItems);
        console.log('onChange', selectedItems);
      }}
      renderInput={({ InputProps: InputPropsProp, ...params }) => {
        const InputProps = combineProps(
          { classes: CustomDownshiftInputClasses },
          InputPropsProp,
        );

        return (
          <CustomTextField
            {...params}
            InputProps={InputProps}
            variant="outline"
          />
        );
      }}
      filterOptions={RcDownshiftDefaultFilterOptions}
    />
  );
};

DownshiftWithCustomInput.args = {
  label: 'Downshift',
  placeholder: 'Search and select',
  multiple: true,
  clearBtn: true,
  toggleButton: true,
};

export const DownshiftAutocomplete: Story<DownshiftProps> = ({ ...args }) => {
  switchToControlKnobs();

  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState<RcDownshiftSelectedItem[]>([options[0]]);

  return (
    <RcDownshift
      {...args}
      variant="autocomplete"
      options={options}
      onOpen={() => console.log('open')}
      onClose={(e, r) => console.log('close', r)}
      value={value}
      onChange={(selectedItems) => {
        setValue(selectedItems);
        console.log('onChange', selectedItems);
      }}
      inputValue={inputValue}
      onInputChange={(value) => {
        setInputValue(value || '');
        console.log('input change', value);
      }}
      SuggestionListProps={{
        padding: true,
      }}
      filterOptions={RcAutocompleteDefaultFilterOptions}
    />
  );
};

DownshiftAutocomplete.args = {
  label: 'Downshift',
  placeholder: 'Search and select',
  multiple: false,
  clearBtn: true,
  toggleButton: true,
  disableCloseOnSelect: false,
  openOnFocus: true,
};
