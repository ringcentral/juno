import React, { useEffect } from 'react';

import { isForwardRef } from 'react-is';

import { isShowJunoWarning, logInDev } from '../../../foundation';

// TODO: this just for check error props
export const useDownshiftError = ({ isNew, MenuItem, InputItem }: any) => {
  if (isShowJunoWarning) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!isNew) {
        logInDev({
          component: 'RcDownshift',
          message: `you use the old structure,
        1. please switch to new props \`options\`.
        2. migrate \`helperText\` to control with outside.
        3. not use \`nameError\` \`allowPlainHelperText\`.
        4. tags with isError should use \`renderTags\` and check error outside`,
        });
      }

      // * check all need forwardRef props
      if (MenuItem && !isForwardRef(<MenuItem />)) {
        logInDev({
          component: 'RcDownshift',
          message: `\`MenuItem\` must wrap with forwardRef, and that props is a deprecated props,
!!!!!!!!!!!!! suggest you switch to \`renderOption\``,
          level: 'error',
        });
      }

      if (InputItem && !isForwardRef(<InputItem />)) {
        logInDev({
          component: 'RcDownshift',
          message: `\`InputItem\` must wrap with \`forwardRef\`, and that props is a deprecated props,
!!!!!!!!!!!!! suggest you switch to \`renderTags\``,
          level: 'error',
        });
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  }
};
