import React, { forwardRef, memo } from 'react';

const OutboundFaxBorder = memo(
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
        <path d="M23 4a1 1 0 010 2h-2v13.757c0 .796-.316 1.559-.879 2.121l-5.536 5.536a2 2 0 01-1.238.578l-.176.008H4.999a2 2 0 01-2-2V6h-2a1 1 0 010-2h22zm-4 2H5v19a1 1 0 001 1h6v-5a2 2 0 012-2h5V6zm-.83 15H15a1 1 0 00-1 1v3.17L18.17 21zm7.037-10.293l4.586 4.586a1 1 0 010 1.414l-4.586 4.586a1 1 0 01-1.414-1.414L27.5 16l-3.707-3.879a1 1 0 011.414-1.414zM15.167 14c.46 0 .833.448.833 1s-.373 1-.833 1H8.834c-.46 0-.833-.448-.833-1s.373-1 .833-1h6.333zm0-5c.46 0 .833.448.833 1s-.373 1-.833 1H8.834c-.46 0-.833-.448-.833-1s.373-1 .833-1h6.333z" />
      </svg>
    ),
  ),
);
OutboundFaxBorder.displayName = 'OutboundFaxBorder';
OutboundFaxBorder['iconName'] = 'outbound-fax_border';
export default OutboundFaxBorder;
