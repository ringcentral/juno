import {
  css,
  getParsePaletteColor,
  RcThemedStyled,
} from '../../../../foundation';
import { RcCircularProgressProps } from '../CircularProgress';

export const CircularProgressStyle: RcThemedStyled<
  RcCircularProgressProps,
  any
> = (props) => {
  const { color } = props;
  const currColor = getParsePaletteColor(color);

  return css`
    color: ${currColor};
  `;
};
