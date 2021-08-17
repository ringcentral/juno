import isString from 'lodash/isString';
import React, { CSSProperties, PureComponent } from 'react';

import { logInDev, RcTypographyKeys } from '../../../foundation';
import styled from '../../../foundation/styled-components';
import { RcTypography, RcTypographyProps } from '../../Typography/deprecated';

const StyledText = styled(RcTypography)`
  && {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: inherit;
  }
`;

type RcTextProps = {
  style?: CSSProperties;
  variant?: RcTypographyKeys;
  title?: string;
} & Omit<RcTypographyProps, 'variant' | 'title'>;

type TextStates = {
  tipOpen: boolean;
};

/** @deprecated please switch to new Text with full type support */
class RcText extends PureComponent<RcTextProps, TextStates> {
  private get _title() {
    const { title, children } = this.props;
    let result = '';
    if (title) {
      result = title;
    } else if (isString(children)) {
      result = children;
    }
    return result;
  }

  constructor(props: RcTextProps) {
    super(props);
    logInDev({
      component: 'RcText',
      message: 'please use none deprecated `RcText` replace that',
    });
  }

  render() {
    const { title, children, ...rest } = this.props;

    return (
      <StyledText title={this._title} {...rest}>
        {children}
      </StyledText>
    );
  }
}

export { RcTextProps, RcText };
