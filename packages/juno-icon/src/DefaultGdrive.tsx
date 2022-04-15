import { useTheme, PaletteType } from '@material-ui/core';
import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
import DefaultGdriveD from './DefaultGdriveD';

const DefaultGdrive = memo(
  forwardRef(
    (
      inProps: SVGProps<SVGSVGElement> & {
        themeType?: PaletteType;
      },
      ref: Ref<SVGSVGElement>,
    ) => {
      const theme = useTheme();
      const { themeType = theme.palette.type, ...props } = inProps;
      return themeType === 'dark' ? (
        <DefaultGdriveD {...props} ref={ref} />
      ) : (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          ref={ref}
          {...props}
        >
          <path
            fill="#fff"
            opacity={0.992}
            d="M3.556 0h24.889a3.556 3.556 0 0 1 3.556 3.556v24.889a3.556 3.556 0 0 1-3.556 3.556H3.556A3.556 3.556 0 0 1 0 28.445V3.556A3.556 3.556 0 0 1 3.556 0z"
          />
          <path
            fill="#a7aaae"
            opacity={0.16}
            d="M3.556 0h24.889a3.556 3.556 0 0 1 3.556 3.556v24.889a3.556 3.556 0 0 1-3.556 3.556H3.556A3.556 3.556 0 0 1 0 28.445V3.556A3.556 3.556 0 0 1 3.556 0z"
          />
          <path fill="#ffc107" d="M13.333 8.889h5.778l5.778 9.778h-5.778z" />
          <path fill="#1976d2" d="m9.778 24 3.039-5.333h12.072L21.878 24z" />
          <path
            fill="#4caf50"
            d="M7.111 19.015 10.021 24 16 13.926l-2.963-5.037z"
          />
        </svg>
      );
    },
  ),
);
DefaultGdrive.displayName = 'DefaultGdrive';
DefaultGdrive['iconName'] = 'default-gdrive';
export default DefaultGdrive;
