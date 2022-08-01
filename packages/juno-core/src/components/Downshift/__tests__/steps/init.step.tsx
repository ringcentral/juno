import React, { useRef, useState } from 'react';

import {
  fireEvent,
  render,
  RenderResult,
  screen,
  act,
  within,
} from '@ringcentral/juno-test';
import userEvent from '@testing-library/user-event';

import { options } from '../../__stories__/options';
import {
  RcDownshift,
  RcDownshiftDefaultFilterOptions,
  RcDownshiftProps,
  RcDownshiftRef,
} from '../../Downshift';
import { RcDownshiftSelectedItem } from '../../utils';

export type InitContext = {
  result: RenderResult;
  ref: React.MutableRefObject<RcDownshiftRef | null>;
  input: HTMLElement;
  onChangeFn: jest.Mock;
  onInputChangeFn: jest.Mock;
  onKeyDownFn: jest.Mock;
  value: RcDownshiftSelectedItem[];
  updateOption: React.Dispatch<React.SetStateAction<RcDownshiftSelectedItem[]>>;
};

export const init = (
  {
    isHaveTags,
    options: optionsProp,
    value: valueProp,
    freeSolo,
    autoSelect,
    toggleButton,
    multiple,
    ToggleButtonProps,
    initialIsOpen,
    disableCloseOnSelect,
    error,
    clearBtn,
    inputValue: inputValueProp,
    SuggestionListProps,
    renderNoOptions,
    keyToTags,
    maxFreeSolo,
    onMaxFreeSolo,
    openOnFocus,
    label,
    variant,
    disabledItemsHighlightable,
    groupVariant,
    groupExpanded,
    groupBy,
  }: {
    isHaveTags?: boolean;
    options?: RcDownshiftSelectedItem[];
    value?: RcDownshiftSelectedItem[];
  } & Pick<
    RcDownshiftProps,
    | 'freeSolo'
    | 'autoSelect'
    | 'toggleButton'
    | 'multiple'
    | 'ToggleButtonProps'
    | 'initialIsOpen'
    | 'variant'
    | 'clearBtn'
    | 'inputValue'
    | 'disableCloseOnSelect'
    | 'SuggestionListProps'
    | 'keyToTags'
    | 'maxFreeSolo'
    | 'onMaxFreeSolo'
    | 'renderNoOptions'
    | 'openOnFocus'
    | 'error'
    | 'label'
    | 'disabledItemsHighlightable'
    | 'groupBy'
    | 'groupVariant'
    | 'groupExpanded'
  >,
  context: InitContext,
) => {
  let update: React.Dispatch<React.SetStateAction<RcDownshiftSelectedItem[]>>;
  let updateInput: React.Dispatch<React.SetStateAction<string>>;
  context.onKeyDownFn = jest.fn();

  context.onChangeFn = jest.fn((e) => {
    update(e);
  });

  context.onInputChangeFn = jest.fn((e) => {
    updateInput(e);
  });

  const Component = () => {
    context.ref = useRef<RcDownshiftRef>(null);

    const [value, setValue] = useState(
      valueProp ?? (isHaveTags ? [options[3], options[4]] : []),
    );

    const [inputValue, setInputValue] = useState(inputValueProp || '');

    const [optionState, setOptionState] = useState(optionsProp || options);

    context.updateOption = (...args) => {
      act(() => {
        setOptionState(...args);
      });
    };

    context.value = value;
    update = setValue;
    updateInput = setInputValue;

    return (
      <RcDownshift
        variant={variant}
        groupVariant={groupVariant}
        groupExpanded={groupExpanded}
        groupBy={groupBy}
        label={label}
        freeSolo={freeSolo}
        maxFreeSolo={maxFreeSolo}
        onMaxFreeSolo={onMaxFreeSolo}
        autoSelect={autoSelect}
        toggleButton={toggleButton}
        inputValue={inputValue}
        multiple={multiple}
        initialIsOpen={initialIsOpen}
        ToggleButtonProps={ToggleButtonProps}
        disableCloseOnSelect={disableCloseOnSelect}
        filterOptions={RcDownshiftDefaultFilterOptions}
        clearBtn={clearBtn}
        options={optionState}
        error={error}
        onKeyDown={context.onKeyDownFn}
        action={context.ref}
        onInputChange={context.onInputChangeFn}
        keyToTags={keyToTags}
        onChange={context.onChangeFn}
        value={value}
        SuggestionListProps={SuggestionListProps}
        renderNoOptions={renderNoOptions}
        openOnFocus={openOnFocus}
        disabledItemsHighlightable={disabledItemsHighlightable}
      />
    );
  };

  context.result = render(<Component />);

  context.input = context.result.getByRole('combobox');
};

export const openMenu = (args: any, context: InitContext) => {
  act(() => {
    context.ref.current?.openMenu();
  });
};

export const typingValueAndOpen = (
  args: { valueInInput: boolean },
  context: InitContext,
) => {
  focusInput(args, context);

  if (args.valueInInput) {
    const input = context.result.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'a' } });

    const menu = screen.queryByRole('presentation');
    expect(menu).toBeDefined();

    expect(document.activeElement).toEqual(input);
  } else {
    act(() => {
      context.ref.current?.openMenu();
    });
  }
};

export const openMenuWithState = (
  args: { menuOpenState: boolean },
  context: InitContext,
) => {
  act(() => {
    if (args.menuOpenState) {
      context.ref.current?.openMenu();
    } else {
      context.ref.current?.closeMenu();
    }
  });
};

export const checkHaveTags: (args: any, context: InitContext) => void = (
  args,
  context,
) => {
  const tags = context.result.container.querySelectorAll('[data-tag-index]');
  if (args.isHaveTags) {
    expect(tags.length).toBeGreaterThan(0);
  } else {
    expect(tags.length).toEqual(0);
  }
};

export const focusInput = (args: any, context: InitContext) => {
  userEvent.click(context.input);
};

export const blurInput = (args: any, context: InitContext) => {
  userEvent.click(document.body);
};

export const hoverInput = (args: any, context: InitContext) => {
  userEvent.hover(context.input);
  fireEvent.mouseOver(context.input);
};

export const checkMenuOpen = (menuOpenState: boolean) => {
  const menuElm = screen.queryByRole('presentation');

  if (menuOpenState) {
    expect(menuElm).not.toBeNull();
  } else {
    expect(menuElm).toBeNull();
  }
};

export const checkHighlightItem = (args: any, context: InitContext) => {
  checkMenuOpen(true);

  if (args.haveHighlightItem) {
    const currIndex = context.ref.current?.getHighlightedIndex();
    if (currIndex && currIndex < 0) {
      context.ref.current?.setHighlightedIndex(0);
    }
  } else {
    act(() => {
      context.ref.current?.closeMenu();
    });
  }
};

export const keydownKey =
  (key?: string) =>
  (args: { arrowDirection: string }, context: InitContext) => {
    if (document.activeElement) {
      fireEvent.keyDown(document.activeElement, {
        key: key || args.arrowDirection,
      });
    } else {
      throw new Error('not find activeElement to keydown');
    }
  };

export const checkStopPropagation = (
  args: {
    stopPropagation: boolean;
  },
  context: InitContext,
) => {
  expect(context.onKeyDownFn.mock.calls[0][0].isPropagationStopped()).toEqual(
    args.stopPropagation,
  );
};

export const getToggleButton = (context: InitContext) => {
  // id like downshift-1-toggle-button
  return context.result.container.querySelector<HTMLButtonElement>(
    "[id^='downshift-'][id$='toggle-button']",
  )!;
};

export const getClearButton = (context: InitContext) => {
  return context.result.container.querySelector(
    "[id^='downshift-'][id$='clear-button']",
  )!;
};

export const clickExpandButton: (args: any, context: InitContext) => void = (
  args,
  context,
) => {
  const item = context.result.queryByRole('option');

  const expandButton = within(item!).getByRole('button');

  expect(expandButton).toHaveClass('RcSuggestionList-toggle');

  userEvent.click(expandButton);
};

export const optionLengthToBe: (args: any, context: InitContext) => void = (
  args,
  context,
) => {
  const items = context.ref.current?.getFilterResultItems()!;

  expect(items.length).toEqual(args.length);
};
