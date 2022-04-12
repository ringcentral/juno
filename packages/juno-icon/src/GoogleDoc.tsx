import { useTheme, PaletteType } from '@material-ui/core';
import React, { forwardRef, memo } from 'react';
import GoogleDocD from './GoogleDocD';

const GoogleDoc = memo(
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
        <GoogleDocD {...props} ref={svgRef} />
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
            fill="var(--color36, #2196f3)"
            opacity={0.16}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color36, #2196f3)"
            d="M11.915 8l4.844.023 5.463 5.114v8.889c0 .605-.215.933-.627 1.349s-.918.624-1.518.624h-8.171c-.6 0-1.106-.208-1.518-.624s-.61-.743-.61-1.349v-11.87c0-.606.206-1.116.619-1.533s.918-.624 1.518-.624zm4.579 12.148h-4.938v.988h4.938v-.988zm3.95-1.975h-8.889v.988h8.889v-.988zm0-1.975h-8.889v.988h8.889v-.988zm0-1.976h-8.889v.988h8.889v-.988z"
          />
        </svg>
      );
    },
  ),
);
GoogleDoc.displayName = 'GoogleDoc';
GoogleDoc['iconName'] = 'google-doc';
export default GoogleDoc;
