import React, { forwardRef, memo } from 'react';

const InsertCode = memo(
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
        <path d="M18.722 4.025a1 1 0 01.773 1.082l-.019.115-5 22a1 1 0 01-1.97-.329l.019-.115 5-22a.999.999 0 011.197-.753zm5.983 5.68l4.881 4.881a2 2 0 010 2.828l-4.881 4.881a.998.998 0 01-1.411-1.411l4.17-4.178a1 1 0 000-1.413l-4.17-4.178a.998.998 0 011.411-1.411zm-16 0a.999.999 0 01.001 1.411l-4.17 4.178a1 1 0 000 1.413l4.17 4.178a.998.998 0 01-1.411 1.411l-4.881-4.881a2 2 0 010-2.828l4.881-4.881a.998.998 0 011.41 0z" />
      </svg>
    ),
  ),
);
InsertCode.displayName = 'InsertCode';
InsertCode['iconName'] = 'insert-code';
export default InsertCode;
