import React, { forwardRef, memo } from 'react';

const DeletedFileD = memo(
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
          fill="var(--color11, #30323a)"
          d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
        />
        <path
          fill="var(--color12, #8f9199)"
          d="M17.778 8c.982 0 1.778.796 1.778 1.778v.889h3.556a.889.889 0 110 1.778h-.889v9.778c0 .982-.796 1.778-1.778 1.778h-8.889a1.778 1.778 0 01-1.778-1.778v-9.778h-.889a.889.889 0 110-1.778h3.556v-.889c0-.982.796-1.778 1.778-1.778h3.555zm0 6.222a.889.889 0 00-.883.785l-.006.104v5.333a.889.889 0 001.772.104l.006-.104v-5.333a.889.889 0 00-.889-.889zm-3.556 0a.889.889 0 00-.883.785l-.006.104v5.333a.889.889 0 001.772.104l.006-.104v-5.333a.889.889 0 00-.889-.889zm3.556-4.444h-3.556v.889h3.556v-.889z"
        />
      </svg>
    ),
  ),
);
DeletedFileD.displayName = 'DeletedFileD';
DeletedFileD['iconName'] = 'deleted_file_D';
export default DeletedFileD;
