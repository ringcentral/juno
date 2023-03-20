import React, { forwardRef, memo } from 'react';

const Check = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        ref={svgRef}
        {...props}
      >
        <path
          id="Shape"
          d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm8.62,10.38L17.51,23.72A2.19,2.19,0,0,1,16,24.89h-.41a2.17,2.17,0,0,1-1.37-.53L8,19a2.22,2.22,0,0,1,2.38-3.7,1.76,1.76,0,0,1,.39.32L14.9,19.2,20.71,8.3a2.21,2.21,0,0,1,2.95-1.06,2.15,2.15,0,0,1,1.15,1.25,2.23,2.23,0,0,1-.08,1.7l-.11.21Z"
        />
      </svg>
    ),
  ),
);
Check.displayName = 'Check';
Check['iconName'] = 'check';
export default Check;