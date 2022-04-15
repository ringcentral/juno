import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const HorizontalLine = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M5 15h22a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z" />
    </svg>
  )),
);
HorizontalLine.displayName = 'HorizontalLine';
HorizontalLine['iconName'] = 'horizontal-line';
export default HorizontalLine;
