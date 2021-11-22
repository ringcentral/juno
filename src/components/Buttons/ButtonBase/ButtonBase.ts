import { ComponentProps } from 'react';

import MuiButtonBase from '@material-ui/core/ButtonBase';

import { styled } from '../../../foundation';

type RcButtonBaseProps = ComponentProps<typeof MuiButtonBase>;

/** @release */
const RcButtonBase = styled(MuiButtonBase)``;

RcButtonBase.displayName = 'RcButtonBase';

export { RcButtonBase };
export type { RcButtonBaseProps };
