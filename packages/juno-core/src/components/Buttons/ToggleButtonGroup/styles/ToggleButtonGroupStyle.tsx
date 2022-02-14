import { css, palette2, RcThemedStyled, spacing } from '../../../../foundation';
import { RcIcon } from '../../../Icon';
import { RcToggleButtonSpace } from '../../ToggleButton/utils';
import { RcToggleButtonGroupProps } from '../ToggleButtonGroup';
import { RcToggleButtonGroupClasses } from '../utils';
import { boxStyle } from './boxStyle';
import { standardStyle } from './standardStyle';

const dividerColor = palette2('neutral', 'l02');

export const ToggleButtonGroupStyle: RcThemedStyled<
  RcToggleButtonGroupProps,
  any
> = (props) => {
  const { variant, size, orientation } = props;

  const isHorizontal = orientation !== 'vertical';

  const { area, inner } = RcToggleButtonSpace[size!];
  const boxInnerPadding = spacing(area + inner + 0.25);

  return css`
    .${RcToggleButtonGroupClasses.groupedHorizontal}
      + .${RcToggleButtonGroupClasses.groupedHorizontal},
      .${RcToggleButtonGroupClasses.groupedVertical}
      + .${RcToggleButtonGroupClasses.groupedVertical} {
      ${RcIcon} {
        &:before {
          content: '';
          position: absolute;
          pointer-events: none;
          background: ${dividerColor};
          top: 0;
          left: 0;

          ${isHorizontal
            ? css`
                height: 100%;
                width: 1px;
                transform: translateX(-${boxInnerPadding});
              `
            : css`
                height: 1px;
                width: 100%;
                transform: translateY(-${boxInnerPadding});
              `};
        }
      }
    }

    ${variant === 'standard' && standardStyle};
    ${variant === 'box' && boxStyle};
  `;
};
