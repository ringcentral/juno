import React, { forwardRef, memo } from 'react';

const TeamBorder = memo(
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
        <path d="M8 19c-4.346 0-8 3.045-8 7a2 2 0 002 2l6.536.001a3.98 3.98 0 01-.527-1.73L8 26c-3.576.011-5.455.011-5.637 0-.272-.017-.363-.289-.324-.574C2.381 22.935 4.919 21 8 21c.452 0 .892.042 1.315.12.358-.62.784-1.204 1.267-1.747A9.02 9.02 0 008 19zm13-2c-5.981 0-11 3.904-11 9a2 2 0 002 2h18a2 2 0 002-2c0-5.096-5.019-9-11-9zm0 2c4.707 0 8.571 2.811 8.967 6.393.053.479-.253.607-.448.607H12.28c-.177 0-.279-.209-.264-.416C12.293 21.912 16.209 19 21 19zM8 7a5 5 0 10.001 10.001A5 5 0 008 7zm13-4a6 6 0 100 12 6 6 0 000-12zM8 9a3 3 0 110 6 3 3 0 010-6zm13-4a4 4 0 110 8 4 4 0 010-8z" />
      </svg>
    ),
  ),
);
TeamBorder.displayName = 'TeamBorder';
TeamBorder['iconName'] = 'team_border';
export default TeamBorder;
