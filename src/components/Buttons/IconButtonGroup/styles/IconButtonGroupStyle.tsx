import { css, radius, RcThemedStyled, spacing } from '../../../../foundation';
import { RcIconButtonGroupProps } from '../IconButtonGroup';

export const IconButtonGroupStyle: RcThemedStyled<RcIconButtonGroupProps, any> =
  (props) => {
    const { direction, gap, space: spaceProp, radius: radiusProp } = props;

    const gapSpace = gap && spacing(gap!);

    const paddingValue =
      spaceProp &&
      (spaceProp instanceof Array ? spacing(...spaceProp) : spacing(spaceProp));

    const isVertical = direction === 'vertical';

    return css`
      border-radius: ${radiusProp && radius(radiusProp)};
      display: inline-flex;
      flex-direction: ${isVertical ? 'column' : 'row'};
      white-space: nowrap;
      flex-wrap: nowrap;
      flex-shrink: 0;
      align-items: center;
      padding: ${paddingValue};

      > * + * {
        ${isVertical
          ? css`
              margin-top: ${gapSpace};
            `
          : css`
              margin-left: ${gapSpace};
            `};
      }
    `;
  };
