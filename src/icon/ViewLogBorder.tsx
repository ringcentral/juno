import React, { forwardRef, memo } from 'react';

const ViewLogBorder = memo(
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
        <path d="M14 2a1 1 0 010 2H7a1 1 0 00-1 1v22a1 1 0 001 1h18a1 1 0 001-1V16l.007-.117A1 1 0 0128 16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm7 17a1 1 0 01.117 1.993L21 21h-9.997a1 1 0 01-.117-1.993l.117-.007H21zm-5-6a1 1 0 01.117 1.993L16 15h-4.997a1 1 0 01-.117-1.993l.117-.007H16zM27 2a1 1 0 011 1v8a1 1 0 01-2 0l-.001-5.586-5.827 5.829a1 1 0 01-1.414-1.414L24.585 4H19a1 1 0 010-2h8z" />
      </svg>
    ),
  ),
);
ViewLogBorder.displayName = 'ViewLogBorder';
ViewLogBorder['iconName'] = 'view-log_border';
export default ViewLogBorder;
