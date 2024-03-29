import React, { forwardRef, memo } from 'react';

const Offline = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg viewBox="0 0 32 32" ref={svgRef} {...props}>
        <path d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm0,27.2A11.2,11.2,0,1,1,27.2,16,11.19,11.19,0,0,1,16,27.2Z" />
      </svg>
    ),
  ),
);
Offline.displayName = 'Offline';
Offline['iconName'] = 'offline';
export default Offline;
