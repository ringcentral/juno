import React, { forwardRef, memo } from 'react';

const DeleteCircle = memo(
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
        <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm-4.243 8.343a.999.999 0 00-1.497 1.32l.083.094 4.243 4.241-4.243 4.244a.999.999 0 001.32 1.497l.094-.083L16 17.412l4.243 4.244a.999.999 0 001.497-1.32l-.083-.094-4.243-4.244 4.243-4.241a.999.999 0 00-1.32-1.497l-.094.083L16 14.584l-4.243-4.241z" />
      </svg>
    ),
  ),
);
DeleteCircle.displayName = 'DeleteCircle';
DeleteCircle['iconName'] = 'delete_circle';
export default DeleteCircle;
