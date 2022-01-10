import React, { forwardRef, memo } from 'react';

const Mobile = memo(
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
        <path d="M9.571 2l12.857.013c1.358 0 2.478 1.044 2.566 2.366l.006.167v22.909c0 1.344-1.066 2.453-2.403 2.54l-.168.005H9.572c-1.358 0-2.478-1.056-2.566-2.379l-.005-.167V4.545c0-1.344 1.066-2.453 2.403-2.54L9.572 2zM22 4H10a1 1 0 00-.993.883L9 5v22a1 1 0 00.883.993L10 28h12a1 1 0 00.993-.883L23 27V5a1 1 0 00-.883-.993L22 4zm-4 20a1 1 0 010 2h-4a1 1 0 010-2h4z" />
      </svg>
    ),
  ),
);
Mobile.displayName = 'Mobile';
Mobile['iconName'] = 'mobile';
export default Mobile;
