import { css, radius, RcThemedStyled } from '../../../foundation';
import { RcPaper } from '../../Paper';
import { RcDrawerProps } from '../Drawer';
import { drawerRadius, RcDrawerClasses } from '../utils';

export const DrawerStyle: RcThemedStyled<RcDrawerProps, any> = (props) => {
  const { radius: radiusProp, inlinePaper, anchor = 'left' } = props;

  const currRadiusValue = (() => {
    if (!radiusProp) return null;

    const radiusValue = radius(radiusProp!)(props);

    if (radiusValue === '0px' || radiusValue === 0) return null;

    return drawerRadius[anchor]
      .map((x) => (x === 1 ? radiusValue : 0))
      .join(' ');
  })();

  return css`
    .${RcDrawerClasses.paper} {
      border-radius: ${currRadiusValue};

      ${inlinePaper &&
      css`
        background: transparent;
        box-shadow: none;
        align-items: center;
        justify-content: center;
        overflow: unset;

        ${RcPaper} {
          border-radius: ${currRadiusValue};
        }
      `}
    }
  `;
};
