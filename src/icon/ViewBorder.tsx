import React, { forwardRef, memo } from 'react';

const ViewBorder = memo(
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
        <path d="M16 5c8.284 0 15 8 15 11s-6.716 11-15 11C7.716 27 1 19 1 16S7.716 5 16 5zm0 2c-3.233 0-6.526 1.462-9.29 3.88-1.169 1.022-2.162 2.156-2.853 3.223C3.289 14.981 3 15.712 3 16s.289 1.019.857 1.897c.691 1.066 1.684 2.2 2.853 3.223C9.474 23.538 12.766 25 16 25s6.526-1.462 9.29-3.88c1.169-1.022 2.162-2.156 2.853-3.223.569-.878.857-1.609.857-1.897s-.289-1.019-.857-1.897c-.691-1.066-1.684-2.2-2.853-3.223C22.526 8.462 19.234 7 16 7zm0 3a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  ),
);
ViewBorder.displayName = 'ViewBorder';
ViewBorder['iconName'] = 'view_border';
export default ViewBorder;
