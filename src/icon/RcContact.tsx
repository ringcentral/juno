import React, { forwardRef, memo } from 'react';

const RcContact = memo(
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
        <path
          fill="var(--color47, #f80)"
          d="M28 4a2 2 0 012 2v16a2 2 0 01-2 2h-7.586a.997.997 0 00-.707.293l-3.141 3.141a.8.8 0 01-1.131 0l-3.141-3.141a1 1 0 00-.707-.293H4.001a2 2 0 01-2-2V6a2 2 0 012-2h24z"
        />
      </svg>
    ),
  ),
);
RcContact.displayName = 'RcContact';
RcContact['iconName'] = 'rc_contact';
export default RcContact;
