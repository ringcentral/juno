import {
  css,
  getParsePaletteColor,
  nonTouchHoverMedia,
  palette2,
  px,
  RcThemedStyled,
  setAlpha,
  setOpacity,
  spacing,
  typography,
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

export const ListItemStyle: RcThemedStyled<RcListItemProps, any> = ({
  maxWidth,
  isInline,
  size,
  onClick,
  color,
  canHover,
  baseColor: baseColorProp = 'black',
  highlighted,
}) => {
  const baseColor = getParsePaletteColor(color ?? colorMap[baseColorProp!]);

  const defaultPadding = RcListItemTopAndBottomPaddings[size!];

  return css`
    ${typography('body1')};
    width: ${maxWidth ? px(maxWidth) : '100%'};
    padding-top: ${defaultPadding};
    padding-bottom: ${defaultPadding};
    display: ${isInline ? 'inline-flex' : 'flex'};
    color: ${palette2('neutral', 'f06')};
    cursor: ${onClick ? 'pointer' : 'default'};

    ${highlighted &&
    css`
      background-color: ${setAlpha(baseColor, 0.05)};
    `};

    &.${RcListItemClasses.focusVisible} {
      background-color: ${setOpacity(baseColor, '16')};
    }

    ${nonTouchHoverMedia} {
      &:hover {
        background-color: ${canHover ? setOpacity(baseColor, '08') : 'unset'};
      }
    }

    &.${RcListItemClasses.selected} {
      &,
      &:hover {
        background-color: ${setOpacity(baseColor, '12')};
      }
    }

    .${RcListItemRippleClasses.rippleVisible} {
      color: ${baseColor};
    }

    &.${RcListItemClasses.gutters} {
      padding-left: ${spacing(4)};
      padding-right: ${spacing(4)};
    }

    &.${RcListItemClasses.dense} {
      padding-top: ${spacing(1)};
      padding-bottom: ${spacing(1)};
    }

    ${ListItemFormControlStyle};
  `;
};
