import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PinWindow = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M17 5a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V15a1 1 0 0 1 2 0v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12zm9.5-4a4.5 4.5 0 1 1-2.398 8.309l-5.987 5.986a.998.998 0 0 1-1.493-1.316l.083-.094 5.986-5.987A4.5 4.5 0 0 1 26.5 1zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />
    </svg>
  )),
);
PinWindow.displayName = 'PinWindow';
PinWindow['iconName'] = 'pin-window';
export default PinWindow;
