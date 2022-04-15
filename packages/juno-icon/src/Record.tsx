import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Record = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 4c6.627 0 12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4zm0 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" />
    </svg>
  )),
);
Record.displayName = 'Record';
Record['iconName'] = 'record';
export default Record;
