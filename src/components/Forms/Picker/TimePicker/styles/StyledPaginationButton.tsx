import React, { FunctionComponent, useMemo } from 'react';

import { styled } from '../../../../../foundation';
import {
  RcIconButtonSize,
  RcIconButton,
  RcIconButtonProps,
} from '../../../../Buttons';
import { RcTimePickerProps } from '../TimePicker';
import { clickFiledStyle } from './clickFiledStyle';

const _StyledPaginationButton: FunctionComponent<Omit<
  RcIconButtonProps,
  'size'
> &
  Pick<RcTimePickerProps, 'size'>> = (props) => {
  const { size, color, ...rest } = props;

  const iconSize = useMemo<RcIconButtonSize>(() => {
    switch (size) {
      case 'small':
        return 'medium';
      case 'medium':
      default:
        return 'large';
    }
  }, [size]);

  return <RcIconButton size={iconSize} disableTouchRipple {...rest} />;
};

const StyledPaginationButton = styled(_StyledPaginationButton)`
  ${clickFiledStyle}
  svg {
    margin: auto;
  }
`;

export { StyledPaginationButton };
