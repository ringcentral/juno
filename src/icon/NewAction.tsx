import React, { forwardRef, memo } from 'react';

const NewAction = memo(
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
        <path d="M16 3a1.5 1.5 0 011.5 1.5v10h10a1.5 1.5 0 010 3H17.499l.001 10a1.5 1.5 0 01-3 0l-.001-10H4.5a1.5 1.5 0 010-3h10v-10A1.5 1.5 0 0116 3z" />
      </svg>
    ),
  ),
);
NewAction.displayName = 'NewAction';
NewAction['iconName'] = 'new-action';
export default NewAction;
