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
      <path d="M7 24v-.016a7.5 7.5 0 1 1 5.598-1.983h6.804a7.5 7.5 0 1 1 5.599 1.983L25 24H7zm.5-13a5.5 5.5 0 1 0 0 11 5.5 5.5 0 1 0 0-11zm17 0a5.5 5.5 0 1 0 0 11 5.5 5.5 0 1 0 0-11z" />
    </svg>
  )),
);
VoicemailBorder.displayName = 'VoicemailBorder';
VoicemailBorder['iconName'] = 'voicemail_border';
export default VoicemailBorder;
