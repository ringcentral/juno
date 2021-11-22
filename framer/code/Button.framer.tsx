import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcButton: React.ComponentType = ({
  _children,
  startIcon,
  endIcon,
  ...rest
}: any) => {
  const StartIcon =
    startIcon === '' ? undefined : (
      <lib.RcIcon symbol={lib.iconList[startIcon]} />
    );
  const EndIcon =
    endIcon === '' ? undefined : <lib.RcIcon symbol={lib.iconList[endIcon]} />;

  return (
    <lib.RcThemeProvider>
      <lib.RcButton {...rest} startIcon={StartIcon} endIcon={EndIcon}>
        {_children}
      </lib.RcButton>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcButton, {
  _children: {
    title: '_children',
    type: ControlType.String,
    /** description: "The content of the button.
The content of the component.", */
    defaultValue: 'Button',
  },
  variant: {
    title: 'variant',
    type: ControlType.Enum,
    /** description: "variant of button, default is `contained`", */
    defaultValue: 'contained',
    options: ['text', 'outlined', 'contained', 'plain'],
  },
  title: {
    title: 'title',
    type: ControlType.String,
    /** description: "title on list root", */
    defaultValue: undefined,
  },
  radius: {
    title: 'radius',
    type: ControlType.Enum,
    /** description: "border radius for button", */
    defaultValue: 'lg',
    options: lib.radiusOptions,
  },
  //   tabIndex: {
  //     title: "tabIndex",
  //     type: ControlType.Object,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "color of button", */
    defaultValue: 'primary',
    options: [
      'primary',
      'secondary',
      'negative',
      'positive',
      'action',
      'neutral',
      ...lib.colorOptions,
    ],
  },
  size: {
    title: 'size',
    type: ControlType.Enum,
    /** description: "size of button, default is `large`", */
    defaultValue: 'large',
    options: ['small', 'medium', 'large', 'xsmall', 'xlarge'],
  },
  disabled: {
    title: 'disabled',
    type: ControlType.Boolean,
    /** description: "If `true`, the button will be disabled.
If `true`, the base button will be disabled.", */
    defaultValue: false,
  },
  //   component: {
  //     title: "component",
  //     type: ControlType.Object,
  //     /** description: "component for render root button, default is `button`", */
  //     defaultValue: undefined,
  //   },
  href: {
    title: 'href',
    type: ControlType.String,
    /** description: "The URL to link to when the button is clicked.
If defined, an `a` element will be used as the root node.", */
    defaultValue: undefined,
  },
  centerRipple: {
    title: 'centerRipple',
    type: ControlType.Boolean,
    /** description: "If `true`, the ripples will be centered.
They won't start at the cursor interaction position.", */
    defaultValue: false,
  },
  disableRipple: {
    title: 'disableRipple',
    type: ControlType.Boolean,
    /** description: "If `true`, the ripple effect will be disabled.

⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
to highlight the element by applying separate styles with the `focusVisibleClassName`.", */
    defaultValue: false,
  },
  disableTouchRipple: {
    title: 'disableTouchRipple',
    type: ControlType.Boolean,
    /** description: "If `true`, the touch ripple effect will be disabled.", */
    defaultValue: false,
  },
  //   TouchRippleProps: {
  //     title: "TouchRippleProps",
  //     type: ControlType.Object,
  //     /** description: "Props applied to the `TouchRipple` element.", */
  //     defaultValue: undefined,
  //   },
  loading: {
    title: 'loading',
    type: ControlType.Boolean,
    /** description: "is button loading, when `loading` that `disabled` will auto become `true`", */
    defaultValue: false,
  },
  //   CircularProgressProps: {
  //     title: "CircularProgressProps",
  //     type: ControlType.Object,
  //     /** description: "Props send to `RcCircularProgress` when loading is `true`", */
  //     defaultValue: undefined,
  //   },
  disableElevation: {
    title: 'disableElevation',
    type: ControlType.Boolean,
    /** description: "If `true`, no elevation is used.", */
    defaultValue: false,
  },
  disableFocusRipple: {
    title: 'disableFocusRipple',
    type: ControlType.Boolean,
    /** description: "If `true`, the  keyboard focus ripple will be disabled.", */
    defaultValue: false,
  },
  fullWidth: {
    title: 'fullWidth',
    type: ControlType.Boolean,
    /** description: "If `true`, the button will take up the full width of its container.", */
    defaultValue: false,
  },
  startIcon: {
    title: 'startIcon',
    type: ControlType.Enum,
    /** description: "Element placed before the children.", */
    defaultValue: undefined,
    options: [undefined, ...lib.iconOptions],
  },
  endIcon: {
    title: 'endIcon',
    type: ControlType.Enum,
    /** description: "Element placed after the children.", */
    defaultValue: undefined,
    options: [undefined, ...lib.iconOptions],
  },
  disabledVariant: {
    title: 'disabledVariant',
    type: ControlType.Enum,
    /** description: "disabled variant

- `normal`: default disabled button style
- `mask`: with mask cover on button, and do not change the button base color", */
    defaultValue: 'normal',
    options: ['mask', 'normal'],
  },
  loadingMode: {
    title: 'loadingMode',
    type: ControlType.Enum,
    /** description: "loading mode with button, default is `replace`", */
    defaultValue: 'replace',
    options: ['prefix', 'replace', 'suffix'],
  },
  keepElevation: {
    title: 'keepElevation',
    type: ControlType.Boolean,
    /** description: "should keep elevation when type is `container`", */
    defaultValue: false,
  },
  useRcTooltip: {
    title: 'useRcTooltip',
    type: ControlType.Boolean,
    /** description: "html native title or not, default `false`", */
    defaultValue: false,
  },
  //   TooltipProps: {
  //     title: "TooltipProps",
  //     type: ControlType.Object,
  //     /** description: "props for pass into `RcTooltip` when useRcTooltip is `true`", */
  //     defaultValue: undefined,
  //   },
  onClick: {
    type: ControlType.EventHandler,
  },
});

export default RcButton;
