import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Voicemail = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M8 23a7 7 0 1 1 6.326-3.999h3.348A7 7 0 1 1 24 23H8zm0-10a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm16 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
    </svg>
  )),
);
Voicemail.displayName = 'Voicemail';
Voicemail['iconName'] = 'voicemail';
export default Voicemail;
