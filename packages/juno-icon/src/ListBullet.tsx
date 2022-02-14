import React, { forwardRef, memo } from 'react';

const ListBullet = memo(
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
        <path d="M6 23a2 2 0 11.001 3.999A2 2 0 016 23zm21 1a1 1 0 010 2H11a1 1 0 010-2h16zM6 14a2 2 0 11.001 3.999A2 2 0 016 14zm21 1a1 1 0 010 2H11a1 1 0 010-2h16zM6 5a2 2 0 11.001 3.999A2 2 0 016 5zm21 1a1 1 0 010 2H11a1 1 0 010-2h16z" />
      </svg>
    ),
  ),
);
ListBullet.displayName = 'ListBullet';
ListBullet['iconName'] = 'list-bullet';
export default ListBullet;
