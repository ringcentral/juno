import React, { forwardRef, memo } from 'react';

const Deletenumber = memo(
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
        <path d="M28 6a2 2 0 012 2v16a2 2 0 01-2 2H10.891a2.003 2.003 0 01-1.487-.662l-7.2-8a2 2 0 010-2.676l7.2-8c.379-.421.92-.662 1.487-.662H28zm-1 2H11.336a.996.996 0 00-.743.331l-6.3 7a1 1 0 000 1.338l6.3 7a1 1 0 00.743.331H27a1 1 0 001-1V9a1 1 0 00-1-1zm-10.536 3.05L20 14.584l3.536-3.534a.999.999 0 111.414 1.414l-3.536 3.534 3.536 3.537a.999.999 0 11-1.414 1.414L20 17.412l-3.536 3.537a.999.999 0 11-1.414-1.414l3.536-3.537-3.536-3.534a.999.999 0 111.414-1.414z" />
      </svg>
    ),
  ),
);
Deletenumber.displayName = 'Deletenumber';
Deletenumber['iconName'] = 'deletenumber';
export default Deletenumber;
