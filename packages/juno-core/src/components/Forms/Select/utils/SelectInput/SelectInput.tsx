/**
 * this file copy from Mui source to change below Menu content
 * ! just add some type and MenuComponent for custom our Menu
 * https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/Select/SelectInput.js
 */

import React, { ComponentType, forwardRef, useState } from 'react';

import clsx from 'clsx';
import { isFragment } from 'react-is';

// @ts-ignore that is exist in source, but no type
import { isFilled } from '@material-ui/core/InputBase/utils';
// @ts-ignore
// import MuiError from '@material-ui/utils/macros/MuiError.macro';
import MuiMenu, { MenuProps as MuiMenuProps } from '@material-ui/core/Menu';
import { SelectProps as MuiSelectProps } from '@material-ui/core/Select';
import {
  ownerDocument,
  useControlled,
  useForkRef,
} from '@material-ui/core/utils';

import { RcBaseProps } from '../../../../../foundation';
import { SelectArrowDownIcon } from '../../styles/SelectArrowDownIcon';

type SelectInputProps = {
  MenuComponent?: ComponentType<MuiMenuProps>;
  /** Props applied to the Virtualized Menu element */
  MenuProps?: Partial<MuiMenuProps>;
  /** classes for native input */
  classes?: {
    nativeInput?: string;
  };
  /** @deprecated automation id for input */
  automationId?: string;
} & RcBaseProps<MuiSelectProps, 'variant'>;

function areEqualValues(a: any, b: any) {
  if (typeof b === 'object' && b !== null) {
    return a === b;
  }

  return String(a) === String(b);
}

function isEmpty(display: null | string | React.ReactNode) {
  return display == null || (typeof display === 'string' && !display.trim());
}

/**
 * internal component
 */
const SelectInput = forwardRef<any, SelectInputProps>((props, ref) => {
  const {
    // TODO: fix menu when RcMenu fix scroll issue
    // ! change default arrow icon
    MenuComponent = MuiMenu,
    'aria-label': ariaLabel,
    autoFocus,
    autoWidth,
    children,
    classes = {},
    className,
    defaultValue,
    disabled,
    displayEmpty,
    // ! change default arrow icon
    IconComponent = SelectArrowDownIcon,
    inputRef: inputRefProp,
    labelId,
    MenuProps = {},
    multiple,
    name,
    onBlur,
    onChange,
    onClose,
    onFocus,
    onOpen,
    open: openProp,
    readOnly,
    renderValue,
    SelectDisplayProps = {},
    tabIndex: tabIndexProp,
    // catching `type` from Input which makes no sense for SelectInput
    type,
    value: valueProp,
    // variant = 'standard',
    ...other
  } = props;

  const [value, setValueState] = useControlled<any | any[]>({
    controlled: valueProp,
    default: defaultValue,
    name: 'Select',
  });

  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const displayRef = React.useRef<HTMLDivElement | null>(null);
  const [displayNode, setDisplayNode] = React.useState<HTMLDivElement | null>(
    null,
  );
  const { current: isOpenControlled } = React.useRef(openProp != null);

  const [menuMinWidthState, setMenuMinWidthState] = useState<number | null>();

  const [openState, setOpenState] = React.useState(false);
  const handleRef = useForkRef(ref, inputRefProp!);

  const handleDisplayRef = React.useCallback((node) => {
    displayRef.current = node;

    if (node) {
      setDisplayNode(node);
    }
  }, []);

  React.useImperativeHandle(
    handleRef,
    () => ({
      focus: () => {
        displayRef.current!.focus();
      },
      node: inputRef.current,
      value,
    }),
    [value],
  );

  React.useEffect(() => {
    if (autoFocus) {
      displayRef.current!.focus();
    }
  }, [autoFocus]);

  React.useEffect(() => {
    const label = ownerDocument(displayRef.current!).getElementById(labelId!);
    if (label) {
      const handler = () => {
        if (getSelection()!.isCollapsed) {
          displayRef.current!.focus();
        }
      };
      label.addEventListener('click', handler);
      return () => {
        label.removeEventListener('click', handler);
      };
    }
    return undefined;
  }, [labelId]);

  const update = (
    open: boolean,
    event: React.KeyboardEvent | React.MouseEvent | {},
  ) => {
    if (open) {
      if (onOpen) {
        onOpen(event as any);
      }
    } else if (onClose) {
      onClose(event as any);
    }

    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : displayNode!.clientWidth);
      setOpenState(open);
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    // Ignore everything but left-click
    if (event.button !== 0) {
      return;
    }
    // Hijack the default focus behavior.
    event.preventDefault();
    displayRef.current!.focus();

    update(true, event);
  };

  const handleClose = (event: {}) => {
    update(false, event);
  };

  const childrenArray = React.Children.toArray(children);

  // Support autofill.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = childrenArray
      .map((child) => (child as any).props.value)
      .indexOf(event.target.value);

    if (index === -1) {
      return;
    }

    const child = childrenArray[index];
    setValueState((child as any).props.value);

    if (onChange) {
      onChange(event, child);
    }
  };

  const handleItemClick =
    (child: React.ReactElement) => (event: React.MouseEvent) => {
      let newValue: any[];

      if (multiple) {
        newValue = Array.isArray(value) ? value.slice() : [];
        const itemIndex = value.indexOf(child.props.value);
        if (itemIndex === -1) {
          newValue.push(child.props.value);
        } else {
          newValue.splice(itemIndex, 1);
        }
      } else {
        newValue = child.props.value;
      }

      if (child.props.onClick) {
        child.props.onClick(event);
      }

      if (value !== newValue) {
        setValueState(newValue);

        if (onChange) {
          event.persist();
          // Preact support, target is read only property on a native event.
          Object.defineProperty(event, 'target', {
            writable: true,
            value: { value: newValue, name },
          });
          onChange(event as any, child);
        }
      }

      if (!multiple) {
        update(false, event);
      }
    };

  const handleKeyDown = (event: any) => {
    if (!readOnly) {
      const validKeys = [
        ' ',
        'ArrowUp',
        'ArrowDown',
        // The native select doesn't respond to enter on MacOS, but it's recommended by
        // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
        'Enter',
      ];

      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };

  const open =
    displayNode !== null && (isOpenControlled ? openProp : openState);

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    // if open event.stopImmediatePropagation
    if (!open && onBlur) {
      event.persist();
      // Preact support, target is read only property on a native event.
      Object.defineProperty(event, 'target', {
        writable: true,
        value: { value, name },
      });
      onBlur(event as any);
    }
  };

  delete other['aria-invalid'];

  let display;
  let displaySingle;
  const displayMultiple: any[] = [];
  let computeDisplay = false;
  let foundMatch = false;

  // No need to display any value if the field is empty.
  if (isFilled({ value }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }

  const items = childrenArray.map((child) => {
    if (!React.isValidElement(child)) {
      return null;
    }

    if (process.env.NODE_ENV !== 'production') {
      if (isFragment(child)) {
        // eslint-disable-next-line no-console
        console.error(
          [
            "Material-UI: The Select component doesn't accept a Fragment as a child.",
            'Consider providing an array instead.',
          ].join('\n'),
        );
      }
    }

    let selected;

    if (multiple) {
      if (!Array.isArray(value)) {
        // throw new MuiError(
        throw new Error(
          'Material-UI: The `value` prop must be an array ' +
            'when using the `Select` component with `multiple`.',
        );
      }

      selected = value.some((v) => areEqualValues(v, child.props.value));
      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);
      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }

    if (selected) {
      foundMatch = true;
    }

    return React.cloneElement(child, {
      'aria-selected': selected ? 'true' : 'false',
      onClick: handleItemClick(child),
      onKeyUp: (event: any) => {
        if (event.key === ' ') {
          // otherwise our MenuItems dispatches a click event
          // it's not behavior of the native <option> and causes
          // the select to close immediately since we open on space keydown
          event.preventDefault();
        }

        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: 'option',
      selected,
      value: undefined, // The value is most likely not a valid HTML attribute.
      'data-value': child.props.value, // Instead, we provide it as a data attribute.
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      if (!foundMatch && !multiple && value !== '') {
        const values = childrenArray.map((child: any) => child.props.value);
        // eslint-disable-next-line no-console
        console.warn(
          [
            `Material-UI: You have provided an out-of-range value \`${value}\` for the select ${
              name ? `(name="${name}") ` : ''
            }component.`,
            "Consider providing a value that matches one of the available options or ''.",
            `The available values are ${
              values
                .filter((x) => x != null)
                .map((x) => `\`${x}\``)
                .join(', ') || '""'
            }.`,
          ].join('\n'),
        );
      }
    }, [foundMatch, childrenArray, multiple, name, value]);
  }

  if (computeDisplay) {
    display = multiple ? displayMultiple.join(', ') : displaySingle;
  }

  // Avoid performing a layout computation in the render method.
  let menuMinWidth = menuMinWidthState;

  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = displayNode.clientWidth;
  }

  let tabIndex: number | undefined;
  if (typeof tabIndexProp !== 'undefined') {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? undefined : 0;
  }

  const buttonId =
    SelectDisplayProps.id ||
    (name ? `mui-component-select-${name}` : undefined);

  return (
    <>
      <div
        ref={handleDisplayRef}
        tabIndex={tabIndex}
        role="button"
        aria-disabled={disabled ? 'true' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="listbox"
        aria-label={ariaLabel}
        aria-labelledby={
          [labelId, buttonId].filter(Boolean).join(' ') || undefined
        }
        onKeyDown={handleKeyDown}
        onMouseDown={disabled || readOnly ? undefined : handleMouseDown}
        onBlur={handleBlur}
        onFocus={onFocus as any}
        {...SelectDisplayProps}
        className={clsx(
          classes.root, // TODO v5: merge root and select
          classes.select,
          classes.selectMenu,
          // classes[variant],
          classes.disabled && {
            [classes.disabled]: disabled,
          },
          className,
          SelectDisplayProps.className,
        )}
        // The id is required for proper a11y
        id={buttonId}
      >
        {isEmpty(display) ? (
          // eslint-disable-next-line react/no-danger
          <span dangerouslySetInnerHTML={{ __html: '&#8203;' }} />
        ) : (
          display
        )}
      </div>
      <input
        value={Array.isArray(value) ? value.join(',') : value}
        name={name}
        ref={inputRef as any}
        aria-hidden
        onChange={handleChange}
        tabIndex={-1}
        disabled={disabled}
        className={classes.nativeInput}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
        {...other}
      />
      <IconComponent
        disabled={disabled}
        className={clsx(
          classes.icon,
          // classes[`icon${capitalize(variant)}`],
          classes.iconOpen && {
            [classes.iconOpen]: open,
          },
          classes.disabled && {
            [classes.disabled]: disabled,
          },
        )}
      />
      <MenuComponent
        id={`menu-${name || ''}`}
        anchorEl={displayNode}
        open={open!}
        onClose={handleClose}
        {...MenuProps}
        MenuListProps={{
          'aria-labelledby': labelId,
          role: 'listbox',
          disableListWrap: true,
          ...MenuProps.MenuListProps,
        }}
        PaperProps={{
          ...MenuProps.PaperProps,
          style: {
            minWidth: menuMinWidth!,
            ...(MenuProps.PaperProps != null
              ? MenuProps.PaperProps.style
              : null),
          },
        }}
      >
        {items}
      </MenuComponent>
    </>
  );
});

SelectInput.defaultProps = {};

SelectInput.displayName = 'SelectInput';

export { SelectInput };
export type { SelectInputProps };
