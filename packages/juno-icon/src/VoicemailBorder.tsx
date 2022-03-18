import React, { forwardRef, memo } from 'react';

const VoicemailBorder = memo(
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
        <path d="M8 22a7 7 0 114.897-1.998h6.205A7 7 0 1123.999 22h-16zm0-12a5 5 0 10.001 10.001A5 5 0 008 10zm16 0a5 5 0 10.001 10.001A5 5 0 0024 10z" />
      </svg>
    ),
  ),
);
VoicemailBorder.displayName = 'VoicemailBorder';
VoicemailBorder['iconName'] = 'voicemail_border';
export default VoicemailBorder;
