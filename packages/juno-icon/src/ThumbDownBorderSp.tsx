import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ThumbDownBorderSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m16.139 27.554 2.537.846 4.928-10.678h3.232a2.8 2.8 0 0 0 2.8-2.8v-9.6a2.8 2.8 0 0 0-2.8-2.8H8.809a2.8 2.8 0 0 0-2.67 1.957l-3.132 9.918c-.896 2.836 1.222 5.725 4.196 5.725h4.834v1.74a6 6 0 0 0 4.103 5.692zm5.898-12.162-4.639 10.052-.499-.166a3.6 3.6 0 0 1-2.462-3.415v-4.14H7.203a2 2 0 0 1-1.907-2.602l3.132-9.918a.401.401 0 0 1 .381-.28h13.227v10.47zm2.4-.07v-10.4h2.4a.4.4 0 0 1 .4.4v9.6a.4.4 0 0 1-.4.4h-2.4z" />
    </svg>
  )),
);
ThumbDownBorderSp.displayName = 'ThumbDownBorderSp';
ThumbDownBorderSp['iconName'] = 'thumb-down_border_sp';
export default ThumbDownBorderSp;
