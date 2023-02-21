import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Features = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M18.197 2.6 11.92 9.42l-4.396 4.836-1.571 1.753-.121.157-.039.056-.109.178c-.02.035-.041.073-.061.112a2.558 2.558 0 0 0-.263.743l-.026.188c-.109 1.176.793 2.039 2.12 2.039h7.468l-2.468 8.765a1.492 1.492 0 0 0 2.533 1.414l2.014-2.224 5.594-6.249 4.416-4.973.087-.186.082-.192c.59-1.522-.381-2.769-1.937-2.769l-7.396-.001 2.847-8.984A1.492 1.492 0 0 0 18.197 2.6z" />
    </svg>
  )),
);
Features.displayName = 'Features';
Features['iconName'] = 'features';
export default Features;
