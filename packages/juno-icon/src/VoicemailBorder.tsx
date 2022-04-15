import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const VoicemailBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M8 22a7 7 0 1 1 4.897-1.998h6.205A7 7 0 1 1 23.999 22h-16zm0-12a5 5 0 1 0 .001 10.001A5 5 0 0 0 8 10zm16 0a5 5 0 1 0 .001 10.001A5 5 0 0 0 24 10z" />
    </svg>
  )),
);
VoicemailBorder.displayName = 'VoicemailBorder';
VoicemailBorder['iconName'] = 'voicemail_border';
export default VoicemailBorder;
