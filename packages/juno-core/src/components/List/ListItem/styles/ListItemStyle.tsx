import {
  css,
  focusVisible,
  getParsePaletteColor,
  nonTouchHoverMedia,
  palette2,
  px,
  RcThemedStyled,
  setAlpha,
  setOpacity,
  spacing,
  typography,
  focusRing,
  RcBaseFocusVariant,
} from '../../../../foundation';
import { RcFormControlLabel } from '../../../Forms/FormControlLabel';
import { RcSwitch } from '../../../Forms/Switch';
import { RcListItemProps } from '../ListItem';
import {
  colorMap,
  RcListItemClasses,
  RcListItemRippleClasses,
  RcListItemTopAndBottomPaddings,
} from '../utils';

export const ListItemFormControlStyle = css`
  ${RcFormControlLabel} {
    margin-right: 0;

    > ${RcSwitch} {
      /** The DOM structure of Switch is special,
        should remove this after fix Switch as common control */
      margin-left: ${spacing(1)};
      margin-right: ${spacing(1)};
    }
  }
`;

export const sharedListItemStyle: RcThemedStyled<
  Pick<RcListItemProps, 'highlighted' | 'color' | 'canHover' | 'baseColor'> & {
    mainClasses: typeof RcListItemClasses;
    rippleClasses: typeof RcListItemRippleClasses;
    focusVariant: RcBaseFocusVariant<'highlight' | 'focusRing'>;
  },
  any
> = ({
  highlighted,
  color,
  canHover,
  baseColor: baseColorProp = 'black',
  mainClasses,
  rippleClasses,
  focusVariant,
}) => {
  const baseColor = getParsePaletteColor(color ?? colorMap[baseColorProp!]);
  const useFocusRing = focusVariant === 'focusRing';

  return css`
    ${typography('body1')};
    color: ${palette2('neutral', 'f06')};

    ${highlighted &&
    css`
      background-color: ${setAlpha(baseColor, 0.05)};
    `};

    ${
      // that for menuItem, because in current version of menuItem that not support focused classes
      // TODO: that can be remove after upgrade to V5
      focusVisible
    },
    &.${mainClasses.focusVisible} {
      background-color: ${() => {
        // to override mui focus visible style when item is highlighted
        if (useFocusRing && highlighted) {
          return setAlpha(baseColor, 0.05);
        }
        if (!useFocusRing) return setOpacity(baseColor, '16');
        return 'unset';
      }};
      ${useFocusRing && focusRing('inset')}
    }

    ${nonTouchHoverMedia} {
      &:hover {
        background-color: ${canHover ? setOpacity(baseColor, '08') : 'unset'};
      }
    }

    &.${mainClasses.selected} {
      &,
      &:hover {
        background-color: ${setOpacity(baseColor, '12')};
      }
    }

    .${rippleClasses.rippleVisible} {
      color: ${baseColor};
    }

    ${ListItemFormControlStyle};
  `;
};

export const ListItemStyle: RcThemedStyled<RcListItemProps, any> = (props) => {
  const { maxWidth, isInline, size, onClick, focusVariant } = props;
  const defaultPadding = RcListItemTopAndBottomPaddings[size!];

  return css`
    width: ${maxWidth ? px(maxWidth) : '100%'};
    padding-top: ${defaultPadding};
    padding-bottom: ${defaultPadding};
    display: ${isInline ? 'inline-flex' : 'flex'};
    cursor: ${onClick ? 'pointer' : 'default'};

    ${sharedListItemStyle({
      ...props,
      mainClasses: RcListItemClasses,
      rippleClasses: RcListItemRippleClasses,
      focusVariant: focusVariant!,
    })};

    &.${RcListItemClasses.gutters} {
      padding-left: ${spacing(4)};
      padding-right: ${spacing(4)};
    }

    &.${RcListItemClasses.dense} {
      padding-top: ${spacing(1)};
      padding-bottom: ${spacing(1)};
    }
  `;
};
