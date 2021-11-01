import { addPropertyControls, ControlType } from 'framer';
import * as lib from '../src';

const RcIconButton: React.ComponentType = ({
  _children,
  symbol,
  radius,
  elevation,
  activeElevation,
  ...rest
}: any) => {
  return (
    <lib.RcThemeProvider>
      <lib.RcIconButton
        symbol={lib.iconList[symbol]}
        {...rest}
        elevation={elevation === 'undefined' ? undefined : elevation}
        activeElevation={
          activeElevation === 'undefined' ? undefined : activeElevation
        }
      />
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcIconButton, {
  symbol: {
    type: ControlType.Enum,
    title: 'symbol',
    defaultValue: 'Help',
    options: lib.iconOptions,
  },
  variant: {
    title: 'variant',
    type: ControlType.Enum,
    /** description: "variant, default with `round`", */
    defaultValue: 'round',
    options: ['outline', 'round', 'contained', 'plain', 'inverse'],
  },
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "color of icon", */
    defaultValue: 'neutral.f04',
    options: lib.colorOptions,
  },
  size: {
    title: 'size',
    type: ControlType.Enum,
    /** description: "button size, with default with `medium`", */
    defaultValue: 'medium',
    options: [
      'small',
      'medium',
      'large',
      'xsmall',
      'xlarge',
      'xxlarge',
      'xxxlarge',
    ],
  },
  radius: {
    title: 'radius',
    type: ControlType.Enum,
    /** description: "custom border radius for tag, default is `lg`", */
    defaultValue: 'undefined',
    options: ['undefined', ...lib.radiusOptions],
  },
  title: {
    title: 'title',
    type: ControlType.String,
    /** description: "title on list root", */
    defaultValue: undefined,
  },
  //   tabIndex: {
  //     title: "tabIndex",
  //     type: ControlType.Object,
  //     /** description: "", */
  //     defaultValue: undefined,
  //   },
  //   children: {
  //     title: "children",
  //     type: ControlType.Object,
  //     /** description: "The content of the component.", */
  //     defaultValue: undefined,
  //   },
  disabled: {
    title: 'disabled',
    type: ControlType.Boolean,
    /** description: "If `true`, the base button will be disabled.", */
    defaultValue: false,
  },
  elevation: {
    title: 'elevation',
    type: ControlType.Enum,
    /** description: "`box-shadow` with token
            0 ~ 24 for different elevation shadow", */
    defaultValue: 'undefined',
    options: lib.elevationOptions,
  },
  activeElevation: {
    title: 'activeElevation',
    type: ControlType.Enum,
    /** description: "`box-shadow` with token when button active
    0 ~ 24 for different elevation shadow", */
    defaultValue: 'undefined',
    options: lib.elevationOptions,
  },
  loading: {
    title: 'loading',
    type: ControlType.Boolean,
    /** description: "is that icon replace to loading", */
    defaultValue: false,
  },
  useRcTooltip: {
    title: 'useRcTooltip',
    type: ControlType.Boolean,
    /** description: "html native title or not, default `false`", */
    defaultValue: true,
  },
  shouldPersistBg: {
    title: 'shouldPersistBg',
    type: ControlType.Boolean,
    /** description: "persist background color", */
    defaultValue: false,
  },
  stretchIcon: {
    title: 'stretchIcon',
    type: ControlType.Boolean,
    /** description: "stretch icon to same size as container", */
    defaultValue: false,
  },
  useColorWhenDisabled: {
    title: 'useColorWhenDisabled',
    type: ControlType.Boolean,
    /** description: "still use color when disabled", */
    defaultValue: false,
  },
  centerRipple: {
    title: 'centerRipple',
    type: ControlType.Boolean,
    /** description: "If `true`, the ripples will be centered.
They won't start at the cursor interaction position.", */
    defaultValue: true,
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
    defaultValue: true,
  },
  focusRipple: {
    title: 'focusRipple',
    type: ControlType.Boolean,
    /** description: "If `true`, the base button will have a keyboard focus ripple.", */
    defaultValue: true,
  },
  //   TouchRippleProps: {
  //     title: "TouchRippleProps",
  //     type: ControlType.Object,
  //     /** description: "Props applied to the `TouchRipple` element.", */
  //     defaultValue: undefined,
  //   },
  //   CircularProgressProps: {
  //     title: "CircularProgressProps",
  //     type: ControlType.Object,
  //     /** description: "Props send to `RcCircularProgress` when loading is `true`", */
  //     defaultValue: undefined,
  //   },
  invisible: {
    title: 'invisible',
    type: ControlType.Boolean,
    /** description: "make iconButton unVisible, default with `false`", */
    defaultValue: false,
  },
  //   TooltipProps: {
  //     title: "TooltipProps",
  //     type: ControlType.Object,
  //     /** description: "props for pass into `RcTooltip` when useRcTooltip is `true`", */
  //     defaultValue: undefined,
  //   },
});

export default RcIconButton;
