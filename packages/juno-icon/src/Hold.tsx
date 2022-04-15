import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Hold = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M10 4a2 2 0 0 1 2 2v20a2 2 0 0 1-1.851 1.994L10 28a2 2 0 0 1-2-2V6c0-1.054.816-1.918 1.851-1.995L10 3.999zm12 0a2 2 0 0 1 2 2v20a2 2 0 0 1-1.851 1.994L22 28a2 2 0 0 1-2-2V6c0-1.054.816-1.918 1.851-1.995L22 3.999z" />
    </svg>
  )),
);
Hold.displayName = 'Hold';
Hold['iconName'] = 'hold';
export default Hold;
