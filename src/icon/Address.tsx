import React, { forwardRef, memo } from 'react';

const Address = memo(
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
        <path d="M30.491 12.295L16.545 2.124a1.212 1.212 0 00-1.067 0L1.532 12.295c-.512.289-.683.91-.384 1.406s.939.662 1.452.372l1.42-.992V28.93c0 .579.47 1.034 1.067 1.034h21.821c.598 0 1.067-.455 1.067-1.034V13.081l1.406.992c.171.083.342.124.512.124.384 0 .726-.165.939-.537.342-.455.128-1.075-.342-1.364zM12.024 28V17h7.967v11h-7.967zm13.975 0h-4.001V16.141c0-.579-.47-1.034-1.067-1.034h-9.866c-.598 0-1.067.455-1.067 1.034V28H6.03V11.881l9.96-7.649 10.009 7.649V28z" />
      </svg>
    ),
  ),
);
Address.displayName = 'Address';
Address['iconName'] = 'address';
export default Address;
