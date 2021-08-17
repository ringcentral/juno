import MuiMenuList from '@material-ui/core/MenuList';
import React, { FunctionComponent } from 'react';
import { spacing, styled } from '../../../../../foundation';
import { RcDivider } from '../../../../Divider';
import { RcMenuListProps } from '../MenuList';
import { RcMenuListClasses } from '../utils';

const _StyledMenuList: FunctionComponent<RcMenuListProps> = (props) => (
  <MuiMenuList {...props} />
);

const MAX_HEIGHT_MAP = {
  small: '296px',
  large: '416px',
};

const StyledMenuList = styled(_StyledMenuList)`
  &&.${RcMenuListClasses.root} {
    max-width: 592px;
    /* @deprecated default maxHeight */
    ${({ size }) => size && `max-height: ${MAX_HEIGHT_MAP[size]}`}
    ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}px`};
    min-width: 112px;
    overflow: auto;
  }

  ${RcDivider} {
    margin: ${spacing(2, 0)};
  }
`;

export { StyledMenuList };
