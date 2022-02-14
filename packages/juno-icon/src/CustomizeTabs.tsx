import React, { forwardRef, memo } from 'react';

const CustomizeTabs = memo(
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
        <path d="M22.32 22.967a1.742 1.742 0 010 3.484H4.306a1.742 1.742 0 010-3.484H22.32zm5.374-8.709a1.742 1.742 0 010 3.484H13.263a1.742 1.742 0 010-3.484h14.431zM22.32 5.55a1.742 1.742 0 010 3.484H4.306a1.742 1.742 0 010-3.484H22.32z" />
      </svg>
    ),
  ),
);
CustomizeTabs.displayName = 'CustomizeTabs';
CustomizeTabs['iconName'] = 'customize-tabs';
export default CustomizeTabs;
