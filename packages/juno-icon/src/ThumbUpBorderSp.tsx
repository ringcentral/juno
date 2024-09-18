import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ThumbUpBorderSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m16.297 3.368-2.537-.846L8.832 13.2H5.6A2.8 2.8 0 0 0 2.8 16v9.6a2.8 2.8 0 0 0 2.8 2.8h18.027a2.8 2.8 0 0 0 2.67-1.957l3.132-9.918c.896-2.836-1.222-5.725-4.196-5.725h-4.834V9.06a6 6 0 0 0-4.103-5.692zM10.4 15.53l4.639-10.052.499.166A3.6 3.6 0 0 1 18 9.059v4.14h7.234a2 2 0 0 1 1.907 2.602l-3.132 9.918a.4.4 0 0 1-.381.28H10.401v-10.47zM8 15.6V26H5.6a.4.4 0 0 1-.4-.4V16a.4.4 0 0 1 .4-.4H8z" />
    </svg>
  )),
);
ThumbUpBorderSp.displayName = 'ThumbUpBorderSp';
ThumbUpBorderSp['iconName'] = 'thumb-up_border_sp';
export default ThumbUpBorderSp;
