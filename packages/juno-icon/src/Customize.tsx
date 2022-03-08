import React, { forwardRef, memo } from 'react';

const Customize = memo(
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
        <path d="M27.077 10c.51 0 .923.448.923 1 0 .513-.356.935-.815.993l-.108.007H4.923C4.413 12 4 11.552 4 11c0-.513.356-.935.815-.993L4.923 10h22.154zM27.077 20c.51 0 .923.448.923 1 0 .513-.356.936-.815.993l-.108.007H4.923C4.413 22 4 21.552 4 21c0-.513.356-.936.815-.993L4.923 20h22.154z" />
      </svg>
    ),
  ),
);
Customize.displayName = 'Customize';
Customize['iconName'] = 'customize';
export default Customize;
