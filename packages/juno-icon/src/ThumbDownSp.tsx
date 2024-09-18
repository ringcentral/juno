import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ThumbDownSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m16.139 27.554 2.537.846 4.928-10.678h3.232a2.8 2.8 0 0 0 2.8-2.8v-9.6a2.8 2.8 0 0 0-2.8-2.8H8.809a2.8 2.8 0 0 0-2.67 1.957l-3.132 9.918c-.896 2.836 1.222 5.725 4.196 5.725h4.834v1.74a6 6 0 0 0 4.103 5.692zm7.493-12.232v-10.4h3.205a.4.4 0 0 1 .4.4v9.6a.4.4 0 0 1-.4.4h-3.205z" />
    </svg>
  )),
);
ThumbDownSp.displayName = 'ThumbDownSp';
ThumbDownSp['iconName'] = 'thumb-down_sp';
export default ThumbDownSp;
