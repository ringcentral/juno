import React, { forwardRef, memo } from 'react';

const Forwarding = memo(
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
        <path d="M19.287 27.703l.127-.117 10.172-10.172a2 2 0 00.117-2.701l-.117-.127L19.414 4.414a2 2 0 00-3.408 1.265L16 5.828 15.999 11 15 10.999c-7.18 0-13 5.82-13 13v3c0 1.192 1.711 1.384 1.975.221a8 8 0 017.538-6.217l.263-.004h4.222l.001 5.171a2 2 0 003.287 1.531z" />
      </svg>
    ),
  ),
);
Forwarding.displayName = 'Forwarding';
Forwarding['iconName'] = 'forwarding';
export default Forwarding;
