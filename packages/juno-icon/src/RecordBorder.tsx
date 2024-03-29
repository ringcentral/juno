import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const RecordBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 2C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm0 7a5 5 0 1 1-.001 10.001A5 5 0 0 1 16 11z" />
    </svg>
  )),
);
RecordBorder.displayName = 'RecordBorder';
RecordBorder['iconName'] = 'record_border';
export default RecordBorder;
