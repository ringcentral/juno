import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AnalyticsBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28 3a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H17v2h4a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2h4v-2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h24zm-1 2H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-16 6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm5-2a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 1-1zm5 4a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1z" />
    </svg>
  )),
);
AnalyticsBorder.displayName = 'AnalyticsBorder';
AnalyticsBorder['iconName'] = 'analytics_border';
export default AnalyticsBorder;
