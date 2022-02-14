import React, { forwardRef } from 'react';

import { css, styled, typography } from '../../../../../foundation';
import { PickerBaseIconButton, PickerBaseIconButtonProps } from '../../styles';
import { RcTimePickerSize } from '../TimePicker';
import { HALF_DAY_HOURS, RcTimePickerIconWidths } from '../utils';

export type StyledTimeIconButtonProps = {
  wrapperSize?: RcTimePickerSize;
  /** item length of data source */
  itemLength?: number;
} & PickerBaseIconButtonProps;

const _StyledTimeIconButton = forwardRef<any, StyledTimeIconButtonProps>(
  ({ itemLength, wrapperSize, ...rest }, ref) => {
    return <PickerBaseIconButton ref={ref} {...rest} />;
  },
);

export const StyledTimeIconButton = styled(_StyledTimeIconButton)`
  && {
    ${({ wrapperSize, itemLength }) => {
      const iconWidth = RcTimePickerIconWidths[wrapperSize!];

      if (itemLength! > HALF_DAY_HOURS) {
        return css`
          width: ${iconWidth.s12};
          height: ${iconWidth.s24};
        `;
      }

      return css`
        width: ${iconWidth.s12};
        height: ${iconWidth.s12};
      `;
    }};

    ${({ wrapperSize }) =>
      typography(wrapperSize === 'medium' ? 'title1' : 'subheading1')};
  }
`;
