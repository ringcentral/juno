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
      <path d="M20.5 9a6.5 6.5 0 0 1 6.5 6.5v1a6.5 6.5 0 0 1-9.335 5.851 8.527 8.527 0 0 0 1.047-1.349l.289-.001a3 3 0 0 0 3-3v-1a3.002 3.002 0 0 0-2.11-2.866 8.472 8.472 0 0 0-2.226-4.487A6.503 6.503 0 0 1 20.501 9zm-9 0a6.503 6.503 0 0 1 6.327 5.005A3 3 0 0 0 15 17v1c0 .351.06.688.171 1.001L13 19a1.5 1.5 0 1 0-1.352 1.493l.102.007 4.585-.004c.063.042.128.082.195.12A6.5 6.5 0 0 1 5 16.5v-1A6.5 6.5 0 0 1 11.5 9zm-3.75 4a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm4 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z" />
    </svg>
  )),
);
AvatarDelegatedLines.displayName = 'AvatarDelegatedLines';
AvatarDelegatedLines['iconName'] = 'avatar-delegated-lines';
export default AvatarDelegatedLines;
