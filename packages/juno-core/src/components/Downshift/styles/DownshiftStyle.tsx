import { css, px, RcThemedStyled, spacing, styled } from '../../../foundation';
import { RcIconButton } from '../../Buttons/IconButton';
import { RcChip } from '../../Chip';
import { RcChipClasses } from '../../Chip/utils';
import { RcDownshiftProps } from '../Downshift';
import { RcDownshiftInputClasses } from '../utils';

export const ArrowDownButton = styled(RcIconButton)``;

export const EndAdornment = styled.div`
  right: 0;
  position: absolute;
`;

export const DownshiftStyle: RcThemedStyled<RcDownshiftProps, any> = ({
  toggleButton = false, // 24 + 12
  clearBtn = false, // 20 + 12
}) => {
  const paddingRight = (toggleButton ? 36 : 0) + (clearBtn ? 32 : 0);
  return css`
    .${RcDownshiftInputClasses.root} {
      flex-wrap: wrap;
      padding: 0 ${px(paddingRight)} 0 0;

      ${RcChip} {
        margin: ${spacing(0.5)};

        .${RcChipClasses.deleteIcon} {
          margin-left: -${spacing(1.5)};
        }
      }

      &:before,
      &:after {
        z-index: 1;
      }
    }

    .${RcDownshiftInputClasses.container} {
      display: flex;
      flex-wrap: wrap;
      overflow-y: auto;
      max-height: 132px;
      width: 100%;
    }
  `;
};
