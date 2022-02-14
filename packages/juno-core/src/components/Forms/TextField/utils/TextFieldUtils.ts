import {
  css,
  RcClasses,
  RcThemedStyled,
  spacing,
} from '../../../../foundation';
import { RcIconButton } from '../../../Buttons/IconButton';
import { RcTextFieldProps } from '../TextField';

export const RcTextFieldClasses = RcClasses<RcTextFieldProps>(
  ['root'],
  'RcTextField',
);

export const RcTextFieldInputClasses = RcClasses<
  RcTextFieldProps['InputProps']
>(
  ['root', 'underline', 'error', 'focused', 'disabled', 'input'],
  'RcTextFieldInput',
);

export const RcTextFieldInputLabelClasses = RcClasses<
  RcTextFieldProps['InputLabelProps']
>(['root', 'error', 'focused', 'disabled'], 'RcTextFieldInputLabel');

export const RcTextFieldFormHelperTextClasses = RcClasses<
  RcTextFieldProps['FormHelperTextProps']
>(['root', 'error', 'disabled'], 'RcTextFieldFormHelperText');

export const belowIconButtonSpacing = (
  spaceNum: ReturnType<typeof spacing>,
) => {
  const themeFn: RcThemedStyled<RcTextFieldProps, any> = ({ clearBtn }) => {
    if (clearBtn) {
      return css`
        *:not(input) + ${RcIconButton} {
          margin-left: ${spaceNum};
        }
      `;
    }

    return css`
      ${RcIconButton} {
        margin-left: ${spaceNum};
      }
    `;
  };

  return themeFn;
};
