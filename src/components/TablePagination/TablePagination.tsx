import MuiTableCell from '@material-ui/core/TableCell';
import MuiTablePagination from '@material-ui/core/TablePagination';
import clsx from 'clsx';
import React, { ComponentProps, ElementType, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  useThemeProps,
  styled,
} from '../../foundation';
import { RcSelect, RcSelectProps } from '../Forms/Select';
import { RcToolbar } from '../Toolbar';
import { RcTypography } from '../Typography';
import {
  RcTablePaginationActions,
  RcTablePaginationActionsProps,
  TablePaginationMenuItem,
  TablePaginationRoot,
  TablePaginationStyle,
} from './styles';
import {
  defaultLabelDisplayedRows,
  defaultLabelOfPage,
  OfPageInfo,
  RcTablePaginationClasses,
} from './utils';

type RcTablePaginationProps = {
  component?: ElementType;
  /**
   * type of that pagination, when set pageSelection,
   * that will can select to go page directly

  * @default displayedRows
   */
  type?: 'pageSelection' | 'displayedRows';
  /**
   * action components
   */
  ActionsComponent?: ElementType<RcTablePaginationActionsProps>;
  /**
   * action components
   */
  SelectProps?: Partial<RcSelectProps>;
  /** of page render string */
  labelOfPage?: (pageInfo: OfPageInfo) => string;
} & RcBaseProps<
  ComponentProps<typeof MuiTablePagination>,
  | 'ActionsComponent'
  | 'backIconButtonProps'
  | 'nextIconButtonProps'
  | 'SelectProps'
> &
  Pick<
    RcTablePaginationActionsProps,
    'backIconButtonProps' | 'nextIconButtonProps'
  >;

const _RcTablePagination = forwardRef<any, RcTablePaginationProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcTablePagination' });

    const {
      classes: classesProp,
      type = 'displayedRows',
      ActionsComponent = RcTablePaginationActions,
      className,
      colSpan: colSpanProp,
      component = MuiTableCell,
      count,
      labelDisplayedRows = defaultLabelDisplayedRows,
      labelOfPage = defaultLabelOfPage,
      labelRowsPerPage = 'Rows per page:',
      onPageChange,
      onRowsPerPageChange,
      rowsPerPageOptions = [10, 25, 50, 100],
      SelectProps = {},
      page,
      rowsPerPage,
      backIconButtonProps,
      nextIconButtonProps,
      // getItemAriaLabel = defaultGetAriaLabel,
      // showFirstButton = false,
      // showLastButton = false,
      ...rest
    } = props;

    const MenuItemComponent = SelectProps.native
      ? 'option'
      : TablePaginationMenuItem;

    const totalPage = Math.ceil(count / rowsPerPage);
    const isPageSelection = type === 'pageSelection';

    const classes = useMemo(
      () => combineClasses(RcTablePaginationClasses, classesProp),
      [classesProp],
    );

    // const selectId = useId(SelectProps.id);
    // const labelId = useId(SelectProps.labelId);

    let colSpan;
    if (component === MuiTableCell || component === 'td') {
      colSpan = colSpanProp || 1000; // col-span over everything
    }

    const getLabelDisplayedRowsTo = () => {
      if (count === -1) return (page + 1) * rowsPerPage;
      return rowsPerPage === -1
        ? count
        : Math.min(count, (page + 1) * rowsPerPage);
    };

    const menuItems = useMemo(() => {
      const menus: JSX.Element[] = [];

      if (!isPageSelection) return menus;

      for (let i = 0; i < totalPage; i++) {
        menus.push(
          <MenuItemComponent
            value={i}
            selected={i === page}
            key={i}
            className={classes!.menuItem}
            onClick={(e: any) => {
              onPageChange?.(e, i);
            }}
          >
            {i + 1}
          </MenuItemComponent>,
        );
      }
      return menus;
    }, [
      MenuItemComponent,
      classes,
      isPageSelection,
      onPageChange,
      page,
      totalPage,
    ]);

    return (
      <TablePaginationRoot
        colSpan={colSpan}
        ref={ref}
        as={component}
        className={clsx(classes.root, className)}
        {...rest}
      >
        <RcToolbar className={classes.toolbar}>
          <div className={classes.spacer} />
          {rowsPerPageOptions!.length > 1 && (
            <RcTypography
              color="inherit"
              variant="body1"
              className={classes!.caption}
              // id={labelId}
            >
              {labelRowsPerPage}
            </RcTypography>
          )}

          {rowsPerPageOptions.length > 1 && (
            <RcSelect
              className={classes!.selectRoot}
              InputProps={{ disableUnderline: true }}
              value={rowsPerPage}
              onChange={onRowsPerPageChange}
              {...SelectProps}
            >
              {rowsPerPageOptions!.map((rowsPerPageOption) => {
                const value = (rowsPerPageOption as any).value
                  ? (rowsPerPageOption as any).value
                  : rowsPerPageOption;

                const label = (rowsPerPageOption as any).label
                  ? (rowsPerPageOption as any).label
                  : rowsPerPageOption;

                return (
                  <MenuItemComponent
                    className={classes!.menuItem}
                    key={value}
                    value={value}
                  >
                    {label}
                  </MenuItemComponent>
                );
              })}
            </RcSelect>
          )}

          {isPageSelection ? (
            <>
              <RcSelect
                value={page}
                InputProps={{ disableUnderline: true }}
                renderValue={(p: number) => p + 1}
                virtualize
              >
                {menuItems}
              </RcSelect>
              <p className={classes.caption}>{labelOfPage({ totalPage })}</p>
            </>
          ) : (
            <p className={classes.caption}>
              {labelDisplayedRows({
                from: count === 0 ? 0 : page * rowsPerPage + 1,
                to: getLabelDisplayedRowsTo(),
                count: count === -1 ? -1 : count,
                page,
              })}
            </p>
          )}

          <ActionsComponent
            className={classes.actions}
            backIconButtonProps={backIconButtonProps}
            count={count}
            nextIconButtonProps={nextIconButtonProps}
            onPageChange={onPageChange!}
            page={page}
            rowsPerPage={rowsPerPage}
            // showFirstButton={showFirstButton}
            // showLastButton={showLastButton}
            // getItemAriaLabel={getItemAriaLabel}
          />
        </RcToolbar>
      </TablePaginationRoot>
    );
  },
);

const RcTablePagination = styled(_RcTablePagination)`
  ${TablePaginationStyle}
`;

RcTablePagination.displayName = 'RcTablePagination';

export { RcTablePagination, RcTablePaginationProps };
