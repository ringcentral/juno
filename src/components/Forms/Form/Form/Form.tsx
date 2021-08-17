import React, { useCallback, useState } from 'react';

import { RcFormContext } from './FormContext';
import { FieldInfo, RcFormProps } from './types';
import { useThemeProps } from '../../../../foundation';

const RcForm = (inProps: RcFormProps) => {
  const props = useThemeProps({ props: inProps, name: 'RcForm' });
  const {
    children,
    isSubmitting,
    onBeforeSubmit,
    onValidateFailed,
    onSubmit,
    ...rest
  } = props;

  const [fieldManager] = useState(() => new Map<string, FieldInfo>());

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (isSubmitting) return;
      onBeforeSubmit && onBeforeSubmit();
      const validateMessages = [...fieldManager.values()]
        .map((fieldInfo) => fieldInfo.validate())
        .filter((msg) => msg !== false);

      if (validateMessages.length > 0) {
        onValidateFailed && onValidateFailed();
        return;
      }
      onSubmit && onSubmit(event);
    },
    [isSubmitting, onBeforeSubmit, fieldManager, onSubmit, onValidateFailed],
  );

  return (
    <RcFormContext.Provider value={fieldManager}>
      <form onSubmit={handleSubmit} {...rest}>
        {children}
      </form>
    </RcFormContext.Provider>
  );
};

export { RcForm };
