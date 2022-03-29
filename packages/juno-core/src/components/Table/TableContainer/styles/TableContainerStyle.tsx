import { css, palette2, px, RcThemedStyled } from '../../../../foundation';
import { RcTableBody } from '../../TableBody';
import { RcTableCell } from '../../TableCell';
import { RcTableRow } from '../../TableRow';
import { RcTableContainerProps } from '../TableContainer';

export const TableContainerStyle: RcThemedStyled<RcTableContainerProps, any> = (
  props,
) => {
  const { bordered, square } = props;

  return css`
    ${bordered &&
    css`
      border-radius: ${!square && px(4)};
      border: 1px solid ${palette2('neutral', 'l02')};

      ${RcTableBody} ${RcTableRow}:last-child ${RcTableCell} {
        border: none;
      }
    `}
  `;
};
