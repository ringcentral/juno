import React, { forwardRef, memo } from 'react';

const File = memo(
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
        <path d="M30 14v12a2 2 0 01-2 2H4a2 2 0 01-2-2V14h28zM2 6a2 2 0 012-2h7.821a2 2 0 011.459.632l1.923 2.052a.996.996 0 00.612.309l.118.007H28a2 2 0 012 2v3H2V6z" />
      </svg>
    ),
  ),
);
File.displayName = 'File';
File['iconName'] = 'file';
export default File;
