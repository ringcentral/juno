import React, {
  ComponentProps,
  FunctionComponent,
  useRef,
  useState,
} from 'react';

import uniqueId from 'lodash/uniqueId';

import {
  flexCenterStyle,
  flexWidth,
  palette2,
  radius,
  RcAvatar,
  RcBox,
  RcClasses,
  RcCollapse,
  RcDialDelete,
  RcDialer,
  RcDialerPadSounds,
  RcDialPad,
  RcDialTextField,
  RcDownshiftDefaultFilterOptions,
  RcDownshiftInput,
  RcFade,
  RcGlobalScrollBarStyle,
  RcIcon,
  RcIconButton,
  RcListItemSecondaryAction,
  RcListItemText,
  RcMenuItem,
  RcPaper,
  RcSelect,
  RcSelectProps,
  RcSlide,
  RcSuggestionList,
  RcText,
  RcTooltip,
  setOpacity,
  shadows,
  spacing,
  styled,
  typography,
  useDialKeyboard,
  useDownshift,
  UseLongPressEventReason,
} from '@ringcentral/juno';
import {
  Close,
  Deletenumber,
  Dialer as DialerSvg,
  IncallBorder,
  Keypad,
  Minimize,
  Phone,
  TimeBorder,
} from '@ringcentral/juno-icon';
import {
  notControlInDocTable,
  notShowInDocTable,
  sortInDocTable,
  switchToControlKnobs,
} from '@ringcentral/juno-storybook';
import { Meta, Story } from '@storybook/react';

import avatar from '../../Avatar/__stories__/img/avatar.jpg';
import { options } from '../../Downshift/__stories__/options';
import { RcDialPadOnChangeReason } from '../DialPad';
import { useEventListener } from '../../../foundation';

export default {
  title: '🚀 Cleanup Components/Dialer',
  argTypes: {
    ...sortInDocTable<keyof DialerProps>([]),
    ...notControlInDocTable<keyof DialerProps>([
      'sounds',
      'control',
      'onChange',
    ]),
    ...notShowInDocTable<keyof DialerProps>([]),
  },
} as Meta;

type DialerProps = ComponentProps<typeof RcDialPad>;

const DialerWrapper = styled.div`
  width: 280px;
  margin: ${spacing(5)};
  overflow: hidden;
  box-shadow: ${shadows('16')};
  background: ${palette2('neutral', 'elevation')};
  border-radius: ${radius('xl')};
`;

const Header = styled.header`
  background-color: ${palette2('dialHeader', 'bg')};

  color: ${palette2('dialHeader', 'text')};
  padding: ${spacing(0, 4)};
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
`;

const Body = styled.main`
  position: relative;
  padding: ${spacing(0, 6, 6)};
`;

const TextFieldWrapper = styled.div<{ isHaveValue: boolean }>`
  display: flex;
  align-items: center;
  padding: ${spacing(1, 0, 3)};

  ${RcDialTextField} {
    padding-left: ${({ isHaveValue }) => isHaveValue && spacing(6)};

    margin: ${spacing(0, 3)};
    position: relative;

    input {
      color: ${palette2('dialHeader', 'text')};
      caret-color: ${palette2('dialHeader', 'text')};

      &::placeholder {
        color: ${palette2('dialHeader', 'textHint')};
        ${typography('subheading1')}
        ${flexCenterStyle};
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
  }

  ${RcIconButton} {
    align-self: flex-start;
  }
`;

const customSelectInputClasses = RcClasses<RcSelectProps['InputProps']>(
  ['root'],
  'custom-select-input',
);

const BodyTop = styled.div`
  ${flexCenterStyle};
  padding-top: ${spacing(1.5)};

  ${RcSelect} {
    width: auto;

    .${customSelectInputClasses.root} {
      &,
      &:hover {
        background-color: transparent;
      }
    }
  }
`;

const BodyBottom = styled.div`
  ${flexCenterStyle};
  margin-top: ${spacing(6)};

  && {
    ${RcIcon} {
      font-size: 28px;
    }
  }
`;

const SearchWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${palette2('neutral', 'elevation')};

  ${RcListItemSecondaryAction} {
    ${flexWidth('88px')};
    justify-content: space-between;
  }
`;

const DialerActionIconButton = styled(RcIconButton)`
  position: absolute;
  right: 0;
  top: 0;
  margin-right: ${spacing(4)};
  transform: translateY(-50%);
  z-index: 1;
`;

const menus = [
  { id: 1, value: '(000) 000-0000' },
  { id: 2, value: '(000) 000-0000' },
  { id: 3, value: '(000) 000-0000' },
  { id: 4, value: '(000) 000-0000' },
];

const FullDialer: FunctionComponent<DialerProps> = ({ children, ...rest }) => {
  const [value, setValue] = useState('');
  const dialKeyboardProps = useDialKeyboard();

  const isHaveValue = value.length > 0;

  const inputRef = useRef<HTMLInputElement>(null);

  const {
    optionItems,
    highlightedIndex,
    getToggleButtonProps,
    getTagListBoxProps,
    getMenuProps,
    getInputProps,
    getInputAriaProps,
    getLabelProps,
    getItemProps,
    isOpen,
    inputValue,
    changeHighlightedIndexReason,
    isKeepHighlightedIndex,
    // setHighlightedIndex,
    // keepHighlightedIndex,
    // closeMenu,
    // openMenu,
    // reset,
  } = useDownshift({
    inputRef,
    value: [],
    inputValue: value,
    options,
    freeSolo: true,
    keyToTags: ['-'],
    autoHighlight: true,
    addNoOptionItem: 'first',
    onChange: ([e]) => {
      // trigger action
      console.log('select item', e);
    },
    onInputChange: (e) => {
      console.log('inputChange', e);
      setValue(e || '');
    },
    filterOptions: RcDownshiftDefaultFilterOptions,
  });

  const { onBlur, ...InputProps } = getInputProps();

  return (
    <RcDialer {...rest}>
      <RcGlobalScrollBarStyle />
      <DialerWrapper>
        <Header>
          <HeaderTitle>
            <RcText variant="body1" color="dialHeader.text">
              New Call
            </RcText>
            <RcBox flex="1 1 auto" />
            <RcIconButton
              variant="plain"
              symbol={Minimize}
              size="small"
              color="dialHeader.icon"
            />
          </HeaderTitle>
          <TextFieldWrapper isHaveValue={isHaveValue}>
            <RcDialTextField
              inputRef={inputRef}
              InputLabelProps={getLabelProps()}
              InputProps={{
                inputComponent: RcDownshiftInput,
                ...(getTagListBoxProps() as any),
                ...InputProps,
              }}
              inputProps={{
                maxLength: 30,
                ...getInputAriaProps(),
              }}
              value={value}
              fullWidth
              align="center"
              onChange={setValue}
              placeholder="Enter a number"
            />
            {isHaveValue && (
              <RcDialDelete>
                <RcIconButton
                  symbol={Deletenumber}
                  data-sign="deleteButton"
                  color="dialHeader.icon"
                  title="delete"
                  variant="plain"
                  size="large"
                />
              </RcDialDelete>
            )}
          </TextFieldWrapper>
        </Header>
        <Body>
          <BodyTop>
            <RcText color="neutral.f02" variant="caption2">
              Call from:
            </RcText>
            <RcSelect
              value={1}
              variant="box"
              textVariant="caption1"
              InputProps={{
                classes: customSelectInputClasses,
              }}
            >
              {menus.map((item) => (
                <RcMenuItem value={item.id} key={item.id}>
                  {item.value}
                </RcMenuItem>
              ))}
            </RcSelect>
          </BodyTop>
          <RcDialPad
            sounds={RcDialerPadSounds}
            getDialPadButtonProps={(v) => ({ 'data-test-id': `${v}` })}
            {...dialKeyboardProps}
          />
          <BodyBottom>
            <RcIconButton
              color="success.b03"
              symbol={Phone}
              size="xxlarge"
              variant="contained"
              elevation="0"
              activeElevation="0"
            />
          </BodyBottom>

          <DialerActionIconButton
            variant="contained"
            activeElevation="1"
            color="neutral.elevation"
            size="small"
            symbol={isOpen ? DialerSvg : TimeBorder}
            {...getToggleButtonProps()}
          />

          {isOpen && (
            <SearchWrapper>
              <div>
                <BodyTop>
                  <RcText color="neutral.f02" variant="caption2">
                    Call from:
                  </RcText>
                  <RcSelect
                    value={1}
                    variant="box"
                    textVariant="caption1"
                    InputProps={{
                      classes: customSelectInputClasses,
                    }}
                  >
                    {menus.map((item) => (
                      <RcMenuItem value={item.id} key={item.id}>
                        {item.value}
                      </RcMenuItem>
                    ))}
                  </RcSelect>
                </BodyTop>
              </div>

              <RcBox flex="1 1 auto">
                <RcSuggestionList
                  highlightedIndex={highlightedIndex}
                  options={optionItems}
                  // * you can custom render with render Option
                  inputValue={inputValue}
                  getItemProps={getItemProps}
                  getMenuProps={getMenuProps}
                  changeHighlightedIndexReason={changeHighlightedIndexReason}
                  isKeepHighlightedIndex={isKeepHighlightedIndex}
                  renderOption={(
                    {
                      label,
                      freeSolo,
                      id,
                      error,
                      unSelectable,
                      isSuggestion,
                      isError,
                      ...restProps
                    },
                    state,
                  ) => {
                    return (
                      <RcMenuItem
                        id={`${id}`}
                        component="div"
                        selected={state.selected}
                        avatar={<RcAvatar src={avatar} size="small" />}
                        {...restProps}
                      >
                        <RcListItemText primary={label} secondary="ext. 000" />
                        <RcListItemSecondaryAction>
                          <RcIcon size="medium" symbol={IncallBorder} />
                          2021/6/11
                        </RcListItemSecondaryAction>
                      </RcMenuItem>
                    );
                  }}
                />
              </RcBox>
            </SearchWrapper>
          )}
        </Body>
      </DialerWrapper>
    </RcDialer>
  );
};

const Wrapper = styled.div`
  width: 280px;
  resize: horizontal;
  overflow: hidden;
  box-shadow: ${shadows('16')};

  ${RcDialTextField} {
    .${customSelectInputClasses.root} {
      padding: 1em;
    }
  }
`;

const SimpleDialer: FunctionComponent<DialerProps> = ({ ...args }) => {
  const [value, setValue] = useState('');
  const dialKeyboardProps = useDialKeyboard();

  return (
    <RcDialer {...args}>
      <Wrapper>
        <RcDialTextField
          value={value}
          align="center"
          fullWidth
          onChange={setValue}
          placeholder="Enter a number"
          InputProps={{
            classes: customSelectInputClasses,
            endAdornment: value.length > 0 && (
              <RcDialDelete>
                <RcIconButton
                  symbol={Deletenumber}
                  data-sign="deleteButton"
                  title="delete"
                  variant="plain"
                  size="large"
                />
              </RcDialDelete>
            ),
          }}
        />

        <RcDialPad
          sounds={RcDialerPadSounds}
          getDialPadButtonProps={(v) => ({ 'data-test-id': `${v}` })}
          {...dialKeyboardProps}
        />
      </Wrapper>
    </RcDialer>
  );
};

export const Dialer: Story<DialerProps> = ({ ...args }) => {
  switchToControlKnobs();

  return <SimpleDialer {...args} />;
};

export const DialerExamples: Story<DialerProps> = ({ ...args }) => {
  switchToControlKnobs();

  return <FullDialer {...args} />;
};

Dialer.storyName = 'Dialer';

Dialer.args = {};

Dialer.argTypes = {
  ...notControlInDocTable<keyof DialerProps>([]),
};

Dialer.parameters = {
  tags: [
    {
      name: 'Spec',
      href: 'https://app.abstract.com/share/c332ce38-eab2-43ca-8b98-399e270e3a56?mode=design&sha=f07a7e1cbecce82d5ab97b46641a07e7f83ed834',
    },
    {
      name: 'Accessibility',
      value: '100%',
    },
  ],
};

const KeypadModeWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 450px;
  overflow: hidden;
  border: 1px solid ${palette2('neutral', 'l03')};
`;

const Backdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: ${setOpacity(palette2('neutral', 'b05'), '80')};
`;

const StyledCollapse = styled(RcCollapse)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: ${shadows('16')};

  ${RcPaper} {
    border-radius: ${radius('zero')};
  }

  ${RcDialTextField} {
    input {
      margin: ${spacing(0, 4)};
    }
  }
`;

const Footer = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${({ open }) => {
    return open && spacing(2, 4, 0, 0);
  }};
  align-items: ${({ open }) => (open ? 'flex-end' : 'center')};
`;

const footHeight = 28;

const OpenWrapper = styled.div`
  ${flexCenterStyle}

  height: ${footHeight}px;
  width: 100%;
  cursor: pointer;
`;

export const KeypadMode: Story<any> = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  const { onKeyDown, onKeyUp, control } = useDialKeyboard<KeyboardEvent>();

  useEventListener(document, 'keydown', onKeyDown);
  useEventListener(document, 'keyup', onKeyUp);

  const [history, setHistory] = useState<
    { id: string; value: string; reason: RcDialPadOnChangeReason }[]
  >([]);

  return (
    <RcBox display="flex">
      <KeypadModeWrapper
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setOpen(false);
          }
        }}
      >
        <RcFade in={open}>
          <Backdrop onClick={() => setOpen(false)} />
        </RcFade>
        <StyledCollapse
          in={open}
          collapsedSize={`${footHeight}px`}
          onEntered={() => {
            inputRef.current?.focus();
          }}
          onExited={() => {
            setValue('');
            openButtonRef.current?.focus();
          }}
        >
          <RcPaper elevation={16}>
            <Footer open={open}>
              {open ? (
                <RcIconButton
                  variant="plain"
                  size="medium"
                  symbol={Close}
                  onClick={() => setOpen(!open)}
                  title="Close"
                />
              ) : (
                <RcTooltip title="Open">
                  <OpenWrapper onClick={() => setOpen(!open)}>
                    <RcIconButton
                      ref={openButtonRef}
                      variant="plain"
                      size="xsmall"
                      symbol={Keypad}
                    />
                  </OpenWrapper>
                </RcTooltip>
              )}
            </Footer>

            <RcDialer>
              <RcDialTextField
                inputRef={inputRef}
                value={value}
                align="center"
                fullWidth
                onlyAllowKeypadValue
                keypadMode
                onKeyDown={(e) => {
                  e.stopPropagation();
                }}
                onKeyUp={(e) => {
                  e.stopPropagation();
                }}
                onChange={setValue}
                onEmit={(newValue, reason) => {
                  console.log('Get value', newValue, reason);
                  setHistory(
                    [
                      { id: uniqueId('dial-'), value: newValue, reason },
                      ...history,
                    ].slice(0, 20),
                  );
                }}
                placeholder="Enter a number"
              />
              <RcDialPad control={control} sounds={RcDialerPadSounds} />
            </RcDialer>
          </RcPaper>
        </StyledCollapse>
      </KeypadModeWrapper>
      <RcBox height="300px" width="500px" style={{ overflowX: 'hidden' }}>
        {history.map((x) => (
          <RcSlide in key={x.id} direction="left">
            <RcText color="neutral.f06">
              value: {x.value}, reason: {x.reason}
            </RcText>
          </RcSlide>
        ))}
      </RcBox>
    </RcBox>
  );
};

KeypadMode.storyName = 'Keypad mode';

KeypadMode.args = {};

KeypadMode.argTypes = {};

KeypadMode.parameters = {};
