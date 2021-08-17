import React, { forwardRef, memo } from 'react';

const TaskNew = memo(
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
        <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm6.376 9.741a1 1 0 00-1.32-.083l-.094.083-6.365 6.363-3.535-3.535a.999.999 0 00-1.497 1.32l.083.094 4.243 4.243a.99.99 0 00.531.277l.117.014h.118l.117-.014a.99.99 0 00.436-.194l.094-.083 7.071-7.071a.999.999 0 000-1.414z" />
      </svg>
    ),
  ),
);
TaskNew.displayName = 'TaskNew';
TaskNew['iconName'] = 'task-new';
export default TaskNew;
