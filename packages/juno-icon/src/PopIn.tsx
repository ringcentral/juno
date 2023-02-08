import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PopIn = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M14 5a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-8a1 1 0 0 1 2 0v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h9zm12.885-1.295a.998.998 0 0 1 1.493 1.316l-.083.094L14.41 19H20a1 1 0 0 1 .117 1.993L20 21h-8a1 1 0 0 1-.993-.883L11 20v-8a1 1 0 0 1 1.993-.117L13 12v5.59L26.885 3.705z" />
    </svg>
  )),
);
PopIn.displayName = 'PopIn';
PopIn['iconName'] = 'pop-in';
export default PopIn;
