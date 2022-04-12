import { useTheme, PaletteType } from '@material-ui/core';
import React, { forwardRef, memo } from 'react';
import MacNumbersD from './MacNumbersD';

const MacNumbers = memo(
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
        <MacNumbersD {...props} ref={svgRef} />
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
            fill="var(--color29, #54cb43)"
            opacity={0.16}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color29, #54cb43)"
            d="M22.667 7.111c1.227 0 2.222.995 2.222 2.222v13.333a2.222 2.222 0 01-2.222 2.222H9.334a2.222 2.222 0 01-2.222-2.222V9.333c0-1.227.995-2.222 2.222-2.222h13.333zM22.389 21H9.611v.556h12.778V21zm-10-2.222H9.611v1.667h2.778v-1.667zM15.722 16h-2.778v4.444h2.778V16zm3.334-5.556h-2.778v10h2.778v-10zm3.333 2.778h-2.778v7.222h2.778v-7.222z"
          />
        </svg>
      );
    },
  ),
);
MacNumbers.displayName = 'MacNumbers';
MacNumbers['iconName'] = 'mac-numbers';
export default MacNumbers;
