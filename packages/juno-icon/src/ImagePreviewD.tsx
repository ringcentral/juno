import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ImagePreviewD = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fill="#30323a"
        d="M3.556 0h24.889a3.556 3.556 0 0 1 3.556 3.556v24.889a3.556 3.556 0 0 1-3.556 3.556H3.556A3.556 3.556 0 0 1 0 28.445V3.556A3.556 3.556 0 0 1 3.556 0z"
      />
      <path
        fill="#8f9199"
        d="m16.756 8 5.466 4.962-.024 8.878c0 .607-.204 1.118-.612 1.535s-.909.625-1.503.625h-8.154c-.594 0-1.095-.209-1.503-.625s-.612-.929-.612-1.535l-.035-11.661c0-.607.204-1.118.612-1.535s.909-.625 1.503-.625l4.862-.018z"
      />
      <path
        fill="#f1f1f1"
        d="m17.393 14.633 2.987 5.82-3.789-.001.012.015h-5.134l2.209-3.896 1.562 2.081 2.153-4.02zm-3.615-2.189a1.333 1.333 0 1 1 0 2.667 1.333 1.333 0 0 1 0-2.667z"
      />
    </svg>
  )),
);
ImagePreviewD.displayName = 'ImagePreviewD';
ImagePreviewD['iconName'] = 'image-preview-D';
export default ImagePreviewD;
