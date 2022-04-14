import {
  css,
  fakeBorder,
  focusVisible,
  palette2,
  px,
  RcThemedStyled,
  spacing,
  typography,
} from '../../../../foundation';
import { RcTableSize } from '../../types';
import { RcTableCellProps } from '../TableCell';
import { RcTableCellClasses } from '../utils';

const SizeMap: Record<Exclude<RcTableSize, 'auto'>, number> = {
  xlarge: 64,
  large: 56,
  medium: 48,
  small: 40,
};

const HeadTypography = typography('caption2');

export const TableCellStyle: RcThemedStyled<RcTableCellProps, any> = (prop) => {
  const { size, sortDirection } = prop;

  return css`
    box-sizing: border-box;
    padding: ${spacing(0, 2)};
    min-width: 96px;

    &.${RcTableCellClasses.paddingCheckbox} {
      min-width: unset;
      padding: ${spacing(0, 0, 0, 2)};
    }

    &.${RcTableCellClasses.paddingNone} {
      padding: unset;
    }

    &.${RcTableCellClasses.head} {
      ${HeadTypography}
      height: 40px;
      border-bottom: 1px solid ${palette2('neutral', 'l02')};
      color: ${palette2('neutral', 'f05')};
      background-color: ${palette2('neutral', 'b02')};

      padding: ${Boolean(sortDirection) && 'unset'};

      .${RcTableCellClasses.sortIcon} {
        opacity: 0;
        padding: ${spacing(0, 2)};
      }

      .${RcTableCellClasses.activeSort} {
        color: ${palette2('interactive', 'f01')};

        .${RcTableCellClasses.sortIcon} {
          opacity: 1;
          color: ${palette2('neutral', 'f04')};
        }
      }

      .${RcTableCellClasses.sortButton} {
        ${HeadTypography /** cover user agent stylesheet */}
        display: inline-flex;
        justify-content: flex-start;
        flex-direction: inherit;
        align-items: center;

        height: 100%;
        width: 100%;
        padding: ${spacing(0, 2)};

        ${RcTableCellClasses.sortIcon} {
          color: ${palette2('neutral', 'f04')};
        }

        &:hover {
          background-color: ${palette2('neutral', 'b03')};

          .${RcTableCellClasses.sortIcon} {
            opacity: 1;
          }
        }

        ${focusVisible} {
          ${fakeBorder({ color: palette2('interactive', 'f01') })}
          background-color: ${palette2('neutral', 'b03')};
        }
      }
    }

    &.${RcTableCellClasses.body} {
      ${typography('body1')}
      color: ${palette2('neutral', 'f06')};

      padding: ${size === 'auto' && spacing(3, 2)};
      height: ${size !== 'auto' && px(SizeMap[size!])};
    }
  `;
};
