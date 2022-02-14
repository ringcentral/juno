import React, { forwardRef, memo } from 'react';

const Star = memo(
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
        <path d="M16.885 1.726c.394.195.714.514.908.908l2.97 6.018a1 1 0 00.753.547l6.641.965a2.001 2.001 0 011.109 3.412L24.46 18.26c-.236.23-.343.561-.288.885l1.134 6.614a1.999 1.999 0 01-2.902 2.108l-5.94-3.123a1.002 1.002 0 00-.931 0l-5.94 3.123a2 2 0 01-2.902-2.109l1.134-6.614a.999.999 0 00-.288-.885l-4.806-4.684a2 2 0 011.109-3.411l6.641-.965a1 1 0 00.753-.547l2.97-6.018a2 2 0 012.679-.908z" />
      </svg>
    ),
  ),
);
Star.displayName = 'Star';
Star['iconName'] = 'star';
export default Star;
