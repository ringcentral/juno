import { useTheme, PaletteType } from '@material-ui/core';
import React, { forwardRef, memo } from 'react';
import DefaultGdriveD from './DefaultGdriveD';

const DefaultGdrive = memo(
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
        <DefaultGdriveD {...props} ref={svgRef} />
      ) : (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          {...props}
        >
          <path
            fill="var(--color3, #fff)"
            opacity={0.992}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color57, #a7aaae)"
            opacity={0.16}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color22, #ffc107)"
            d="M13.333 8.889h5.778l5.778 9.778h-5.778z"
          />
          <path
            fill="var(--color23, #1976d2)"
            d="M9.778 24l3.039-5.333h12.072L21.878 24z"
          />
          <path
            fill="var(--color24, #4caf50)"
            d="M7.111 19.015L10.021 24 16 13.926l-2.963-5.037z"
          />
        </svg>
      );
    },
  ),
);
DefaultGdrive.displayName = 'DefaultGdrive';
DefaultGdrive['iconName'] = 'default-gdrive';
export default DefaultGdrive;
