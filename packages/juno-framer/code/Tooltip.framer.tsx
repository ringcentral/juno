import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcTooltip: React.ComponentType = ({
  _children,
  children,
  ...rest
}: any) => {
  return (
    <lib.RcThemeProvider>
      {_children.length > 0 ? (
        // because framer issue, use ignorePointer to wrap that
        <lib.RcTooltip
          // open={current === RenderTarget.canvas ? true : open}
          {...rest}
          ignorePointer
        >
          {_children[0].props.children}
        </lib.RcTooltip>
      ) : (
        <div>choice children</div>
      )}
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcTooltip, {
  _children: {
    type: ControlType.ComponentInstance,
  },
  title: {
    title: 'title',
    type: ControlType.String,
    /** description: "Tooltip title. Zero-length titles string are never displayed.", */
    defaultValue: 'title',
  },
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "color of tooltip", */
    defaultValue: 'neutral.b04',
    options: lib.colorOptions,
  },
  size: {
    title: 'size',
    type: ControlType.Enum,
    /** description: "size of tooltip", */
    defaultValue: 'large',
    options: ['medium', 'large', 'xlarge'],
  },
  textColor: {
    type: ControlType.Enum,
    title: 'textColor',
    defaultValue: 'neutral.f01',
    options: lib.colorOptions,
  },
  //   open: {
  //     title: "open",
  //     type: ControlType.Boolean,
  //     /** description: "If `true`, the tooltip is shown.", */
  //     defaultValue: false,
  //   },
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
  placement: {
    title: 'placement',
    type: ControlType.Enum,
    /** description: "Tooltip placement.", */
    defaultValue: 'bottom',
    options: [
      'bottom',
      'left',
      'right',
      'top',
      'bottom-end',
      'bottom-start',
      'left-end',
      'left-start',
      'right-end',
      'right-start',
      'top-end',
      'top-start',
    ],
  },
  disableFocusListener: {
    title: 'disableFocusListener',
    type: ControlType.Boolean,
    /** description: "Do not respond to focus events.", */
    defaultValue: false,
  },
  disableHoverListener: {
    title: 'disableHoverListener',
    type: ControlType.Boolean,
    /** description: "Do not respond to hover events.", */
    defaultValue: false,
  },
  disableTouchListener: {
    title: 'disableTouchListener',
    type: ControlType.Boolean,
    /** description: "Do not respond to long press touch events.", */
    defaultValue: false,
  },
  enterDelay: {
    title: 'enterDelay',
    type: ControlType.Number,
    /** description: "The number of milliseconds to wait before showing the tooltip.
This prop won't impact the enter touch delay (`enterTouchDelay`).", */
    defaultValue: undefined,
  },
  enterNextDelay: {
    title: 'enterNextDelay',
    type: ControlType.Number,
    /** description: "The number of milliseconds to wait before showing the tooltip when one was already recently opened.", */
    defaultValue: undefined,
  },
  enterTouchDelay: {
    title: 'enterTouchDelay',
    type: ControlType.Number,
    /** description: "The number of milliseconds a user must touch the element before showing the tooltip.", */
    defaultValue: undefined,
  },
  interactive: {
    title: 'interactive',
    type: ControlType.Boolean,
    /** description: "Makes a tooltip interactive, i.e. will not close when the user
hovers over the tooltip before the `leaveDelay` is expired.", */
    defaultValue: false,
  },
  leaveDelay: {
    title: 'leaveDelay',
    type: ControlType.Number,
    /** description: "The number of milliseconds to wait before hiding the tooltip.
This prop won't impact the leave touch delay (`leaveTouchDelay`).", */
    defaultValue: undefined,
  },
  leaveTouchDelay: {
    title: 'leaveTouchDelay',
    type: ControlType.Number,
    /** description: "The number of milliseconds after the user stops touching an element before hiding the tooltip.", */
    defaultValue: undefined,
  },
  //   PopperComponent: {
  //     title: "PopperComponent",
  //     type: ControlType.Object,
  //     /** description: "The component used for the popper.", */
  //     defaultValue: undefined,
  //   },
  //   PopperProps: {
  //     title: "PopperProps",
  //     type: ControlType.Object,
  //     /** description: "Props applied to the [`Popper`](/api/popper/) element.", */
  //     defaultValue: undefined,
  //   },
  tooltipForceHide: {
    title: 'tooltipForceHide',
    type: ControlType.Boolean,
    /** description: "focus hide the tooltip display", */
    defaultValue: false,
  },
  //   ignorePointer: {
  //     title: "ignorePointer",
  //     type: ControlType.Boolean,
  //     /** description: "Ignore wrap children pointer-event

  // ## that will add a span wrap children component, please make sure your style not effect", */
  //     defaultValue: false,
  //   },
  //   maskProps: {
  //     title: "maskProps",
  //     type: ControlType.Object,
  //     /** description: "addition props for hidden mask in `ignorePointer` mode", */
  //     defaultValue: undefined,
  //   },
});

export default RcTooltip;
