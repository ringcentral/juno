import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Conversion = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M10 18a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM20.974 6.076A12.002 12.002 0 0 1 28 17a11.97 11.97 0 0 1-4.064 9.001L29 26v2h-9v-9h2l.001 6A9.985 9.985 0 0 0 26 17a10 10 0 0 0-5.884-9.116l.858-1.807zM10 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    </svg>
  )),
);
Conversion.displayName = 'Conversion';
Conversion['iconName'] = 'conversion';
export default Conversion;
