import React, { forwardRef } from 'react';

import {
  css,
  nonTouchHoverMedia,
  RcThemedStyled,
  styled,
} from '../../../../foundation';
import { RcTextField, RcTextFieldProps } from '../../TextField';
import { RcTextFieldInputClasses } from '../../TextField/utils';

const _RcTextField = forwardRef<any, RcTextFieldProps>((props, ref) => {
  const { ...rest } = props;
  return <RcTextField ref={ref} {...rest} clearBtn={false} />;
});

const cleanStyle: RcThemedStyled<RcTextFieldProps, any> = ({
  value,
  clearBtn,
  disabled,
}) => {
  // TODO: in touch screen, that will directly trigger remove button, confirm that
  return (
    value &&
    clearBtn &&
    !disabled &&
    css`
      ${nonTouchHoverMedia} {
        .${RcTextFieldInputClasses.root} {
          &:hover {
            .picker-action {
              display: none;
            }
            .picker-clear {
              display: inline-flex;
            }
          }
        }
      }
    `
  );
};

const StyledPickerTextField = styled(_RcTextField)`
  .picker-clear {
    display: none;
  }

  .${RcTextFieldInputClasses.root}, .${RcTextFieldInputClasses.input} {
    cursor: pointer;
  }

  .${RcTextFieldInputClasses.disabled} {
    cursor: auto;
  }

  .picker-action {
    margin: 0;
  }

  ${cleanStyle};
`;

export { StyledPickerTextField };
