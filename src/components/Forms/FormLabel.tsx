import MuiFormLabel, {
  FormLabelProps as MuiFormLabelProps,
} from '@material-ui/core/FormLabel';
import React, { forwardRef } from 'react';

import {
  palette2,
  RcBaseProps,
  styled,
  typography,
  useThemeProps,
} from '../../foundation';

type RcFormLabelProps = RcBaseProps<MuiFormLabelProps>;

const _RcFormLabel = React.memo(
  forwardRef<any, RcFormLabelProps>((inProps: RcFormLabelProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcFormLabel' });
    return <MuiFormLabel ref={ref} {...props} />;
  }),
);

const RcFormLabel = styled(_RcFormLabel)`
  ${typography('subheading2')};
  color: ${palette2('interactive', 'f01')};
`;

RcFormLabel.displayName = 'RcFormLabel';

export { RcFormLabel };
export type { RcFormLabelProps };
