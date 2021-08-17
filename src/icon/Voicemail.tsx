import React, { forwardRef, memo } from 'react';

const Voicemail = memo(
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
        <path d="M8 23a7 7 0 116.326-3.999h3.348A7 7 0 1124 23H8zm0-10a3 3 0 100 6 3 3 0 000-6zm16 0a3 3 0 100 6 3 3 0 000-6z" />
      </svg>
    ),
  ),
);
Voicemail.displayName = 'Voicemail';
Voicemail['iconName'] = 'voicemail';
export default Voicemail;
