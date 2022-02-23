import React, { forwardRef, memo } from 'react';

const Customize = memo(
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
        <path d="M28.727 20.727a1.273 1.273 0 01.207 2.529l-.206.017H3.273a1.273 1.273 0 01-.207-2.529l.206-.017h25.455zm0-12.727a1.273 1.273 0 01.207 2.529l-.206.017H3.273a1.273 1.273 0 01-.207-2.529L3.272 8h25.455z" />
      </svg>
    ),
  ),
);
Customize.displayName = 'Customize';
Customize['iconName'] = 'customize';
export default Customize;
