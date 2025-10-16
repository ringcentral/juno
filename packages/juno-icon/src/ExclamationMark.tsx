import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ExclamationMark = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14zm0-11a1 1 0 0 0 1-1V8a1 1 0 0 0-2 0v10a1 1 0 0 0 1 1zm0 6a2 2 0 1 0 0-4 2 2 0 1 0 0 4z" />
    </svg>
  )),
);
ExclamationMark.displayName = 'ExclamationMark';
ExclamationMark['iconName'] = 'exclamation_mark';
export default ExclamationMark;
