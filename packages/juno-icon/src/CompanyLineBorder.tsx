import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const CompanyLineBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M2 5v19.833h2.333V26c0 2.579 2.087 4.667 4.667 4.667S13.667 28.58 13.667 26v-1.167H30V5H11.333v21c0 1.39-.943 2.333-2.333 2.333S6.667 27.39 6.667 26v-1.167H9V5H2zm2.333 2.333h2.333V22.5H4.333V7.333zm9.334 0h14V22.5h-14V7.333zM16 9.667V12h9.333V9.667H16zm0 4.666v2.333h2.333v-2.333H16zm3.5 0v2.333h2.333v-2.333H19.5zm3.5 0v2.333h2.333v-2.333H23zm-7 3.5v2.333h2.333v-2.333H16zm3.5 0v2.333h2.333v-2.333H19.5zm3.5 0v2.333h2.333v-2.333H23z" />
    </svg>
  )),
);
CompanyLineBorder.displayName = 'CompanyLineBorder';
CompanyLineBorder['iconName'] = 'company-line_border';
export default CompanyLineBorder;
