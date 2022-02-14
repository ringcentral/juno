import React, { forwardRef, memo } from 'react';

const AddTeamBorder = memo(
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
        <path d="M27 19a1 1 0 011 1v3h3a1 1 0 010 2h-3.001L28 28a1 1 0 01-2 0l-.001-3H23a1 1 0 010-2h3v-3a1 1 0 011-1zM8 19c.9 0 1.769.13 2.582.373a10.632 10.632 0 00-1.267 1.747A7.162 7.162 0 008 21c-3.081 0-5.619 1.935-5.961 4.426-.039.285.052.557.324.574l.1.003c.444.008 2.176.007 5.195-.002L7.999 26l.009.271a3.97 3.97 0 00.406 1.505l.121.225L1.999 28a2 2 0 01-2-2c0-3.955 3.654-7 8-7zm13-2c1.216 0 2.392.161 3.495.461-.925.355-1.755.9-2.443 1.587A11.391 11.391 0 0021 19c-4.791 0-8.708 2.912-8.984 6.584-.014.182.063.364.201.407l.063.009h8.01c.215.723.544 1.396.965 2H12a2 2 0 01-2-2c0-5.096 5.019-9 11-9zM8 7a5 5 0 11-.001 10.001A5 5 0 018 7zm13-4a6 6 0 110 12 6 6 0 010-12zM8 9a3 3 0 100 6 3 3 0 000-6zm13-4a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  ),
);
AddTeamBorder.displayName = 'AddTeamBorder';
AddTeamBorder['iconName'] = 'add-team_border';
export default AddTeamBorder;
