import React, { forwardRef, memo } from 'react';

const ParkCall = memo(
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
        <path d="M19.837 3.75c4.69 0 7.803 2.902 7.803 7.298 0 4.216-2.865 7.052-7.271 7.269l-.303.011-.245.003h-8.829l.001 8.259c0 .476-.232.864-.621 1.049l-.135.054-.133.035-.13.018-.111.005c-.566 0-.986-.356-1.09-.906l-.019-.141-.005-.114V4.911c0-.582.334-1.024.866-1.135l.137-.021.111-.005h9.974zm-.208 2.132h-8.637v10.315l8.64.001c3.585 0 5.75-1.949 5.75-5.15 0-3.061-1.944-4.971-5.228-5.152l-.293-.011-.233-.003z" />
      </svg>
    ),
  ),
);
ParkCall.displayName = 'ParkCall';
ParkCall['iconName'] = 'park-call';
export default ParkCall;
