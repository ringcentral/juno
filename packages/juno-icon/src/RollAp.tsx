import React, { forwardRef, memo } from 'react';

const RollAp = memo(
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
        <path d="M13 18a1 1 0 011 1v8a1 1 0 01-2 0l-.001-5.586-5.827 5.829a.999.999 0 11-1.414-1.414L10.585 20H5a1 1 0 010-2h8zm6-14a1 1 0 011 1l.001 5.586 5.827-5.829a.999.999 0 111.414 1.414L21.415 12H27a1 1 0 010 2h-8a1 1 0 01-1-1V5a1 1 0 011-1z" />
      </svg>
    ),
  ),
);
RollAp.displayName = 'RollAp';
RollAp['iconName'] = 'roll-ap';
export default RollAp;
