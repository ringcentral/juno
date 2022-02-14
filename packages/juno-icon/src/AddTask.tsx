import React, { forwardRef, memo } from 'react';

const AddTask = memo(
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
        <path d="M16 2c7.732 0 14 6.268 14 14 0 .968-.098 1.914-.285 2.827a6.986 6.986 0 00-1.824-1.204c.072-.531.109-1.072.109-1.623 0-6.627-5.373-12-12-12S4 9.373 4 16s5.373 12 12 12c1.039 0 2.047-.132 3.008-.38a7.02 7.02 0 001.406 1.669A13.947 13.947 0 0116 30C8.268 30 2 23.732 2 16S8.268 2 16 2zm9 17a1 1 0 011 1v3h3a1 1 0 010 2h-3.001L26 28a1 1 0 01-2 0l-.001-3H21a1 1 0 010-2h3v-3a1 1 0 011-1zm-2.624-7.259a.999.999 0 010 1.414l-7.071 7.071a.99.99 0 01-.531.277l-.117.014h-.118a.997.997 0 01-.648-.291l-4.243-4.243a.999.999 0 111.414-1.414l3.535 3.535 6.365-6.363a.999.999 0 011.414 0z" />
      </svg>
    ),
  ),
);
AddTask.displayName = 'AddTask';
AddTask['iconName'] = 'add-task';
export default AddTask;
