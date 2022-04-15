import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const GoogleDocD = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fill="#223442"
        d="M3.556 0h24.889a3.556 3.556 0 0 1 3.556 3.556v24.889a3.556 3.556 0 0 1-3.556 3.556H3.556A3.556 3.556 0 0 1 0 28.445V3.556A3.556 3.556 0 0 1 3.556 0z"
      />
      <path
        fill="#2196f3"
        d="m16.759 8.023 5.463 5.114v8.889c0 .605-.215.933-.627 1.349s-.918.624-1.518.624h-8.171c-.6 0-1.106-.208-1.518-.624s-.61-.743-.61-1.349v-11.87c0-.606.206-1.116.619-1.533s.918-.624 1.518-.624l4.844.023z"
      />
      <path
        fill="#f1f1f1"
        d="M16.494 20.148v.988h-4.938v-.988h4.938zm3.95-1.975v.988h-8.889v-.988h8.889zm0-1.975v.988h-8.889v-.988h8.889zm0-1.976v.988h-8.889v-.988h8.889z"
      />
    </svg>
  )),
);
GoogleDocD.displayName = 'GoogleDocD';
GoogleDocD['iconName'] = 'google-doc-D';
export default GoogleDocD;
