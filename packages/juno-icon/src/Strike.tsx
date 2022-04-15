import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Strike = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M24.21 18c.824.974 1.212 2.165 1.212 3.633 0 4.412-3.691 7.383-9.369 7.383-4.781 0-8.402-2.18-9.281-5.66a3.708 3.708 0 0 1-.105-.844c0-.721.422-1.16 1.143-1.16.615 0 .879.299 1.125.967.791 2.777 3.568 4.553 7.137 4.553 4.061 0 6.855-2.092 6.855-4.975 0-1.815-.992-3.004-3.256-3.896h4.54zM29 16a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h26zM16 3c4.518 0 7.928 2.215 8.701 5.396.07.264.105.58.105.791 0 .686-.439 1.09-1.125 1.09-.563 0-.879-.264-1.072-.809C21.888 6.779 19.41 5.144 16 5.144c-3.604 0-6.328 1.969-6.328 4.764 0 1.997 1.371 3.193 4.449 4.092H8.743c-1.062-1.035-1.567-2.329-1.567-3.934C7.176 5.935 10.973 3 16 3z" />
    </svg>
  )),
);
Strike.displayName = 'Strike';
Strike['iconName'] = 'strike';
export default Strike;
