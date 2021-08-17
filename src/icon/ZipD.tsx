import React, { forwardRef, memo } from 'react';

const ZipD = memo(
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
          fill="var(--color14, #222b42)"
          d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
        />
        <path
          fill="var(--color31, #356afd)"
          d="M16.756 8l5.466 4.962-.024 8.878c0 .607-.204 1.118-.612 1.535s-.909.625-1.503.625h-8.154c-.594 0-1.095-.209-1.503-.625s-.612-.929-.612-1.535l-.035-11.661c0-.607.204-1.118.612-1.535s.909-.625 1.503-.625l1.44-.005v1.765h-1.778v.889h1.778v1.778h-1.778v.889h1.778v1.778h-1.778v.889h1.778v1.778h-1.778v.889H16v-.889h-1.778v-1.778H16v-.889h-1.778v-1.778H16v-.889h-1.778v-1.778H16v-.889h-1.778V8.01l2.534-.009z"
        />
        <path
          fill="var(--color20, #f1f1f1)"
          d="M13.333 8.012v1.766h-1.777v.889h1.777v1.777h-1.777v.889h1.777v1.778h-1.777V16h1.777v1.778h-1.777v.889H16v-.889h-1.778V16H16v-.889h-1.778v-1.778H16v-.889h-1.778v-1.778H16v-.888h-1.778V8.009z"
        />
      </svg>
    ),
  ),
);
ZipD.displayName = 'ZipD';
ZipD['iconName'] = 'zip-D';
export default ZipD;
