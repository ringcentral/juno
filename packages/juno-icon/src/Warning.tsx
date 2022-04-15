import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Warning = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16.999 4.27c.304.176.557.428.733.733l11.537 19.998a2 2 0 0 1-1.732 3H4.463a2 2 0 0 1-1.732-2.999L14.268 5.004A2 2 0 0 1 17 4.271zM16 22a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-10a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z" />
    </svg>
  )),
);
Warning.displayName = 'Warning';
Warning['iconName'] = 'warning';
export default Warning;
