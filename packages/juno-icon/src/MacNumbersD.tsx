import React, { forwardRef, memo } from 'react';

const MacNumbersD = memo(
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
        <path
          fill="var(--color28, #2a3d27)"
          d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
        />
        <path
          fill="var(--color29, #54cb43)"
          d="M22.667 7.111c1.227 0 2.222.995 2.222 2.222v13.333a2.222 2.222 0 01-2.222 2.222H9.334a2.222 2.222 0 01-2.222-2.222V9.333c0-1.227.995-2.222 2.222-2.222h13.333z"
        />
        <path
          fill="var(--color30, #f1f1f1)"
          d="M22.389 21v.556H9.611V21h12.778zm-3.333-10.556v10h-2.778v-10h2.778zm-6.667 8.334v1.667H9.611v-1.667h2.778zM15.722 16v4.444h-2.778V16h2.778zm6.667-2.778v7.222h-2.778v-7.222h2.778z"
        />
      </svg>
    ),
  ),
);
MacNumbersD.displayName = 'MacNumbersD';
MacNumbersD['iconName'] = 'mac-numbers-D';
export default MacNumbersD;
