import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Bundle = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M14.658 2.553a3.001 3.001 0 0 1 2.683 0l11.105 5.553a1 1 0 0 1 0 1.788L17.34 15.447a3.001 3.001 0 0 1-2.683 0L3.551 9.894a1 1 0 0 1 0-1.788l11.106-5.553zm1.789 1.789a.998.998 0 0 0-.894 0L6.236 9l9.317 4.658a.998.998 0 0 0 .894 0L25.764 9l-9.317-4.658z" />
      <path d="m11.241 13.294-5.206 2.937 9.473 5.344a1 1 0 0 0 .983 0l9.473-5.344-5.206-2.937.983-1.742 6.75 3.808a1 1 0 0 1 0 1.742l-11.017 6.215a3 3 0 0 1-2.948 0L3.509 17.102a1 1 0 0 1 0-1.742l6.75-3.808.983 1.742z" />
      <path d="m6.191 22.846 4.265-2.187-.913-1.78-6 3.077a1 1 0 0 0 0 1.78l11.087 5.686a2.999 2.999 0 0 0 2.738 0l11.087-5.686a1 1 0 0 0 0-1.78l-6-3.077-.913 1.78 4.265 2.187-9.352 4.796a1 1 0 0 1-.913 0L6.19 22.846z" />
    </svg>
  )),
);
Bundle.displayName = 'Bundle';
Bundle['iconName'] = 'bundle';
export default Bundle;
