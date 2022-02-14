import React, { forwardRef, memo } from 'react';

const InboundFax = memo(
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
        <path d="M23 4a1 1 0 010 2h-2v13h-7a2.001 2.001 0 00-1.995 1.851L12 21v7H5a2 2 0 01-2-2V6H1a1 1 0 010-2h22zm-2.272 17l-.025.058a3.003 3.003 0 01-.582.82l-5.536 5.536a2.022 2.022 0 01-.415.319l-.17.086V22a1 1 0 01.883-.993L15 21h5.728zm7.651-10.293a1 1 0 011.497 1.32l-.083.094L26.086 16l3.707 3.879a1 1 0 01-1.32 1.497l-.094-.083-4.586-4.586a1 1 0 01-.083-1.32l.083-.094 4.586-4.586zM15.167 14H8.834c-.46 0-.833.448-.833 1 0 .513.322.935.736.993l.097.007h6.333c.46 0 .833-.448.833-1s-.373-1-.833-1zm0-5H8.834c-.46 0-.833.448-.833 1 0 .513.322.935.736.993l.097.007h6.333c.46 0 .833-.448.833-1s-.373-1-.833-1z" />
      </svg>
    ),
  ),
);
InboundFax.displayName = 'InboundFax';
InboundFax['iconName'] = 'inbound-fax';
export default InboundFax;
