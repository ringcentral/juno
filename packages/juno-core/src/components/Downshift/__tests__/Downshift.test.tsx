/* eslint-disable jest/no-conditional-expect */
import React from 'react';

import range from 'lodash/range';

import { act, EachRun, fireEvent, screen, sleep } from '@ringcentral/juno-test';
import userEvent from '@testing-library/user-event';

import {
  getSelectionPosition,
  setSelectionPosition,
} from '../../../foundation';
import { options } from '../__stories__/options';
import {
  blurInput,
  checkHaveTags,
  checkHighlightItem,
  checkMenuOpen,
  checkStopPropagation,
  clickExpandButton,
  focusInput,
  getClearButton,
  getToggleButton,
  hoverInput,
  init,
  InitContext,
  keydownKey,
  openMenu,
  openMenuWithState,
  optionLengthToBe,
  typingValueAndOpen,
} from './steps/init.step';

describe('Downshift', () => {
  it.each`
    freeSolo | valueInInput | haveHighlightItem | composition | transformResult     | stopPropagation
    ${true}  | ${true}      | ${false}          | ${'-'}      | ${'input value'}    | ${true}
    ${true}  | ${true}      | ${false}          | ${true}     | ${false}            | ${false}
    ${false} | ${true}      | ${false}          | ${'-'}      | ${false}            | ${false}
    ${true}  | ${true}      | ${true}           | ${'-'}      | ${'highlight item'} | ${true}
    ${true}  | ${false}     | ${true}           | ${'-'}      | ${'highlight item'} | ${true}
    ${false} | ${false}     | ${true}           | ${'-'}      | ${'highlight item'} | ${true}
  `(
    '[Downshift] keydown [Enter]',
    EachRun<any, InitContext>`
      Scenario: User focus on input
      Given: freeSolo state is $freeSolo ${init}
      And: input have value is $valueInInput ${typingValueAndOpen}
      And: that is in $composition ${(args, context) => {
        if (args.composition === true) {
          fireEvent.compositionStart(context.input);
        }
      }}
      And: that have highlight item is $haveHighlightItem ${checkHighlightItem}
      When: user keydown [Enter] ${keydownKey('Enter')}
      Then: transform result will be $transformResult ${(args, context) => {
        switch (args.transformResult) {
          case 'input value':
            expect(context.onChangeFn).toBeCalled();
            expect(context.onChangeFn.mock.calls[0][0][0].label).toEqual('a');
            break;
          case false:
            expect(context.onChangeFn).not.toBeCalled();
            break;
          case 'highlight item':
            expect(context.onChangeFn).toBeCalled();
            expect(context.onChangeFn.mock.calls[0][0][0].label).toEqual(
              options[0].label,
            );
            break;

          default:
            break;
        }
      }}
      And: that event stopPropagation is $stopPropagation ${checkStopPropagation}
    `,
  );

  it.each`
    freeSolo | valueInInput | haveHighlightItem | result                               | isLeaveInput
    ${true}  | ${true}      | ${false}          | ${'transform input value to tag'}    | ${false}
    ${false} | ${true}      | ${false}          | ${'keep input value'}                | ${true}
    ${true}  | ${true}      | ${true}           | ${'transform highlight item to tag'} | ${false}
    ${true}  | ${false}     | ${true}           | ${'transform highlight item to tag'} | ${false}
  `(
    '[Downshift] keydown [Tab]',
    EachRun<any, InitContext>`
      Scenario: User focus on input
      Given: freeSolo state is $freeSolo ${init} ${focusInput}
      And: input have value is $valueInInput ${typingValueAndOpen}
      And: that have highlight item is $haveHighlightItem ${checkHighlightItem}
      When: user keydown [Tab] ${() => {
        userEvent.tab();
      }}
      Then: result will be $result ${(args, context) => {
        switch (args.result) {
          case 'transform input value to tag':
            expect(context.onChangeFn).toBeCalled();
            expect(context.onChangeFn.mock.calls[0][0][0].label).toEqual('a');
            break;
          case 'keep input value':
            expect(context.onChangeFn).not.toBeCalled();
            expect(context.input.getAttribute('value')).toEqual('a');
            break;
          case 'transform highlight item to tag':
            expect(context.onChangeFn).toBeCalled();
            expect(context.onChangeFn.mock.calls[0][0][0].label).toEqual(
              options[0].label,
            );
            break;
          default:
            break;
        }
      }}
      And: focus leave input is $isLeaveInput ${(args, context) => {
        if (args.isLeaveInput) {
          expect(document.activeElement).not.toEqual(context.input);
        } else {
          expect(document.activeElement).toEqual(context.input);
        }
      }}
    `,
  );

  it.each`
    isHaveTags | result                  | tabAgainResult
    ${true}    | ${'focus on first tag'} | ${'focus on input'}
    ${false}   | ${'focus on input'}     | ${'leave input'}
  `(
    '[Downshift] outside keydown [Tab]',
    EachRun<any, InitContext>`
      Scenario: User init downshift ${init}
      Given: that have tags is $isHaveTags ${checkHaveTags}
      And: focus on downshift previous element ${() => {
        expect(document.activeElement).toEqual(document.body);
      }}
      When: user keydown [Tab] ${() => {
        userEvent.tab();
      }}
      Then: result will be $result ${(args, context) => {
        if (args.result === 'focus on first tag') {
          expect(
            document.activeElement?.getAttribute('data-tag-index'),
          ).toBeDefined();
        } else {
          expect(document.activeElement).toEqual(context.input);
        }
      }}
      When: user keydown [Tab] again ${(args, context) => {
        userEvent.tab();
      }}
      Then: result will be $tabAgainResult ${(args, context) => {
        if (args.tabAgainResult === 'focus on input') {
          expect(document.activeElement).toEqual(context.input);
        } else {
          expect(document.activeElement).toEqual(document.body);
        }
      }}
    `,
  );

  it.each`
    valueInInput | isHaveTags | result
    ${false}     | ${true}    | ${'focus to first tag'}
    ${true}      | ${false}   | ${'leave input'}
  `(
    '[Downshift] keydown [Shift+Tab]',
    EachRun<any, InitContext>`
      Scenario: [Downshift] keydown [Shift+Tab]
      Given: that have tags is $isHaveTags ${init} ${checkHaveTags}
      And: input have value is $valueInInput ${typingValueAndOpen}
      When: user keydown [Shift+Tab] ${(args, context) => {
        userEvent.tab({ shift: true });
      }}
      Then: result will be $result ${(args, context) => {
        if (args.result === 'focus to first tag') {
          expect(
            document.activeElement?.getAttribute('data-tag-index'),
          ).toBeDefined();
        } else {
          expect(document.activeElement).toEqual(document.body);
        }
      }}
    `,
  );

  it.each`
    arrowDirection  | result
    ${'ArrowUp'}    | ${'move to previous tag'}
    ${'ArrowLeft'}  | ${'move to previous tag'}
    ${'ArrowDown'}  | ${'move to next tag'}
    ${'ArrowRight'} | ${'move to next tag'}
  `(
    '[Downshift] User focus on tags, keydown arrow directions',
    EachRun<any, InitContext>`
      Scenario: User focus on tags, keydown arrow directions ${(
        args,
        context,
      ) =>
        init(
          { ...args, value: [options[3], options[4], options[5]] },
          context,
        )} ${(args, context) => checkHaveTags({ isHaveTags: true }, context)}
      Given: user focus on tags ${(args, context) => {
        const tag = context.result.container.querySelector(
          '[data-tag-index="1"]',
        );
        if (tag) {
          fireEvent.focus(tag);
        } else {
          throw new Error('not find tag');
        }
      }}
      When: user keydown $arrowDirection ${keydownKey()}
      Then: result will be $result ${(args, context) => {
        expect(document.activeElement?.getAttribute('data-tag-index')).toEqual(
          args.result === 'move to previous tag' ? '0' : '2',
        );
      }}
    `,
  );

  it.each`
    menuOpenState | arrowDirection  | result
    ${false}      | ${'ArrowUp'}    | ${'open menu, highlight on last item'}
    ${true}       | ${'ArrowUp'}    | ${'move highligh item to previous item'}
    ${false}      | ${'ArrowDown'}  | ${'open menu, highlight on first item'}
    ${true}       | ${'ArrowDown'}  | ${'move highligh item to next item'}
    ${'-'}        | ${'ArrowLeft'}  | ${'move anchor position in input, highlight item not change'}
    ${'-'}        | ${'ArrowRight'} | ${'move anchor position in input, highlight item not change'}
  `(
    '[Downshift] User focus on input, keydown arrow directions',
    EachRun<any, InitContext>`
      Scenario: User focus on input, keydown arrow directions ${init}
      Given: user focus on input ${focusInput}
      And: menu open state is $menuOpenState ${openMenuWithState}
      When: user keydown $arrowDirection ${keydownKey()}
      Then: result will be $result ${(args, context) => {
        const index = context.ref.current?.getHighlightedIndex();

        switch (args.result) {
          case 'open menu, highlight on last item':
            checkMenuOpen(true);
            expect(index).toEqual(options.length - 1);
            break;
          case 'move highligh item to previous item':
            checkMenuOpen(true);
            expect(index).toEqual(options.length - 1);
            break;
          case 'open menu, highlight on first item':
            checkMenuOpen(true);
            expect(index).toEqual(0);
            break;
          case 'move highligh item to next item':
            checkMenuOpen(true);
            expect(index).toEqual(1);
            break;
          case 'move anchor position in input, highlight item not change':
            checkMenuOpen(true);
            expect(index).toEqual(0);
            break;
          default:
            break;
        }
      }}
    `,
  );

  it.each`
    highlightIndex | arrowDirection | resultIndex
    ${0}           | ${'ArrowUp'}   | ${2}
    ${2}           | ${'ArrowDown'} | ${0}
  `(
    '[Downshift] User focus on input, arrow up/down loop highlight',
    EachRun<any, InitContext>`
      Scenario: User focus on input, arrow up/down loop highlight
      Given: have three select items
      ${(args, context) =>
        init(
          {
            ...args,
            options: [
              { id: 1, label: 'a' },
              { id: 2, label: 'b' },
              { id: 3, label: 'c' },
            ],
          },
          context,
        )}
      And: user focus on input ${focusInput}
      And: menu is open ${openMenu}
      And: highlight index $highlightIndex ${(args, context) => {
        act(() => {
          context.ref.current?.setHighlightedIndex(args.highlightIndex);
        });
      }}
      When: user keydown $arrowDirection ${keydownKey()}
      Then: highlight index will be $resultIndex ${(args, context) => {
        const index = context.ref.current?.getHighlightedIndex();
        expect(index).toEqual(args.resultIndex);
      }}
    `,
  );

  it.each`
    menuOpenState | result          | stopPropagation
    ${true}       | ${'close menu'} | ${true}
    ${false}      | ${'nothing'}    | ${false}
  `(
    '[Downshift] keydown [Escape]',
    EachRun<any, InitContext>`
      Scenario: User focus on input ${init} ${focusInput}
      Given: menu open state is $menuOpenState ${openMenuWithState}
      When: User keydown [Escape] ${keydownKey('Escape')}
      Then: Use will see $result ${(args, context) => {
        switch (args.result) {
          case 'close menu':
          case 'nothing':
            checkMenuOpen(false);
            break;
          default:
            break;
        }
      }}
      And: that event stopPropagation is $stopPropagation ${checkStopPropagation}
    `,
  );

  it.each`
    menuOpenState | isHaveTags | isInputValue | isInZeroPosition | result
    ${true}       | ${true}    | ${true}      | ${true}          | ${'focus on last tag, close menu'}
    ${true}       | ${true}    | ${true}      | ${false}         | ${'delete a char, keep menu state'}
    ${false}      | ${true}    | ${true}      | ${true}          | ${'focus on last tag'}
    ${'-'}        | ${false}   | ${'-'}       | ${'-'}           | ${'nothing'}
  `(
    '[Downshift] focus on input keydown [Backspace]',
    EachRun<any, InitContext>`
      Scenario: User focus on input keydown [Backspace] ${init}
      Given: menu open state is $menuOpenState ${openMenuWithState}
      And: autoSelect is true
      And: there have tag state is $isHaveTags ${checkHaveTags}
      And: typing something in input ${focusInput} ${(args, context) =>
      typingValueAndOpen({ ...args, valueInInput: true }, context)}

      And: the position in input is zero state is $isInZeroPosition ${(
        args,
        context,
      ) => {
        if (args.isInZeroPosition) {
          setSelectionPosition(
            { current: context.input as HTMLInputElement },
            { start: 0, end: 0 },
          );
        }
      }}

      When: User keydown [Backspace] ${(args, context) => {
        keydownKey('Backspace')(args, context);

        // when that is not at first trigger one input change, because fireEvent will not trigger that automatically
        if (!args.isInZeroPosition) {
          fireEvent.change(context.input, { target: { value: '' } });
        }
      }}
      Then: result will be $result ${(args, context) => {
        const tags =
          context.result.container.querySelectorAll('[data-tag-index]');
        if (args.isHaveTags) {
          expect(tags.length).toBeGreaterThan(0);
        } else {
          expect(tags.length).toEqual(0);
        }

        const toBeLastTag = () => {
          expect(document.activeElement).toBe(tags[tags.length - 1]);
        };

        const toBeKeepMenuState = () => {
          checkMenuOpen(args.menuOpenState);
        };

        switch (args.result) {
          case 'focus on last tag, close menu':
            toBeLastTag();
            checkMenuOpen(false);
            break;
          case 'delete a char, keep menu state':
            expect(context.input.getAttribute('value')).toEqual('');
            toBeKeepMenuState();
            break;
          case 'focus on last tag':
            toBeLastTag();
            toBeKeepMenuState();
            break;

          default:
            break;
        }
      }}
      And: should not create a tag ${(args, context) => {
        const tags =
          context.result.container.querySelectorAll('[data-tag-index]');
        expect(tags.length).toBe(args.isHaveTags ? 2 : 0);
      }}
    `,
  );

  it.each`
    tagIndex | keydownKey     | thenFocusIndex
    ${0}     | ${'Backspace'} | ${0}
    ${1}     | ${'Backspace'} | ${0}
    ${2}     | ${'Backspace'} | ${1}
    ${0}     | ${'Delete'}    | ${0}
    ${1}     | ${'Delete'}    | ${1}
    ${2}     | ${'Delete'}    | ${1}
  `(
    '[Downshift] focus on tag keydown [Backspace, Delete]',
    EachRun<any, InitContext>`
      Scenario: User focus on tag keydown [Backspace, Delete]
      Given: there is three tags
      ${(args, context) =>
        init(
          {
            ...args,
            value: [
              { id: 1, label: 'a' },
              { id: 2, label: 'b' },
              { id: 3, label: 'c' },
            ],
          },
          context,
        )}
      And: user focus on $tagIndex item ${(args, context) => {
        const tag = context.result.container.querySelector(
          `[data-tag-index="${args.tagIndex}"]`,
        );
        if (tag) {
          userEvent.click(tag);
          fireEvent.focus(tag);
        } else {
          throw new Error('not find tag');
        }
      }}
      When: user keydown [$keydownKey]
      ${(args, context) => keydownKey(args.keydownKey)(args, context)}

      Then: this item will be remove ${(args, context) => {
        expect(context.value).toHaveLength(2);
      }}
      And: then the focus will be $thenFocusIndex ${(args, context) => {
        expect(document.activeElement?.getAttribute('data-tag-index')).toEqual(
          `${args.thenFocusIndex}`,
        );
      }}
    `,
  );

  it.each`
    keydownKey
    ${'Backspace'}
    ${'Delete'}
  `(
    '[Downshift] when remove all tags, focus on input',
    EachRun<any, InitContext>`
      Scenario: when remove all tags, focus on input
      Given: there is one tag
      ${(args, context) =>
        init(
          {
            ...args,
            value: [{ id: 1, label: 'a' }],
          },
          context,
        )}
      And: user focus on first item ${(args, context) => {
        const tag =
          context.result.container.querySelector(`[data-tag-index="0"]`);
        if (tag) {
          userEvent.click(tag);
          fireEvent.focus(tag);
        } else {
          throw new Error('not find tag');
        }
      }}
      When: user keydown [$keydownKey]
      ${(args, context) => keydownKey(args.keydownKey)(args, context)}

      Then: this item will be remove ${(args, context) => {
        expect(context.value).toHaveLength(0);
      }}
      And: then the focus on input ${(args, context) => {
        expect(document.activeElement).toBe(context.input);
      }}
    `,
  );

  it.each`
    menuOpenState | result
    ${true}       | ${'close menu'}
    ${false}      | ${'open menu'}
  `(
    '[Downshift] toggleButton logic',
    EachRun<any, InitContext>`
      Scenario: toggleButton logic
      Given: toggleButton is true
      ${(args, context) => init({ ...args, toggleButton: true }, context)}
      ${focusInput}
      Given: menu open state is $menuOpenState ${openMenuWithState}
      When: user click toggleButton ${(args, context) => {
        const button = getToggleButton(context);
        expect(button).not.toBeNull();

        fireEvent.click(button);
      }}
      Then: open menu result will be $result ${(args, context) => {
        switch (args.result) {
          case 'open menu':
            checkMenuOpen(true);
            break;
          case 'close menu':
            checkMenuOpen(false);
            break;

          default:
            break;
        }
      }}
      And: keep focus on input ${(args, context) => {
        expect(document.activeElement).toBe(context.input);
      }}
    `,
  );

  it.each`
    status
    ${'multiple is false and have one tag'}
    ${'not have any can select options'}
    ${'user set disabled manually'}
  `(
    '[Downshift] toggleButton disabled',
    EachRun<any, InitContext>`
      Scenario: toggleButton disabled
      Given: downshift with status: $status ${(args, context) => {
        switch (args.status) {
          case 'multiple is false and have one tag':
            init(
              {
                ...args,
                toggleButton: true,
                multiple: false,
                value: [options[0]],
              },
              context,
            );
            break;
          case 'not have any can select options':
            init({ ...args, toggleButton: true, options: [] }, context);
            break;
          case 'user set disabled manually':
            init(
              {
                ...args,
                toggleButton: true,
                ToggleButtonProps: { disabled: true },
              },
              context,
            );
            break;

          default:
            break;
        }
      }}
      Then: downshift will be disabled ${(args, context) => {
        const button = getToggleButton(context);

        expect(button.disabled).toBeTruthy();
      }}
    `,
  );

  it.each`
    isDisabled | isSelectSuccess | disableCloseOnSelect | menuOpenState
    ${true}    | ${false}        | ${false}             | ${true}
    ${false}   | ${true}         | ${false}             | ${false}
    ${true}    | ${false}        | ${true}              | ${true}
    ${false}   | ${true}         | ${true}              | ${true}
  `(
    '[Downshift] click menu item',
    EachRun<any, InitContext>`
      Scenario: click menu item
      Given: disableCloseOnSelect is $disableCloseOnSelect
      ${(args, context) => {
        init(
          {
            ...args,
            options: [{ id: 1, label: 'a', disabled: args.isDisabled }],
            SuggestionListProps: {
              initialItemCount: 1,
            },
          },
          context,
        );
      }}
      ${focusInput}
      When: menu is open ${openMenu} ${() => checkMenuOpen(true)}
      And: user click menu item
      And: this item is $isDisabled ${(args, context) => {
        const item = context.result.getByRole('option');

        expect(item.getAttribute('aria-disabled')).toEqual(
          `${args.isDisabled}`,
        );

        try {
          userEvent.click(item);
        } catch (error) {
          // unable to click element as it has or inherits pointer-events set to "none".
        }
      }}
      Then: select item result will be $isSelectSuccess ${(args, context) => {
        if (args.isSelectSuccess) {
          expect(context.onChangeFn).toBeCalled();
        } else {
          expect(context.onChangeFn).not.toBeCalled();
        }
      }}
      And: menu close will be $isCloseMenu ${(args, context) => {
        checkMenuOpen(args.menuOpenState);
      }}
      And: keep focus on input ${(args, context) => {
        expect(document.activeElement).toBe(context.input);
      }}
    `,
  );

  it.each`
    initialIsOpen | openState
    ${true}       | ${true}
    ${false}      | ${false}
  `(
    '[Downshift] initialIsOpen',
    EachRun<any, InitContext>`
      Scenario: Downshift with initialIsOpen
      Given: initialIsOpen is $initialIsOpen ${init}
      When: downshift rendered
      Then: menu will be $openState ${(args, context) => {
        checkMenuOpen(args.openState);
      }}
    `,
  );

  // TODO: toHaveStyle ignores hover styles https://github.com/testing-library/jest-dom/issues/59
  // ${true}      | ${false}   | ${'hover'}  | ${true}
  // ${false}     | ${true}    | ${'hover'}  | ${true}
  // ${true}      | ${true}    | ${'hover'}  | ${true}
  it.each`
    valueInInput | isHaveTags | inputAction | isShowClearBtn
    ${true}      | ${false}   | ${'focus'}  | ${true}
    ${false}     | ${true}    | ${'focus'}  | ${true}
    ${true}      | ${true}    | ${'focus'}  | ${true}
    ${false}     | ${false}   | ${'focus'}  | ${false}
    ${false}     | ${false}   | ${'hover'}  | ${false}
    ${'-'}       | ${'-'}     | ${null}     | ${false}
  `(
    '[Downshift] Clear button show logic',
    EachRun<any, InitContext>`
      Scenario: Clear button logic
      Given: clearBtn prop is true ${(args, context) => {
        init(
          { ...args, clearBtn: true, inputValue: args.valueInInput ? 'a' : '' },
          context,
        );
      }} ${blurInput}
      And: input have value is $valueInInput
      And: that have tags is $isHaveTags ${checkHaveTags}
      And: user do some action $inputAction
      ${(args, context) => {
        switch (args.inputAction) {
          case 'focus':
            focusInput(args, context);
            break;
          case 'hover':
            hoverInput(args, context);
            break;
          default:
            break;
        }
      }}
      Then: clear button show state is $isShowClearBtn
      ${(args, context) => {
        const cleanButton = getClearButton(context);

        expect(cleanButton).toHaveStyle(
          `display: ${args.isShowClearBtn ? 'inline-flex' : 'none'}`,
        );
      }}
    `,
  );

  it.each`
    run
    ${true}
  `(
    '[Downshift] Clear button click logic',
    EachRun<any, InitContext>`
      Scenario: Clear button click logic
      Given: clearBtn prop is true
      ${(args, context) => init({ ...args, clearBtn: true }, context)}
      When: use click clear button ${(args, context) => {
        const cleanButton = getClearButton(context);

        userEvent.click(cleanButton);
      }}
      And: input value and tags will be empty ${(args, context) => {
        const tags =
          context.result.container.querySelectorAll('[data-tag-index]');

        expect(tags.length).toEqual(0);
      }}
      And: focus will change to input ${(args, context) => {
        expect(document.activeElement).toEqual(context.input);
      }}
    `,
  );

  it.each`
    keyToTags    | inputValue  | result
    ${undefined} | ${'a123;'}  | ${['a123']}
    ${undefined} | ${'a123,'}  | ${['a123']}
    ${undefined} | ${'a123\n'} | ${['a123']}
    ${undefined} | ${','}      | ${[]}
    ${undefined} | ${';'}      | ${[]}
    ${['_']}     | ${'a123_'}  | ${['a123']}
  `(
    '[Downshift] keyToTags logic',
    EachRun<
      { inputValue: string; keyToTags?: string[]; result: string[] },
      InitContext
    >`
      Scenario: keyToTags logic
      Given: freeSolo is true
      And: keyToTags use $keyToTag
      ${(args, context) =>
        init(
          {
            ...args,
            freeSolo: true,
            inputValue: '',
          },
          context,
        )}
      When: use input $inputValue
      ${focusInput}
      ${(args, context) => {
        let value = '';
        args.inputValue.split('').forEach((x) => {
          if (x === '\n') {
            fireEvent.keyDown(context.input, { key: 'Enter' });
          } else {
            value = value + x;
            fireEvent.change(context.input, { target: { value } });
          }
        });
      }}
      Then: tags will be $result ${(args, context) => {
        if (args.result.length > 0) {
          expect(context.onChangeFn).toBeCalled();
          expect(context.onChangeFn.mock.calls[0][0][0].label).toEqual(
            args.result[0],
          );
        } else {
          expect(context.onChangeFn).not.toBeCalled();
        }
      }}
      And: input will be clear ${(args, context) => {
        expect(context.input.getAttribute('value')).toEqual('');
      }}
    `,
  );

  it.each`
    keyToTags    | pasteValue            | result
    ${undefined} | ${'a123;b123;c123'}   | ${['a123', 'b123', 'c123']}
    ${undefined} | ${'a123;b123;c123'}   | ${['a123', 'b123', 'c123']}
    ${undefined} | ${'a123,b123,c123,'}  | ${['a123', 'b123', 'c123']}
    ${undefined} | ${'a123,b123;c123;'}  | ${['a123', 'b123', 'c123']}
    ${undefined} | ${','}                | ${[]}
    ${undefined} | ${';'}                | ${[]}
    ${undefined} | ${'a123\nb123\nc123'} | ${['a123', 'b123', 'c123']}
    ${['_']}     | ${'a123_b123_c123_'}  | ${['a123', 'b123', 'c123']}
  `(
    '[Downshift] copy paste input logic',
    EachRun<any, InitContext>`
      Scenario: copy paste input logic
      Given: freeSolo is true
      And: autoSelect is false
      ${(args, context) =>
        init(
          {
            ...args,
            freeSolo: true,
            autoSelect: false,
          },
          context,
        )}
      When: user paste input with value $pasteValue ${(args, context) => {
        userEvent.paste(context.input, args.pasteValue, {
          clipboardData: { getData: () => args.pasteValue } as any,
        });
      }}
      Then: tags will be $result ${(args, context) => {
        if (args.result.length > 0) {
          expect(context.onChangeFn).toBeCalled();
          const callResult = context.onChangeFn.mock.calls[0][0].map(
            (x: any) => x.label,
          );

          expect(callResult).toEqual(args.result);
        } else {
          expect(context.onChangeFn).not.toBeCalled();
        }
      }}
      And: input will be clear ${(args, context) => {
        expect(context.input.getAttribute('value')).toEqual('');
      }}
    `,
  );

  it.each`
    inputValue          | freeSolo | highlightItem       | result                      | thenInputValue
    ${'a123;b123;c123'} | ${true}  | ${'a123;b123;c123'} | ${['a123', 'b123', 'c123']} | ${''}
    ${'a123;b123;c123'} | ${false} | ${undefined}        | ${[]}                       | ${'a123;b123;c123'}
    ${'B'}              | ${true}  | ${'Bahamas'}        | ${['B']}                    | ${''}
    ${'B'}              | ${false} | ${'Bahamas'}        | ${['Bahamas']}              | ${''}
  `(
    '[Downshift] autoSelect logic, when leave input',
    EachRun<any, InitContext>`
      Scenario: autoSelect logic, when leave input
      Given: autoSelect is true
      And: freeSolo is $freeSolo
      ${(args, context) =>
        init(
          {
            ...args,
            autoSelect: true,
            SuggestionListProps: {
              initialItemCount: args.highlightItem ? 1 : 0,
            },
          },
          context,
        )}
      ${focusInput}
      ${openMenu}
      And: highlightItem will be $highlightItem ${(args, context) => {
        const menu = screen.getByRole('presentation');

        const item = menu.querySelector('.Mui-selected');

        expect(item?.textContent).toEqual(args.highlightItem);
      }}
      When: leave input ${blurInput}
      Then: tags will be $result  ${(args, context) => {
        if (args.result.length > 0) {
          expect(context.onChangeFn).toBeCalled();
          const callResult = context.onChangeFn.mock.calls[0][0].map(
            (x: any) => x.label,
          );

          expect(callResult).toEqual(args.result);
        } else {
          expect(context.onChangeFn).not.toBeCalled();
        }
      }}
      And: input value will be $thenInputValue ${(args, context) => {
        expect(context.input.getAttribute('value')).toEqual(
          args.thenInputValue,
        );
      }}
    `,
  );

  it.each`
    multiple | variant           | inputUnselectable
    ${true}  | ${'tags'}         | ${false}
    ${false} | ${'tags'}         | ${true}
    ${true}  | ${'autocomplete'} | ${false}
    ${false} | ${'autocomplete'} | ${false}
  `(
    '[Downshift] multiple logic',
    EachRun<any, InitContext>`
      Scenario: multiple logic
      Given: autoSelect is true
      And: multiple is $multiple
      And: has one tag
      ${(args, context) => {
        init({ ...args, value: [options[3]] }, context);
      }}
      When: user focus in input ${focusInput}
      Then: input unselectable is $inputUnselectable ${(args, context) => {
        const readonly = context.input.getAttribute('readonly');
        const unselectable = context.input.getAttribute('unselectable');

        if (args.inputUnselectable) {
          expect(readonly).toEqual('');
          expect(unselectable).toEqual('on');
        } else {
          expect(readonly).toEqual(null);
          expect(unselectable).toEqual(null);
        }
      }}
    `,
  );

  it.each`
    maxFreeSolo  | tagsCount
    ${undefined} | ${20}
    ${10}        | ${10}
  `('[Downshift] maxFreeSolo logic', async (values) => {
    const onMaxFreeSolo = jest.fn();

    await EachRun<any, InitContext>`
      Scenario: maxFreeSolo logic
      Given: multiple is true
      And: maxFreeSolo is $maxFreeSolo
      And: freeSolo is true
      ${(args, context) => {
        init(
          {
            ...args,
            multiple: true,
            freeSolo: true,
            onMaxFreeSolo,
          },
          context,
        );
      }}
      ${focusInput}
      And: has $tagsCount tags
      ${(args, context) => {
        range(0, args.tagsCount).forEach((x) => {
          fireEvent.change(context.input, { target: { value: `a-${x}` } });
          keydownKey('Enter')(args, context);
        });

        expect(context.onChangeFn).toBeCalledTimes(args.tagsCount);
      }}
      When: trigger new tag event
      ${(args, context) => {
        fireEvent.change(context.input, { target: { value: 'trigger-more' } });
        keydownKey('Enter')(args, context);

        expect(context.onChangeFn).toBeCalledTimes(args.tagsCount);
      }}
      Then: onMaxFreeSolo will be trigger ${() => {
        expect(onMaxFreeSolo).toBeCalled();
      }}
      Then: input value will be clear ${(args, context) => {
        expect(context.input.getAttribute('value')).toEqual('');
      }}
      And: tags count will be keep same as $tagsCount ${(args, context) => {
        expect(context.value.length).toEqual(args.tagsCount);
      }}
    `(values);
  });

  it.each`
    run
    ${true}
  `(
    '[Downshift] have a very long text tag, that text should be truncate',
    EachRun<any, InitContext>`
      Scenario: have a very long text tag
      Given: have a very long text tag
      ${(args, context) => {
        init(
          {
            ...args,
            value: [{ id: 1, label: 'very long text tag' }],
            SuggestionListProps: {
              initialItemCount: 1,
            },
          },
          context,
        );
      }}
      Then: that text should be truncate ${(args, context) => {
        const item =
          context.result.container.querySelector('[data-tag-index]')!;

        expect(item).toHaveStyle('overflow: hidden');
        expect(item).toHaveStyle('text-overflow: ellipsis');
        expect(item).toHaveStyle('white-space: nowrap');
      }}
    `,
  );

  it.each`
    haveSearchResultItems | renderNoOptions | addFreeSoloItem | showRenderNoOptions
    ${false}              | ${false}        | ${true}         | ${false}
    ${true}               | ${false}        | ${false}        | ${false}
    ${false}              | ${true}         | ${false}        | ${true}
    ${true}               | ${true}         | ${false}        | ${false}
  `(
    '[Downshift] When freeSolo and not have search result need add select item',
    EachRun<any, InitContext>`
      Scenario: When menu open default highlight index
      Given: freeSolo state is true
      And: renderNoOptions have set is $renderNoOptions
      ${(args, context) => {
        init(
          {
            ...args,
            freeSolo: true,
            value: [{ id: 1, label: 'very long text tag' }],
            renderNoOptions: args.renderNoOptions
              ? () => <>no options</>
              : undefined,
            SuggestionListProps: {
              initialItemCount:
                // * react-virtuoso issue https://github.com/petyosi/react-virtuoso/issues/26, must set that to render correctly
                !args.haveSearchResultItems && !args.addFreeSoloItem ? 0 : 1,
            },
          },
          context,
        );
      }}
      When: user focus on input ${focusInput}
      And: user typing something in input
      And: have search result is $haveSearchResultItems
      ${(args, context) => {
        if (args.haveSearchResultItems) {
          fireEvent.change(context.input, { target: { value: 'a' } });
        } else {
          fireEvent.change(context.input, { target: { value: 'abac---aaa' } });
        }
      }}
      Then: that need add freeSolo item in first item is $addFreeSoloItem
      And: should highlight on first item when have option
      ${(args, context) => {
        const items = context.result.queryAllByRole('option');

        if (args.showRenderNoOptions) {
          expect(items.length).toEqual(0);
          const noOptions = context.result.queryByText('no options');
          expect(noOptions).not.toBeNull();
        } else if (args.addFreeSoloItem) {
          expect(items[0].textContent).toEqual('abac---aaa');
          expect(items[0]).toHaveClass('Mui-selected');
        } else {
          expect(items[0].textContent).toEqual('Afghanistan');
          expect(items[0]).toHaveClass('Mui-selected');
        }
      }}
    `,
  );

  it.each`
    howToOpenMenu           | optionLength | selected
    ${'ArrowDown'}          | ${3}         | ${'A'}
    ${'ArrowUp'}            | ${3}         | ${'C'}
    ${'click toggleButton'} | ${3}         | ${'A'}
    ${'openOnFocus'}        | ${3}         | ${'A'}
    ${'typing A'}           | ${1}         | ${'A'}
    ${'typing test'}        | ${0}         | ${undefined}
  `(
    '[Downshift] highlight item always focus first item when menu open',
    EachRun<any, InitContext>`
      Scenario: When freeSolo when not search result need add select item
      Given: have three option items
      ${(args, context) => {
        init(
          {
            ...args,
            options: [
              { id: 1, label: 'A' },
              { id: 2, label: 'B' },
              { id: 3, label: 'C' },
            ],
            openOnFocus:
              args.howToOpenMenu === 'openOnFocus' ? true : undefined,
            toggleButton: true,
            SuggestionListProps: {
              initialItemCount:
                args.howToOpenMenu === 'typing A'
                  ? 1
                  : args.howToOpenMenu === 'typing test'
                  ? 0
                  : 3,
            },
          },
          context,
        );
      }}
      When: user focus on input ${focusInput}
      And: open menu use $howToOpenMenu ${(args, context) => {
        switch (args.howToOpenMenu) {
          case 'ArrowDown':
            keydownKey('ArrowDown')(args, context);
            break;
          case 'ArrowUp':
            keydownKey('ArrowUp')(args, context);
            break;
          case 'click toggleButton':
            {
              const button = getToggleButton(context);

              expect(button).not.toBeNull();

              fireEvent.click(button);
            }
            break;
          case 'openOnFocus':
            break;
          case 'typing A':
            fireEvent.change(context.input, { target: { value: 'A' } });
            break;
          case 'typing test':
            fireEvent.change(context.input, { target: { value: 'test' } });
            break;
          default:
            break;
        }
      }}
      And: there is $optionLength option items
      ${(args, context) => {
        const items = context.result.queryAllByRole('option');

        expect(items.length).toEqual(args.optionLength);
      }}
      Then: default highlight index $resultIndex ${(args, context) => {
        const menu = screen.getByRole('presentation');

        const item = menu.querySelector('.Mui-selected');

        expect(item?.textContent).toEqual(args.selected);
      }}
    `,
  );

  it.each`
    openOnFocus
    ${true}
    ${false}
  `(
    '[Downshift] when focus on input, that will auto open menu',
    EachRun<any, InitContext>`
      Scenario: when focus on input, that will auto open menu
      Given: openOnFocus state is $openOnFocus
      ${init}
      When: User focus on input ${focusInput}
      And: menu auto open is $openOnFocus ${(args, context) =>
        checkMenuOpen(args.openOnFocus)}
    `,
  );

  it.each`
    error        | tagErrors         | resultError
    ${true}      | ${[false, false]} | ${true}
    ${undefined} | ${[true, false]}  | ${true}
    ${false}     | ${[true, false]}  | ${false}
    ${false}     | ${[false, false]} | ${false}
  `(
    '[Downshift] downshift error logic',
    EachRun<any, InitContext>`
      Scenario: downshift error logic
      Given: there is two tag in downshift
      And: user have set error prop $error
      And: tags error state is $tagErrors
      ${(args, context) => {
        init(
          {
            ...args,
            label: 'downshift',
            value: [
              { id: 1, label: 'A', error: args.tagErrors[0] },
              { id: 2, label: 'B', error: args.tagErrors[1] },
            ],
            SuggestionListProps: {
              initialItemCount: 2,
            },
          },
          context,
        );
      }}
      Then: the downshift error state is $resultError ${(args, context) => {
        const label = context.result.getByLabelText('downshift', {
          selector: 'div',
        });
        if (args.resultError) {
          expect(label).toHaveClass('RcTextFieldInput-error');
        } else {
          expect(label).not.toHaveClass('RcTextFieldInput-error');
        }
      }}
    `,
  );

  const threeItems = [
    { id: 1, label: 'A', disabled: true },
    { id: 2, label: 'B', disabled: true },
    { id: 3, label: 'C', disabled: false },
  ];

  const oneItems = [{ id: 1, label: 'A', disabled: true }];

  it.each`
    options       | disabledItemsHighlightable | hightedIndex
    ${oneItems}   | ${true}                    | ${0}
    ${oneItems}   | ${false}                   | ${-1}
    ${oneItems}   | ${undefined}               | ${-1}
    ${threeItems} | ${true}                    | ${0}
    ${threeItems} | ${false}                   | ${2}
    ${threeItems} | ${undefined}               | ${2}
  `(
    '[Downshift] highlight will skip thous disabled item',
    EachRun<any, InitContext>`
      Scenario: disabled item will not be select and can't be highlight
      Given: item is disabled
      And: disabledItemsHighlightable is $disabledItemsHighlightable
      ${(args, context) => {
        init(
          {
            ...args,
            SuggestionListProps: {
              initialItemCount: 1,
            },
          },
          context,
        );
      }}
      When: user open menu ${openMenu}
      Then: hightedIndex to be $hightedIndex
      And: highlight will skip thous item
      And: not available item will use -1 as index
      ${(args, context) => {
        const index = context.ref.current?.getHighlightedIndex();

        expect(index).toEqual(args.hightedIndex);
      }}
    `,
  );

  const normal = [
    { id: 1, label: 'A' },
    { id: 2, label: 'B' },
    { id: 3, label: 'C' },
  ];

  const nextDisabled = [
    { id: 1, label: 'A' },
    { id: 2, label: 'B', disabled: true },
    { id: 3, label: 'C' },
  ];

  const lastDisabled = [
    { id: 1, label: 'A' },
    { id: 2, label: 'B' },
    { id: 3, label: 'C', disabled: true },
  ];

  it.each`
    itemState                                          | options         | initIndex | resultIndex
    ${'first'}                                         | ${normal}       | ${0}      | ${0}
    ${'first, and next item is disabled'}              | ${nextDisabled} | ${0}      | ${1}
    ${'last'}                                          | ${normal}       | ${2}      | ${1}
    ${'last can select item, have next disabled item'} | ${lastDisabled} | ${1}      | ${0}
  `(
    '[Downshift] disableCloseOnSelect select item logic',
    EachRun<any, InitContext>`
      Scenario: disableCloseOnSelect logic
      Given: user focus on input
      ${(args, context) => {
        init({ ...args, disableCloseOnSelect: true }, context);
      }}
      And: menu is open ${openMenu} ${focusInput}
      And: that item state is $itemState ${(args, context) => {
        act(() => {
          context.ref.current?.setHighlightedIndex(args.initIndex);
        });
      }}
      When: select this item ${keydownKey('Enter')}
      Then: the result index is $resultIndex ${async (args, context) => {
        // wait for layout change
        await act(async () => {
          await sleep(0);
        });
        const index = context.ref.current?.getHighlightedIndex();
        expect(index).toEqual(args.resultIndex);
      }}
      And: menu open state is true ${(args, context) => {
        checkMenuOpen(true);
      }}
    `,
  );

  it.each`
    keepHighlightedIndex | highlightedIndex
    ${true}              | ${5}
    ${false}             | ${-1}
  `(
    '[Downshift] reset highlightedIndex when prop options change',
    EachRun<any, InitContext>`
      Scenario: reset highlightedIndex when prop options change ${init}
      Given: user focus on input ${focusInput}
      And: current highlightedIndex is 5 ${(args, context) => {
        act(() => {
          context.ref.current?.setHighlightedIndex(5);
        });

        expect(context.ref.current?.getHighlightedIndex()).toEqual(5);
      }}
      When: change options prop and trigger keepHighlightedIndex is $keepHighlightedIndex
      ${(args, context) => {
        if (args.keepHighlightedIndex) {
          context.ref.current?.keepHighlightedIndex();
        }
        context.updateOption([...options, { id: '1233123sdf', label: '123' }]);
      }}
      Then: current highlightedIndex to be $highlightedIndex
      ${(args, context) => {
        const currIndex = context.ref.current?.getHighlightedIndex();
        expect(currIndex).toEqual(args.highlightedIndex);
      }}
    `,
  );

  it.each`
    run
    ${true}
  `(
    '[Downshift] autocomplete when select item, will trigger onInputChange',
    EachRun<any, InitContext>`
      Scenario: when select item, will trigger onInputChange
      Given: variant is 'autocomplete'
      ${(args, context) =>
        init(
          {
            ...args,
            variant: 'autocomplete',
            options: [{ id: 1, label: 'Alan Zou' }],
            SuggestionListProps: {
              initialItemCount: 1,
            },
          },
          context,
        )}
      ${focusInput}
      When: menu is open ${openMenu} ${() => checkMenuOpen(true)}
      And: user click menu item
      And: this item is $isDisabled ${(args, context) => {
        const item = context.result.getByRole('option');

        userEvent.click(item);
      }}
      Then: onChange and onInputChange should be call ${(args, context) => {
        expect(context.onChangeFn).toBeCalled();
        expect(context.onInputChangeFn).toBeCalled();
      }}
      And: keep focus on input ${(args, context) => {
        expect(document.activeElement).toBe(context.input);
      }}
      And: input value change to select Item ${(args, context) => {
        expect(context.input.getAttribute('value')).toEqual('Alan Zou');
      }}
    `,
  );

  it.each`
    run
    ${true}
  `(
    '[Downshift] autocomplete init have value will trigger onInputChange',
    EachRun<any, InitContext>`
      Scenario: init have value will trigger onInputChange
      Given: variant is 'autocomplete'
      ${(args, context) =>
        init(
          {
            ...args,
            variant: 'autocomplete',
            options: [{ id: 1, label: 'Alan Zou' }],
            value: [{ id: 1, label: 'Alan Zou' }],
            SuggestionListProps: {
              initialItemCount: 1,
            },
          },
          context,
        )}
      Then: onInputChange should be call ${(args, context) => {
        expect(context.onInputChangeFn).toBeCalled();
      }}
      And: input value change to select Item ${(args, context) => {
        expect(context.input.getAttribute('value')).toEqual('Alan Zou');
      }}
    `,
  );

  it.each`
    run
    ${true}
  `(
    '[Downshift] autocomplete when focus will selectAll',
    EachRun<any, InitContext>`
      Scenario: autocomplete when focus will selectAll
      Given: variant is 'autocomplete'
      ${(args, context) =>
        init(
          {
            ...args,
            variant: 'autocomplete',
            options: [{ id: 1, label: 'Alan Zou' }],
            value: [{ id: 1, label: 'Alan Zou' }],
            SuggestionListProps: {
              initialItemCount: 1,
            },
          },
          context,
        )}
      When: focus input ${focusInput}
      Then: selection range will be all input text ${(args, context) => {
        const currRange = getSelectionPosition({
          current: context.input as any,
        });
        expect(currRange.isSelectRange).toBeTruthy();
        expect(currRange.position).toEqual({ start: 0, end: 8 });
      }}
    `,
  );

  it.each`
    run
    ${true}
  `(
    '[Downshift] autocomplete when change value and not select item, blur will recover original value',
    EachRun<any, InitContext>`
      Scenario: blur will recover original value
      Given: variant is 'autocomplete'
      ${(args, context) =>
        init(
          {
            ...args,
            variant: 'autocomplete',
            options: [{ id: 1, label: 'Alan Zou' }],
            value: [{ id: 1, label: 'Alan Zou' }],
          },
          context,
        )}
      When: focus input ${focusInput}
      And: change input value ${(args, context) => {
        fireEvent.change(context.input, { target: { value: 'abcdef' } });
        expect(context.input.getAttribute('value')).toEqual('abcdef');
      }}
      When: leave input ${blurInput}
      Then: input value should be recover ${(args, context) => {
        expect(context.input.getAttribute('value')).toEqual('Alan Zou');
      }}
    `,
  );
});

describe('Downshift GroupBy', () => {
  it.each`
    groupVariant  | groupExpanded | totalCount | titleDisabled
    ${'normal'}   | ${true}       | ${15}      | ${'true'}
    ${'normal'}   | ${false}      | ${15}      | ${'true'}
    ${'expanded'} | ${false}      | ${5}       | ${'false'}
    ${'expanded'} | ${true}       | ${10}      | ${'false'}
  `(
    '[Downshift] groupBy work correctly',
    EachRun<any, InitContext>`
      Scenario: have set groupBy props
      Given: groupVariant state is $groupVariant
      And: groupExpanded state is $groupExpanded
      ${(args, context) =>
        init(
          {
            ...args,
            options: [
              { id: 1, label: 'Alan Zou' },
              { id: 2, label: 'Alan Zou2' },
              { id: 3, label: 'Blan Zou' },
              { id: 4, label: 'Blan Zou2' },
              { id: 5, label: 'Clan Zou' },
              { id: 6, label: 'Clan Zou2' },
              { id: 7, label: 'Dlan Zou' },
              { id: 8, label: 'Dlan Zou2' },
              { id: 9, label: 'Elan Zou' },
              { id: 10, label: 'Elan Zou2' },
            ],
            groupBy: (option) => option.label?.[0] || '',
            SuggestionListProps: {
              initialItemCount: args.totalCount,
            },
          },
          context,
        )}
      When: focus input ${focusInput}
      And: menu is open ${openMenu} ${() => checkMenuOpen(true)}
      Then: total menu item length and title length to be $totalCount ${(
        args,
        context,
      ) => {
        const items = context.result.queryAllByRole('option');
        const menuitems = context.result.queryAllByRole('menuitem');

        expect(items.length + menuitems.length).toEqual(args.totalCount);
      }}
      And: group length to be 5
      And: each title item should be disabled ${(args, context) => {
        const menuElm = screen.queryByRole('presentation');
        const items = menuElm?.querySelectorAll('.RcSuggestionList-groupTitle');

        expect(items?.length).toEqual(5);

        items?.forEach((item) => {
          expect(item.getAttribute('aria-disabled')).toEqual(
            args.titleDisabled,
          );
        });
      }}
  `,
  );

  it.each`
    run
    ${true}
  `(
    '[Downshift] expanded button work correctly',
    EachRun<any, InitContext>`
      Scenario: have set groupBy props
      Given: groupVariant state is 'expanded'
      And: groupExpanded state is $groupExpanded
      ${(args, context) =>
        init(
          {
            ...args,
            groupVariant: 'expanded',
            options: [
              { id: 1, label: 'Alan Zou' },
              { id: 2, label: 'Alan Zou2' },
            ],
            groupBy: (option) => option.label?.[0] || '',
            SuggestionListProps: {
              initialItemCount: 1,
            },
          },
          context,
        )}
      When: focus input ${focusInput}
      And: menu is open ${openMenu} ${() => checkMenuOpen(true)}
      Then: total menu item length to be 1 ${(args, context) =>
        optionLengthToBe({ length: 1 }, context)}

      When: click expand button ${clickExpandButton}
      Then: total menu item length to be 2${(args, context) =>
        optionLengthToBe({ length: 2 }, context)}

      When: user blur to close menu ${blurInput} ${() => checkMenuOpen(false)}
      And: re-open menu ${openMenu} ${() => checkMenuOpen(true)}
      Then: toggle state should be keep ,total menu item length to be 2 ${(
        args,
        context,
      ) => optionLengthToBe({ length: 2 }, context)}


      When: click expand button again ${clickExpandButton}
      Then: total menu item length to be 1 ${(args, context) =>
        optionLengthToBe({ length: 1 }, context)}
  `,
  );
});

// renderNoOptions
// autoHighlight

// max line 4 line

// tooltip

// renderNoOptions
