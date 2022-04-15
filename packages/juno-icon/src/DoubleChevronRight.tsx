import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const DoubleChevronRight = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M26.899 4a1 1 0 0 0-1 1v22a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1zM14.586 6.101a.999.999 0 0 0 0 1.414L22.073 15H5a1 1 0 0 0 0 2h17.07l-7.485 7.485a.999.999 0 1 0 1.414 1.414l9.192-9.192a.999.999 0 0 0 0-1.414l-9.192-9.192a.999.999 0 0 0-1.414 0z" />
    </svg>
  )),
);
DoubleChevronRight.displayName = 'DoubleChevronRight';
DoubleChevronRight['iconName'] = 'double-chevron_right';
export default DoubleChevronRight;
