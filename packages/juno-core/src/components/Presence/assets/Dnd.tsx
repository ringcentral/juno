import React, { forwardRef, memo } from 'react';

const Dnd = memo(
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
        <path fill={'#dd6057'} d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Z" />
        <path
          fill="#fff"
          d="M24.44,18.22H7.56a2.22,2.22,0,1,1,0-4.44H24.44a2.22,2.22,0,0,1,0,4.44Z"
        />
      </svg>
    ),
  ),
);
Dnd.displayName = 'Dnd';
Dnd['iconName'] = 'dnd';
export default Dnd;
