import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AvatarDelegatedLines = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m23.002 7.498.366.072a3.001 3.001 0 0 1 2.347 2.402c.175.963.27 2.212.286 3.747.017 1.635-.076 3.002-.276 4.1l-.057.293a3 3 0 0 1-2.343 2.325c-1.668.336-3.776.522-6.322.557L17.002 24h3.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1h3.5l-.001-3.009c-2.228-.036-4.122-.184-5.683-.445l-.377-.066a3 3 0 0 1-2.409-2.437c-.227-1.309-.356-2.866-.388-4.671-.021-1.175.017-2.171.114-2.989l.039-.299a3 3 0 0 1 2.388-2.516c1.841-.364 4.255-.553 7.24-.567 2.858-.014 5.217.152 7.079.498zM22 15.5h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm-4-5h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2z" />
    </svg>
  )),
);
AvatarDelegatedLines.displayName = 'AvatarDelegatedLines';
AvatarDelegatedLines['iconName'] = 'avatar-delegated-lines';
export default AvatarDelegatedLines;
