import { cloneElement, useState } from 'react';

import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcMenu: React.ComponentType = ({
  _children,
  anchorEl: anchorElProp,
  ...rest
}: any) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => setAnchorEl(event.currentTarget);

  const host =
    anchorElProp.length > 0 ? (
      cloneElement(anchorElProp[0].props.children, {
        onClick: handleClick,
      })
    ) : (
      <lib.RcButton onClick={handleClick}>
        add host element with anchorEl
      </lib.RcButton>
    );

  const handleClose = () => setAnchorEl(null);

  const children = _children.map((a: any) => {
    return cloneElement(a.props.children, { onClick: handleClose });
  });

  return (
    <lib.RcThemeProvider>
      {host}
      <lib.RcMenu
        {...rest}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {children.length > 0 ? (
          children
        ) : (
          <lib.RcMenuItem>
            <lib.RcListItemText primary="add children with MenuItem" />
          </lib.RcMenuItem>
        )}
      </lib.RcMenu>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcMenu, {
  anchorEl: {
    title: 'anchorEl',
    type: ControlType.ComponentInstance,
    /** description: "A HTML element, or a function that returns it.
                                                                                                                                                                                                                                  It's used to set the position of the menu.", */
  },
  variant: {
    title: 'variant',
    type: ControlType.Enum,
    /** description: "The variant to use. Use `menu` to prevent selected items from impacting the initial focus
                                                                                                                                                                                                                                                  and the vertical alignment relative to the anchor element.", */
    defaultValue: 'selectedMenu',
    options: ['menu', 'selectedMenu'],
  },
  anchorReference: {
    title: 'anchorReference',
    type: ControlType.Enum,
    /** description: "This determines which anchor prop to refer to to set
                                                                                                                                                                                                                                                                          the position of the popover.", */
    defaultValue: 'anchorEl',
    options: ['none', 'anchorEl', 'anchorPosition'],
  },
  anchorOrigin: {
    title: 'anchorOrigin',
    type: ControlType.Object,
    /** description: "This is the point on the anchor where the popover's
                                                                                                                                                                                                                                                                                                  `anchorEl` will attach to. This is not used when the
                                                                                                                                                                                                                                                                                                  anchorReference is 'anchorPosition'.

                                                                                                                                                                                                                                                                                                  Options:
                                                                                                                                                                                                                                                                                                  vertical: [top, center, bottom];
                                                                                                                                                                                                                                                                                                  horizontal: [left, center, right].", */
    controls: {
      vertical: {
        title: 'vertical',
        type: ControlType.Enum,
        defaultValue: 'bottom',
        options: ['top', 'bottom'],
      },
      horizontal: {
        title: 'horizontal',
        type: ControlType.Enum,
        defaultValue: 'left',
        options: ['left', 'right'],
      },
    },
  },
  _children: {
    title: 'children',
    type: ControlType.Array,
    control: {
      type: ControlType.ComponentInstance,
    },
    /** description: "Menu contents, normally `MenuItem`s.", */
  },
  //   transformOrigin: {
  //     title: "transformOrigin",
  //     type: ControlType.Object,
  //     /** description: "This is the point on the popover which
  // will attach to the anchor's origin.

  // Options:
  // vertical: [top, center, bottom, x(px)];
  // horizontal: [left, center, right, x(px)].", */
  //     defaultValue: undefined,
  //   },
  //   transitionDuration: {
  //     title: "transitionDuration",
  //     type: ControlType.Object,
  //     /** description: "The length of the transition in `ms`, or 'auto'", */
  //     defaultValue: undefined,
  //   },
  //   open: {
  //     title: "open",
  //     type: ControlType.Boolean,
  //     /** description: "If `true`, the menu is visible.", */
  //     defaultValue: false,
  //   },
  elevation: {
    title: 'elevation',
    type: ControlType.Enum,
    /** description: "The elevation of the popover.", */
    defaultValue: '8',
    options: lib.elevationOptions,
  },
  //   TransitionComponent: {
  //     title: "TransitionComponent",
  //     type: ControlType.Object,
  //     /** description: "The component used for the transition.
  // [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.", */
  //     defaultValue: undefined,
  //   },
  //   TransitionProps: {
  //     title: "TransitionProps",
  //     type: ControlType.Object,
  //     /** description: "Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.", */
  //     defaultValue: undefined,
  //   },
  autoFocus: {
    title: 'autoFocus',
    type: ControlType.Boolean,
    /** description: "If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              children are not focusable. If you set this prop to `false` focus will be placed
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              on the parent modal container. This has severe accessibility implications
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              and should only be considered if you manage focus otherwise.", */
    defaultValue: false,
  },
  disablePortal: {
    title: 'disablePortal',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  //   BackdropComponent: {
  //     title: "BackdropComponent",
  //     type: ControlType.Object,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   BackdropProps: {
  //     title: "BackdropProps",
  //     type: ControlType.Object,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   closeAfterTransition: {
  //     title: "closeAfterTransition",
  //     type: ControlType.Boolean,
  //     /** description: "", */
  //     defaultValue: false,
  //   },
  //   container: {
  //     title: "container",
  //     type: ControlType.Object,
  //     /** description: "A HTML element, component instance, or function that returns either.
  // The `container` will passed to the Modal component.

  // By default, it uses the body of the anchorEl's top-level document object,
  // so it's simply `document.body` most of the time.", */
  //     defaultValue: undefined,
  //   },
  disableAutoFocus: {
    title: 'disableAutoFocus',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  disableBackdropClick: {
    title: 'disableBackdropClick',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  disableEscapeKeyDown: {
    title: 'disableEscapeKeyDown',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  disableRestoreFocus: {
    title: 'disableRestoreFocus',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  disableScrollLock: {
    title: 'disableScrollLock',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  hideBackdrop: {
    title: 'hideBackdrop',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  keepMounted: {
    title: 'keepMounted',
    type: ControlType.Boolean,
    /** description: "", */
    defaultValue: false,
  },
  //   manager: {
  //     title: "manager",
  //     type: ControlType.Object,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   anchorPosition: {
  //     title: "anchorPosition",
  //     type: ControlType.Object,
  //     /** description: "This is the position that may be used
  // to set the position of the popover.
  // The coordinates are relative to
  // the application's client area.", */
  //     defaultValue: undefined,
  //   },
  //   marginThreshold: {
  //     title: "marginThreshold",
  //     type: ControlType.Number,
  //     /** description: "Specifies how close to the edge of the window the popover can appear.", */
  //     defaultValue: undefined,
  //   },
  //   PaperProps: {
  //     title: "PaperProps",
  //     type: ControlType.Object,
  //     /** description: "Props applied to the [`Paper`](/api/paper/) element.", */
  //     defaultValue: undefined,
  //   },
  disableAutoFocusItem: {
    title: 'disableAutoFocusItem',
    type: ControlType.Boolean,
    /** description: "When opening the menu will not focus the active item but the `[role="menu"]`
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              unless `autoFocus` is also set to `false`. Not using the default means not
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              following WAI-ARIA authoring practices. Please be considerate about possible
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              accessibility implications.", */
    defaultValue: false,
  },
  //   MenuListProps: {
  //     title: "MenuListProps",
  //     type: ControlType.Object,
  //     /** description: "Props applied to the [`MenuList`](/api/menu-list/) element.", */
  //     defaultValue: undefined,
  //   },
  //   PopoverClasses: {
  //     title: "PopoverClasses",
  //     type: ControlType.Object,
  //     /** description: "`classes` prop applied to the [`Popover`](/api/popover/) element.", */
  //     defaultValue: undefined,
  //   },
  autoClose: {
    title: 'autoClose',
    type: ControlType.Boolean,
    /** description: "auto close menu when menu item clicked", */
    defaultValue: false,
  },
});

export default RcMenu;
