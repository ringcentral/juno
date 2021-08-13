import React, { forwardRef, memo } from 'react';
import { useTheme } from '../foundation';
import { PaletteType } from '@material-ui/core';
import ImagePreviewD from './ImagePreviewD';

const ImagePreview = memo(
  forwardRef(
    (
      inProps: React.SVGProps<SVGSVGElement> & {
        themeType?: PaletteType;
      },
      svgRef?: React.Ref<SVGSVGElement>,
    ) => {
      const theme = useTheme();
      const { themeType = theme.palette.type, ...props } = inProps;
      return themeType === 'dark' ? (
        <ImagePreviewD {...props} ref={svgRef} />
      ) : (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          {...props}
        >
          <path
            fill="var(--color25, #fff)"
            opacity={0.992}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color52, #a7aaae)"
            opacity={0.16}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color52, #a7aaae)"
            d="M16.756 8l5.466 4.962-.024 8.878c0 .607-.204 1.118-.612 1.535s-.909.625-1.503.625h-8.154c-.594 0-1.095-.209-1.503-.625s-.612-.929-.612-1.535l-.035-11.661c0-.607.204-1.118.612-1.535s.909-.625 1.503-.625l4.862-.018zm.637 6.633l-2.153 4.02-1.562-2.081-2.209 3.896h5.134l-.012-.015 3.789.001-2.987-5.82zm-3.615-2.189a1.333 1.333 0 100 2.667 1.333 1.333 0 000-2.667z"
          />
        </svg>
      );
    },
  ),
);
ImagePreview.displayName = 'ImagePreview';
ImagePreview['iconName'] = 'image-preview';
export default ImagePreview;
