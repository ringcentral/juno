import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const RcCcOutlined = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M6.7 21c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.3-5-5-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.4 3-3 3zm18.6-8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm-1-12h-2.1l3.1 3.1 3.1-3.1h-2.1v-4.7H17v-1.4c2.3-.5 4-2.5 4-4.9 0-2.8-2.2-5-5-5s-5 2.2-5 5c0 2.4 1.7 4.4 4 4.9v1.4H5.7V17H3.6l3.1 3.1 3-3.1h-2v-2.7h16.6V17zM13 6c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3z" />
    </svg>
  )),
);
RcCcOutlined.displayName = 'RcCcOutlined';
RcCcOutlined['iconName'] = 'RC-CC-Outlined';
export default RcCcOutlined;
