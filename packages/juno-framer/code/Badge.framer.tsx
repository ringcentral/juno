import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcBadge: React.ComponentType = ({ _children, ...rest }: any) => {
  return (
    <lib.RcThemeProvider>
      <lib.RcBadge {...rest}>{_children}</lib.RcBadge>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcBadge, {
  variant: {
    title: 'variant',
    type: ControlType.Enum,
    /** description: "The variant to use.", */
    defaultValue: 'standard',
    options: ['dot', 'standard'],
  },
  badgeContent: {
    title: 'badgeContent',
    type: ControlType.Number,
    /** description: "The content rendered within the badge.", */
    defaultValue: 1,
  },
  max: {
    title: 'max',
    type: ControlType.Number,
    /** description: "Max count to show.", */
    defaultValue: 5,
  },
  overlap: {
    title: 'overlap',
    type: ControlType.Enum,
    /** description: "Wrapped shape the badge should overlap", */
    defaultValue: 'rectangle',
    options: ['circle', 'none', 'rectangle'],
  },
  anchorOrigin: {
    title: 'anchorOrigin',
    type: ControlType.Object,
    /** description: "The anchor of the badge.", */
    controls: {
      vertical: {
        title: 'vertical',
        type: ControlType.Enum,
        defaultValue: 'top',
        options: ['top', 'bottom'],
      },
      horizontal: {
        title: 'horizontal',
        type: ControlType.Enum,
        defaultValue: 'right',
        options: ['left', 'right'],
      },
    },
  },
  color: {
    title: 'color',
    type: ControlType.Enum,
    /** description: "tag color, default is `highlight.b03`", */
    defaultValue: 'highlight.b03',
    options: lib.colorOptions,
  },
  textColor: {
    title: 'textColor',
    type: ControlType.Enum,
    /** description: "text color, default is `neutral.f01`", */
    defaultValue: 'neutral.f01',
    options: lib.colorOptions,
  },
  borderColor: {
    title: 'borderColor',
    type: ControlType.Enum,
    /** description: "tag border color", */
    defaultValue: undefined,
    options: [undefined, ...lib.colorOptions],
  },
  _children: {
    title: 'children',
    type: ControlType.ComponentInstance,
    /** description: "The badge will be added relative to this node.", */
  },
  // component: {
  //   title: "component",
  //   type: ControlType.Object,
  //   /** description: "The component used for the root node. Either a string to use a HTML element or a component.", */
  //   defaultValue: undefined,
  // },
  invisible: {
    title: 'invisible',
    type: ControlType.Enum,
    /** description: "If `true`, the badge will be invisible.", */
    optionTitles: ['undefined', 'true', 'false'],
    options: [undefined, 1, 0],
  },
  showZero: {
    title: 'showZero',
    type: ControlType.Boolean,
    /** description: "Controls whether the badge is hidden when `badgeContent` is zero.", */
    defaultValue: false,
  },
  //   dotComponent: {
  //     title: "dotComponent",
  //     type: ControlType.Object,
  //     /** description: "Custom dot render Component in `dot` mode
  // if you don't want any dot, you can set `null`", */
  //     defaultValue: undefined,
  //   },
  //   dotProps: {
  //     title: "dotProps",
  //     type: ControlType.Object,
  //     /** description: "when mode is dot, that addition dotProps", */
  //     defaultValue: undefined,
  //   },
});

export default RcBadge;
