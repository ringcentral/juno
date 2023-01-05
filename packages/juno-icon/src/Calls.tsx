import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Calls = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 4a1 1 0 0 0-.993.883L15 7v9l.009.131c.023.173.091.338.197.477l.087.099 4 4 .094.083a1 1 0 0 0 1.226 0l.094-.083.083-.094a1 1 0 0 0 0-1.226l-.083-.094L17 15.585V7l-.007-.117A1 1 0 0 0 16 6z" />
    </svg>
  )),
);
Calls.displayName = 'Calls';
Calls['iconName'] = 'calls';
export default Calls;
