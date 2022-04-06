import { useTheme, PaletteType } from '@material-ui/core';
import React, { forwardRef, memo } from 'react';
import DefaultBoxD from './DefaultBoxD';

const DefaultBox = memo(
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
        <DefaultBoxD {...props} ref={svgRef} />
      ) : (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
          {...props}
        >
          <path
            fill="var(--color2, #fff)"
            opacity={0.992}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color60, #a7aaae)"
            opacity={0.16}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color21, #0061d5)"
            d="M4.959 9C4.419 9 4 9.419 4 9.897v7.531a4.586 4.586 0 004.589 4.483h.025-.001a4.718 4.718 0 004.123-2.427l.012-.024c.779 1.434 2.337 2.451 4.074 2.451 2.577 0 4.674-2.032 4.674-4.602.06-2.451-2.037-4.484-4.613-4.484-1.738 0-3.295.957-4.074 2.391-.78-1.434-2.338-2.391-4.135-2.391a4.935 4.935 0 00-2.817.897V9.897A.92.92 0 004.96 9h-.001zm16.643 3.728a.944.944 0 00-.707.16l.003-.002c-.36.299-.479.897-.18 1.315l2.397 3.108-2.396 3.107c-.3.419-.24.958.18 1.257.419.299 1.016.297 1.316-.122l2.039-2.63 2.096 2.69c.3.359.899.418 1.318.12.36-.299.42-.838.121-1.256l-2.338-3.107 2.338-3.05c.3-.418.298-1.016-.121-1.315-.48-.299-1.019-.239-1.318.18l-2.096 2.57-2.04-2.688a1.001 1.001 0 00-.612-.337zM8.613 14.617c1.558 0 2.817 1.257 2.817 2.751 0 1.554-1.259 2.749-2.817 2.749s-2.816-1.195-2.816-2.749c0-1.494 1.258-2.751 2.816-2.751zm8.27 0c1.558 0 2.816 1.257 2.816 2.751-.06 1.554-1.318 2.749-2.816 2.749-1.558 0-2.817-1.195-2.817-2.749 0-1.494 1.259-2.751 2.817-2.751z"
          />
        </svg>
      );
    },
  ),
);
DefaultBox.displayName = 'DefaultBox';
DefaultBox['iconName'] = 'default-box';
export default DefaultBox;
