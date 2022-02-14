import { addPropertyControls, ControlType } from 'framer';

import * as lib from '../src';

const RcAvatar: React.ComponentType = ({
  _children,
  hasPresence,
  startIcon,
  endIcon,
  iconSymbol,
  presenceProps,
  ...rest
}: any) => {
  return (
    <lib.RcThemeProvider>
      <lib.RcAvatar
        {...rest}
        iconSymbol={lib.iconList[iconSymbol]}
        presenceProps={hasPresence ? presenceProps : undefined}
      >
        {_children}
      </lib.RcAvatar>
    </lib.RcThemeProvider>
  );
};

addPropertyControls(RcAvatar as any, {
  src: {
    title: 'src',
    type: ControlType.Image,
    /** description: "src for avatar image", */
  },
  // imgProps: {
  //   title: "imgProps",
  //   type: ControlType.Object,
  //   /** description: "attrs on img element", */
  //   defaultValue: undefined,
  // },
  _children: {
    title: 'children',
    type: ControlType.String,
    defaultValue: 'T',
  },
  size: {
    title: 'size',
    type: ControlType.Enum,
    /** description: "avatar size, also presence size if not custom presence", */
    defaultValue: undefined,
    options: ['small', 'medium', 'large', 'xxsmall', 'xsmall', 'xlarge'],
  },
  color: {
    type: ControlType.Enum,
    title: 'color',
    defaultValue: 'avatar.global',
    options: [undefined, ...lib.colorOptions],
  },
  clickable: {
    title: 'clickable',
    type: ControlType.Boolean,
    /** description: "is that avatar can be click, default is false", */
    defaultValue: false,
  },
  mask: {
    title: 'mask',
    type: ControlType.Boolean,
    /** description: "with mack in the bottom of avatar,
when pass boolean, that will use default `<RcIcon symbol={Edit} />` to render mask,
also can provide `jsx` to custom below render", */
    defaultValue: false,
  },
  hasPresence: {
    title: 'presence',
    type: ControlType.Boolean,
    enabledTitle: 'Show',
    disabledTitle: 'Hide',
    defaultValue: true,
  },
  // presence: {
  //     title: "presence",
  //     type: ControlType.Object,
  //     /** description: "support custom presence", */
  //     defaultValue: undefined,
  // },
  presenceOrigin: {
    title: 'presenceOrigin',
    type: ControlType.Object,
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
        defaultValue: 'right',
        options: ['left', 'right'],
      },
    },
    hidden(props) {
      return !props.hasPresence;
    },
  },
  presenceProps: {
    title: 'presenceProps',
    type: ControlType.Object,
    controls: {
      type: {
        title: 'type',
        type: ControlType.Enum,
        defaultValue: 'notReady',
        options: [
          'notReady',
          'unavailable',
          'available',
          'onCall',
          'DND',
          'inMeeting',
          'busy',
          'offline',
          'attended',
          'unAttended',
        ],
      },
    },
    hidden(props) {
      return !props.hasPresence;
    },
  },
  iconSymbol: {
    title: 'iconSymbol',
    type: ControlType.Enum,
    defaultValue: undefined,
    /** description: "icon for `RcIcon` render", */
    options: [undefined, ...lib.iconOptions],
  },
  iconSize: {
    title: 'iconSize',
    type: ControlType.Enum,
    /** description: "can custom the icon size, half mean that will be half size of avatar", */
    defaultValue: undefined,
    options: [
      'small',
      'medium',
      'large',
      'xxsmall',
      'xsmall',
      'xlarge',
      'half',
    ],
  },
  shouldRenderPresenceHovered: {
    title: 'shouldRenderPresenceHovered',
    type: ControlType.Boolean,
    /** description: "only show presence when hovered or active", */
    defaultValue: false,
  },
  // TooltipProps: {
  //   title: "TooltipProps",
  //   type: ControlType.Object,
  //   /** description: "props for pass into `RcTooltip` when useRcTooltip is `true`", */
  //   defaultValue: undefined,
  // },
  title: {
    title: 'title',
    type: ControlType.String,
    /** description: "title on list root", */
    defaultValue: undefined,
  },
  useRcTooltip: {
    title: 'useRcTooltip',
    type: ControlType.Boolean,
    /** description: "html native title or not, default `false`", */
    defaultValue: false,
  },
  onClick: {
    type: ControlType.EventHandler,
  },
});

export default RcAvatar;
