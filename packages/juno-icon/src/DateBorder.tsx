import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const DateBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M26 4h-4V3a1 1 0 0 0-2 0v1h-8V3a1 1 0 0 0-2 0v1H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-1 22H7a1 1 0 0 1-1-1V12h20v13a1 1 0 0 1-1 1zm1-16H6V7a1 1 0 0 1 1-1h3v1a1 1 0 0 0 2 0V6h8v1a1 1 0 0 0 2 0V6h3a1 1 0 0 1 1 1v3z" />
    </svg>
  )),
);
DateBorder.displayName = 'DateBorder';
DateBorder['iconName'] = 'date_border';
export default DateBorder;
