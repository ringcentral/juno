import {
  css,
  getParsePaletteColor,
  palette2,
  RcThemedStyled,
  spacing,
  typography,
} from '../../../foundation';
import { RcDividerProps } from '../Divider';

const full = '100%';

export const DividerStyle: RcThemedStyled<RcDividerProps, any> = ({
  vertical,
  size,
  color,
  title,
  titleBgColor,
}) => {
  const volume = `${size === 'bold' ? 2 : 1}px`;

  return css`
    position: relative;
    margin: 0;
    border: 0;
    flex-shrink: 0;
    overflow: initial;

    width: ${vertical ? volume : full};
    height: ${vertical ? full : volume};
    background-color: ${getParsePaletteColor(color, null, false)};

    ${!(vertical || !title) &&
    css`
      &::after {
        content: '${title}';
        ${typography('caption1')};
        color: ${palette2('neutral', 'f06')};
        position: absolute;
        left: 50%;
        top: 50%;
        padding: ${spacing(0, 4)};
        transform: translate(-50%, -50%);
        background-color: ${getParsePaletteColor(titleBgColor)};
      }
    `};
  `;
};
