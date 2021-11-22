import React, { forwardRef, memo } from 'react';

import { PaletteType, useTheme } from '@material-ui/core';

import DocD from './DocD';

const Doc = memo(
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
        <DocD {...props} ref={svgRef} />
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
            fill="var(--color44, #4169a1)"
            opacity={0.16}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color44, #4169a1)"
            d="M11.919 8c-.601 0-1.108.208-1.522.624s-.62.927-.62 1.532v11.688c0 .605.207 1.116.62 1.532s.921.624 1.522.624h8.161c.601 0 1.108-.208 1.522-.624s.62-.927.62-1.532v-9.059L16.671 8h-4.752zm5.09 12.53l-1.202-4.842h-.038l-1.24 4.842h-1.052l-1.954-6.128h1.09l1.39 5.031 1.24-5.031h1.09l1.277 5.031L19 14.402h1.014l-1.916 6.128h-1.09z"
          />
        </svg>
      );
    },
  ),
);
Doc.displayName = 'Doc';
Doc['iconName'] = 'doc';
export default Doc;
