import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const MarkAsReadBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M20 8a3 3 0 1 1 6 0 3 3 0 1 1-6 0zm3-5a5 5 0 0 0 0 10 5 5 0 0 0 0-10zM6 7a1 1 0 0 1 1-1h7a1 1 0 0 0 0-2H7a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h2v5a1 1 0 0 0 1.651.759L17.37 23H24a3 3 0 0 0 3-3v-3a1 1 0 0 0-2 0v3a1 1 0 0 1-1 1h-7a.996.996 0 0 0-.651.241l.001-.001L11 25.827V22a1 1 0 0 0-1-1H7a1 1 0 0 1-1-1V7z" />
    </svg>
  )),
);
MarkAsReadBorder.displayName = 'MarkAsReadBorder';
MarkAsReadBorder['iconName'] = 'mark-as-read_border';
export default MarkAsReadBorder;
