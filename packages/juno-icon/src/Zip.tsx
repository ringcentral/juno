import { useTheme, PaletteType } from '@material-ui/core';
import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
import ZipD from './ZipD';

const Zip = memo(
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
        <ZipD {...props} ref={ref} />
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
            fill="#4475fd"
            opacity={0.16}
            d="M3.556 0h24.889a3.556 3.556 0 0 1 3.556 3.556v24.889a3.556 3.556 0 0 1-3.556 3.556H3.556A3.556 3.556 0 0 1 0 28.445V3.556A3.556 3.556 0 0 1 3.556 0z"
          />
          <path
            fill="#4475fd"
            d="m16.756 8 5.466 4.962-.024 8.878c0 .607-.204 1.118-.612 1.535s-.909.625-1.503.625h-8.154c-.594 0-1.095-.209-1.503-.625s-.612-.929-.612-1.535l-.035-11.661c0-.607.204-1.118.612-1.535s.909-.625 1.503-.625l1.44-.005v1.765h-1.778v.889h1.778v1.778h-1.778v.889h1.778v1.778h-1.778v.889h1.778v1.778h-1.778v.889H16v-.889h-1.778v-1.778H16v-.889h-1.778v-1.778H16v-.889h-1.778v-1.778H16v-.889h-1.778V8.01l2.534-.009z"
          />
        </svg>
      );
    },
  ),
);
Zip.displayName = 'Zip';
Zip['iconName'] = 'zip';
export default Zip;
