/*
 * @Author: Nello Huang (nello.huang@ringcentral.com)
 * @Date: 2019-07-22 15:32:51
 * Copyright © RingCentral. All rights reserved.
 */
import FormControl, { FormControlProps } from '@material-ui/core/FormControl';

import { styled } from '../../foundation';

type RcFormControlProps = FormControlProps;

/** @release */
const RcFormControl = styled(FormControl)``;

RcFormControl.displayName = 'RcFormControl';

export { RcFormControl };
export type { RcFormControlProps };
