import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Pause = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M12 5c1.054 0 1.918.816 1.995 1.851L14 7v18a2 2 0 0 1-1.851 1.994L12 27H8a2.001 2.001 0 0 1-1.995-1.851L6 25V7c0-1.054.816-1.918 1.851-1.995L8 5h4zm12 0a2 2 0 0 1 1.994 1.851L26 7v18a2 2 0 0 1-1.851 1.994L24 27h-4a2 2 0 0 1-1.994-1.851L18 25V7c0-1.054.816-1.918 1.851-1.995L20 5h4z" />
    </svg>
  )),
);
Pause.displayName = 'Pause';
Pause['iconName'] = 'pause';
export default Pause;
