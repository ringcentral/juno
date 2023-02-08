import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PopOut = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M14 5a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-8a1 1 0 0 1 2 0v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h9zm14-2a1 1 0 0 1 .993.883L29 4v8a1 1 0 0 1-1.993.117L27 12V6.41L13.115 20.295a.998.998 0 0 1-1.493-1.316l.083-.094L25.59 5H20a1 1 0 0 1-.117-1.993L20 3h8z" />
    </svg>
  )),
);
PopOut.displayName = 'PopOut';
PopOut['iconName'] = 'pop-out';
export default PopOut;
