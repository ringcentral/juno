import React, { forwardRef, memo } from 'react';

const Time = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        {...props}
      >
        <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 4a1 1 0 00-.993.883L15 7v8H9a1 1 0 00-.117 1.993L9 17l7.117-.007c.459-.053.823-.418.877-.877l.007-.117v-9a1 1 0 00-1-1z" />
      </svg>
    ),
  ),
);
Time.displayName = 'Time';
Time['iconName'] = 'time';
export default Time;
