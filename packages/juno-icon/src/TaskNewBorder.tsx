import React, { forwardRef, memo } from 'react';

const TaskNewBorder = memo(
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
        <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 2C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm6.376 7.741a.999.999 0 010 1.414l-7.071 7.071a.99.99 0 01-.531.277l-.117.014h-.118a.997.997 0 01-.648-.291l-4.243-4.243a.999.999 0 111.414-1.414l3.535 3.535 6.365-6.363a.999.999 0 011.414 0z" />
      </svg>
    ),
  ),
);
TaskNewBorder.displayName = 'TaskNewBorder';
TaskNewBorder['iconName'] = 'task-new_border';
export default TaskNewBorder;
