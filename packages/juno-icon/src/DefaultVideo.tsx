import { useTheme, PaletteType } from '@material-ui/core';
import React, { forwardRef, memo } from 'react';
import DefaultVideoD from './DefaultVideoD';

const DefaultVideo = memo(
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
        <DefaultVideoD {...props} ref={svgRef} />
      ) : (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          {...props}
        >
          <path
            fill="var(--color5, #fff)"
            opacity={0.992}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color60, #4975ed)"
            opacity={0.16}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color61, #4b77f1)"
            d="M16 7.111c-4.91 0-8.889 3.98-8.889 8.889S11.09 24.889 16 24.889a8.89 8.89 0 000-17.778zm3.497 9.66l-4.918 3.394c-.614.424-1.119.155-1.119-.597v-7.136c0-.752.505-1.021 1.119-.597l4.916 3.394c.614.424.615 1.118.002 1.542z"
          />
        </svg>
      );
    },
  ),
);
DefaultVideo.displayName = 'DefaultVideo';
DefaultVideo['iconName'] = 'default-video';
export default DefaultVideo;
