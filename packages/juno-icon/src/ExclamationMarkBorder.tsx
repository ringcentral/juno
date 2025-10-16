import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ExclamationMarkBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14zm0-2c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12zm0-9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1zm0 6a2 2 0 1 1 0-4 2 2 0 1 1 0 4z" />
    </svg>
  )),
);
ExclamationMarkBorder.displayName = 'ExclamationMarkBorder';
ExclamationMarkBorder['iconName'] = 'exclamation_mark_border';
export default ExclamationMarkBorder;
