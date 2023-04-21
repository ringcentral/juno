import React, { FocusEventHandler, forwardRef } from 'react';

export type MoreMenuTabSentinelProps = {
  onFocus: FocusEventHandler<HTMLDivElement>;
  id: string;
  value: string;
};

export const MoreMenuTabSentinel = forwardRef<
  HTMLDivElement,
  MoreMenuTabSentinelProps
>((props, ref) => {
  const { onFocus, id } = props;

  return (
    <div
      ref={ref}
      aria-hidden
      style={{ position: 'absolute', top: 0, left: 0, height: 0, width: 0 }}
      tabIndex={-1}
      data-tab-sentinel={id}
      onFocus={onFocus}
    />
  );
});

MoreMenuTabSentinel.displayName = 'MoreMenuTabSentinel';
