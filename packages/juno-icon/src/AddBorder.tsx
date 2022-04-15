import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AddBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 2C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm0 4a1 1 0 0 1 .993.883L17 9l.001 5.999L23 15l.117.007a1 1 0 0 1 0 1.986L23 17l-5.999-.001L17 23l-.007.117a1 1 0 0 1-1.986 0L15 23l.001-6.001L9 17l-.117-.007a1 1 0 0 1 0-1.986L9 15l6.001-.001L15 9l.007-.117A1 1 0 0 1 16 8z" />
    </svg>
  )),
);
AddBorder.displayName = 'AddBorder';
AddBorder['iconName'] = 'add_border';
export default AddBorder;
