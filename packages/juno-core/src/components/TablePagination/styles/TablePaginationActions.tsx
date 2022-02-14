import React, { memo } from 'react';

import { TablePaginationActionsProps } from '@material-ui/core/TablePagination/TablePaginationActions';

import {
  combineProps,
  RcBaseProps,
  spacing,
  styled,
} from '../../../foundation';
import { ArrowLeft2, ArrowRight } from '@ringcentral/juno-icon';

import { RcIconButtonProps } from '../../Buttons/IconButton';
import { RcIconButton } from '../../Buttons/IconButton/IconButton';
import { WithTooltipProps } from '../../Tooltip';

const TablePaginationActionsWrapper = styled.div`
  display: flex;
  margin-left: ${spacing(5)};
`;

type IconButtonProps = RcIconButtonProps & WithTooltipProps;

export type RcTablePaginationActionsProps = {
  /** back icon button props */
  backIconButtonProps?: Partial<IconButtonProps>;
  /** next icon button props */
  nextIconButtonProps?: Partial<IconButtonProps>;
} & RcBaseProps<
  TablePaginationActionsProps,
  'backIconButtonProps' | 'nextIconButtonProps' | 'onChangePage'
>;

export const RcTablePaginationActions = memo<RcTablePaginationActionsProps>(
  (props) => {
    const {
      onPageChange,
      page,
      count,
      rowsPerPage,
      className,
      backIconButtonProps,
      nextIconButtonProps,
    } = props;

    const handleBackButtonClick = (event: any) => {
      onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: any) => {
      onPageChange(event, page + 1);
    };

    const prevDisabled = page === 0;

    const nextDisabled =
      count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false;

    return (
      <TablePaginationActionsWrapper className={className}>
        <RcIconButton
          symbol={ArrowLeft2}
          onClick={handleBackButtonClick}
          size="medium"
          disabled={prevDisabled}
          {...combineProps(
            { TooltipProps: { tooltipForceHide: prevDisabled } },
            backIconButtonProps,
          )}
        />
        <RcIconButton
          symbol={ArrowRight}
          onClick={handleNextButtonClick}
          size="medium"
          disabled={nextDisabled}
          {...combineProps(
            { TooltipProps: { tooltipForceHide: nextDisabled } },
            nextIconButtonProps,
          )}
        />
      </TablePaginationActionsWrapper>
    );
  },
);
