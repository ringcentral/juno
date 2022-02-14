import React, { forwardRef, memo } from 'react';

const Forward = memo(
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
        <path d="M17.101 6.101a.999.999 0 000 1.414L24.586 15H5a1 1 0 000 2h19.588L17.1 24.486a.999.999 0 101.414 1.414l9.192-9.192a.999.999 0 000-1.414l-9.192-9.192a.999.999 0 00-1.414 0z" />
      </svg>
    ),
  ),
);
Forward.displayName = 'Forward';
Forward['iconName'] = 'forward';
export default Forward;
