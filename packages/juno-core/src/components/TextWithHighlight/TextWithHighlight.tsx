import React from 'react';

import { palette2, useDeprecatedLog } from '../../foundation';
import styled from '../../foundation/styled-components';

const StyledSpan = styled.span`
  color: ${palette2('highlight', 'f01')};
  background-color: ${palette2('highlight', 'b02')};
  a {
    color: inherit;
  }
`;

/** @deprecated should not use that, just use RcText with `highlight` */
const RcTextWithHighlight = (props: {
  children: React.ReactChild | null | (React.ReactChild | null)[];
}) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDeprecatedLog({
      component: 'RcTextWithHighlight',
      message: 'should not use that, just use RcText with `highlight`',
    });
  }

  return <StyledSpan className="highlight-term" {...props} />;
};

export { RcTextWithHighlight };
