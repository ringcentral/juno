/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FunctionComponent } from 'react';

/** this custom input for make that tags area can be scrollable */
export const RcDownshiftInput: FunctionComponent<any> = ({
  inputRef,
  containerRef,
  startAdornment,
  containerClassName,
  onContainerClick,
  ...rest
}) => (
  <div
    ref={containerRef}
    onClick={onContainerClick}
    className={containerClassName}
  >
    {startAdornment}
    <input ref={inputRef} {...rest} />
  </div>
);
