import React, { forwardRef, memo } from 'react';

const Draft = memo(
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
        <path d="M29 27a1 1 0 010 2H14a1 1 0 010-2h15zm-.99-23a4 4 0 010 5.657L10.761 26.906c-.279.279-.635.47-1.022.547l-5.006 1.001a1 1 0 01-1.177-1.176l1.001-5.006c.077-.387.268-.743.547-1.022L22.353 4.001a4 4 0 015.657 0zm-7.071 4.242L6.597 22.584l2.828 2.828L23.767 11.07l-2.828-2.828zm2.828-2.828l-1.413 1.413 2.828 2.828 1.413-1.414a2 2 0 10-2.828-2.828z" />
      </svg>
    ),
  ),
);
Draft.displayName = 'Draft';
Draft['iconName'] = 'draft';
export default Draft;
