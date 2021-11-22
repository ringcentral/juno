import React, { forwardRef, memo } from 'react';

import { PaletteType, useTheme } from '@material-ui/core';

import DefaultMusicD from './DefaultMusicD';

const DefaultMusic = memo(
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
        <DefaultMusicD {...props} ref={svgRef} />
      ) : (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          {...props}
        >
          <path
            fill="var(--color29, #fff)"
            opacity={0.992}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color52, #4975ed)"
            opacity={0.16}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color53, #4b77f1)"
            d="M22.222 7.111a2.667 2.667 0 012.667 2.667v12.444a2.667 2.667 0 01-2.667 2.667H9.778a2.667 2.667 0 01-2.667-2.667V9.778a2.667 2.667 0 012.667-2.667h12.444zm-1.429 2.676l-8 1.778a.444.444 0 00-.348.434v7.032a2.567 2.567 0 00-1.333-.364c-1.225 0-2.222.797-2.222 1.778s.997 1.778 2.222 1.778 2.222-.797 2.222-1.778v-5.422l7.111-1.581v3.811a2.567 2.567 0 00-1.333-.364c-1.226 0-2.222.797-2.222 1.778s.996 1.778 2.222 1.778 2.222-.797 2.222-1.778v-8.445a.443.443 0 00-.54-.434z"
          />
        </svg>
      );
    },
  ),
);
DefaultMusic.displayName = 'DefaultMusic';
DefaultMusic['iconName'] = 'default-music';
export default DefaultMusic;
