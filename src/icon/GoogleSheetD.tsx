import React, { forwardRef, memo } from 'react';

const GoogleSheetD = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        {...props}
      >
        <path
          fill="var(--color29, #1e2f1f)"
          d="M3.556 0h24.889a3.556 3.556 0 013.556 3.556v24.889a3.556 3.556 0 01-3.556 3.556H3.556A3.556 3.556 0 010 28.445V3.556A3.556 3.556 0 013.556 0z"
        />
        <path
          fill="var(--color30, #43a047)"
          d="M11.915 8l4.844.023 5.463 5.114v8.889c0 .605-.215.933-.627 1.349s-.918.624-1.518.624h-8.171c-.6 0-1.106-.208-1.518-.624s-.61-.743-.61-1.349v-11.87c0-.606.206-1.116.619-1.533s.918-.624 1.518-.624z"
        />
        <path
          fill="var(--color20, #f1f1f1)"
          d="M20.444 14.222v6.914h-8.889v-6.914h8.889zm-5.926 4.938h-1.975v.988h1.975v-.988zm4.939 0h-3.951v.988h3.951v-.988zm-4.939-1.975h-1.975v.988h1.975v-.988zm4.939 0h-3.951v.988h3.951v-.988zm-4.939-1.975h-1.975v.988h1.975v-.988zm4.939 0h-3.951v.988h3.951v-.988z"
        />
      </svg>
    ),
  ),
);
GoogleSheetD.displayName = 'GoogleSheetD';
GoogleSheetD['iconName'] = 'google-sheet-D';
export default GoogleSheetD;
