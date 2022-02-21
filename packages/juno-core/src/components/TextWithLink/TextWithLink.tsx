import React, { memo } from 'react';

import MuiTypography, { TypographyProps } from '@material-ui/core/Typography';

import { palette2, typography, useDeprecatedLog } from '../../foundation';
import styled from '../../foundation/styled-components';
import { RcBaseProps } from '../../foundation/typings';
import { RcLink, RcLinkProps } from '../Link';

const TipsText = styled(MuiTypography)`
  && {
    color: ${palette2('neutral', 'f04')};
    ${typography('caption1')};
    * {
      ${typography('caption1')};
    }
  }
`;

type RcTextWithLinkProps = {
  text: string;
  linkText: string;
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  TypographyProps?: RcBaseProps<TypographyProps>;
  RcLinkProps?: RcLinkProps;
};

/** @deprecated please don't use that component, just use RcText and RcLink directly */
const RcTextWithLink = memo((props: RcTextWithLinkProps) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDeprecatedLog({
      component: 'RcTextWithLink',
      message:
        "please don't use that component, just use `RcText` and RcLink directly",
    });
  }

  const { text, linkText, onClick, TypographyProps, RcLinkProps } = props;
  let textProps;
  if (TypographyProps) {
    const { innerRef, ...rest } = TypographyProps;
    textProps = rest;
  }

  return (
    <TipsText {...textProps}>
      {text}
      <RcLink handleOnClick={onClick} {...RcLinkProps}>
        {linkText}
      </RcLink>
    </TipsText>
  );
});

RcTextWithLink.displayName = 'RcTextWithLink';

export { RcTextWithLink };
