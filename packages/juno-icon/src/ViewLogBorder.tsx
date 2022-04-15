import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ViewLogBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M14 2a1 1 0 0 1 0 2H7a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V16l.007-.117A1 1 0 0 1 28 16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 17a1 1 0 0 1 .117 1.993L21 21h-9.997a1 1 0 0 1-.117-1.993l.117-.007H21zm-5-6a1 1 0 0 1 .117 1.993L16 15h-4.997a1 1 0 0 1-.117-1.993l.117-.007H16zM27 2a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0l-.001-5.586-5.827 5.829a1 1 0 0 1-1.414-1.414L24.585 4H19a1 1 0 0 1 0-2h8z" />
    </svg>
  )),
);
ViewLogBorder.displayName = 'ViewLogBorder';
ViewLogBorder['iconName'] = 'view-log_border';
export default ViewLogBorder;
