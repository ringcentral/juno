import React, { forwardRef, memo } from 'react';

const Hud = memo(
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
        <path d="M28 3a2 2 0 012 2v18a2 2 0 01-2 2H17v2h4a1 1 0 010 2H11a1 1 0 010-2h4v-2H4a2 2 0 01-2-2V5a2 2 0 012-2h24zm-1 2H5a1 1 0 00-1 1v16a1 1 0 001 1h22a1 1 0 001-1V6a1 1 0 00-1-1zm-3 3a1 1 0 011 1v10a1 1 0 01-1 1H8a1 1 0 01-1-1V9a1 1 0 011-1h16z" />
      </svg>
    ),
  ),
);
Hud.displayName = 'Hud';
Hud['iconName'] = 'HUD';
export default Hud;
