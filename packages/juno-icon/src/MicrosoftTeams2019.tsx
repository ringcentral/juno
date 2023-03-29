import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const MicrosoftTeams2019 = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fill="#5059c9"
        d="M31 14.526v5.895c0 2.442-2.014 4.421-4.5 4.421S22 22.863 22 20.421v-7.368h7.5c.829 0 1.5.659 1.5 1.474zm-4.5-4.421c1.657 0 3-1.32 3-2.947s-1.343-2.947-3-2.947-3 1.32-3 2.947 1.343 2.947 3 2.947z"
      />
      <path
        fill="#7b83eb"
        d="M24.25 14.526v8.105c0 4.232-3.631 7.631-8 7.352-3.986-.253-7-3.681-7-7.605v-9.326h13.5c.829 0 1.5.659 1.5 1.474zm-7.5-3.684c2.486 0 4.5-1.979 4.5-4.421S19.236 2 16.75 2s-4.5 1.979-4.5 4.421 2.014 4.421 4.5 4.421z"
      />
      <path
        fill="#7b83eb"
        d="M21.25 6.421c0 2.442-2.015 4.421-4.5 4.421s-4.5-1.979-4.5-4.421S14.265 2 16.75 2s4.5 1.979 4.5 4.421z"
      />
      <path
        fill="#000"
        opacity={0.05}
        d="M17.5 22.867v-9.814H9.25v9.326c0 1.13.257 2.216.708 3.2h4.78c1.525 0 2.761-1.214 2.761-2.712z"
      />
      <path
        fill="#000"
        opacity={0.07}
        d="M9.25 13.053v9.326c0 .855.151 1.683.415 2.463h4.993c1.293 0 2.341-1.029 2.341-2.3v-9.49h-7.75z"
      />
      <path
        fill="#000"
        opacity={0.09}
        d="M16.5 13.053H9.25v9.326c0 .591.076 1.167.206 1.726h5.124c1.06 0 1.92-.844 1.92-1.886v-9.166h.001z"
      />
      <path
        fill="#5961c3"
        d="M14.5 23.369h-12c-.829 0-1.5-.659-1.5-1.474v-11.79c0-.814.671-1.474 1.5-1.474h12c.829 0 1.5.659 1.5 1.474v11.79c0 .814-.671 1.474-1.5 1.474z"
      />
      <path
        fill="#fff"
        d="M11.551 12.315H5.449v1.267h2.285v6.101h1.531v-6.101h2.285z"
      />
    </svg>
  )),
);
MicrosoftTeams2019.displayName = 'MicrosoftTeams2019';
MicrosoftTeams2019['iconName'] = 'microsoft-teams-2019';
export default MicrosoftTeams2019;
