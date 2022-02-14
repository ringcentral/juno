import React, { forwardRef, memo } from 'react';

const Unpin = memo(
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
        <path d="M9.946 20.442l1.613 1.613-7.256 7.256c-.445.445-2.78 2.058-3.225 1.613s1.167-2.78 1.613-3.225l7.256-7.256zM19.63 1.154c.086.05.165.11.235.181l10.802 10.801a1.141 1.141 0 01-.235 1.794l-8.715 5.046a10.246 10.246 0 01-2.901 8.723 1.141 1.141 0 01-1.613 0l-12.9-12.9a1.141 1.141 0 010-1.613 10.248 10.248 0 018.724-2.901l5.045-8.715a1.14 1.14 0 011.558-.415zm-.389 2.385l-5.161 8.917-1.338-.192a8.249 8.249 0 00-6.105 1.54l-.281.219 11.62 11.62.029-.033a8.24 8.24 0 001.768-6.055l-.037-.296-.192-1.338 8.916-5.163-9.219-9.219z" />
      </svg>
    ),
  ),
);
Unpin.displayName = 'Unpin';
Unpin['iconName'] = 'unpin';
export default Unpin;
