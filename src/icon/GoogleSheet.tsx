import { useTheme, PaletteType } from '@material-ui/core';
import React, { forwardRef, memo } from 'react';
import GoogleSheetD from './GoogleSheetD';

const GoogleSheet = memo(
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
        <GoogleSheetD {...props} ref={svgRef} />
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
            fill="var(--color34, #43a047)"
            opacity={0.16}
            d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
          />
          <path
            fill="var(--color34, #43a047)"
            d="M11.915 8l4.844.023 5.463 5.114v8.889c0 .605-.215.933-.627 1.349s-.918.624-1.518.624h-8.171c-.6 0-1.106-.208-1.518-.624s-.61-.743-.61-1.349v-11.87c0-.606.206-1.116.619-1.533s.918-.624 1.518-.624zm7.542 6.222h-7.901v6.914h8.889v-6.914h-.988zm-6.914.988h1.975v.988h-1.975v-.988zm0 1.975h1.975v.988h-1.975v-.988zm0 1.975h1.975v.988h-1.975v-.988zm6.914.988h-3.951v-.988h3.951v.988zm0-1.975h-3.951v-.988h3.951v.988zm0-1.975h-3.951v-.988h3.951v.988z"
          />
        </svg>
      );
    },
  ),
);
GoogleSheet.displayName = 'GoogleSheet';
GoogleSheet['iconName'] = 'google-sheet';
export default GoogleSheet;
