import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Logout = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M8 29h16a2.002 2.002 0 0 0 2-2v-2a1 1 0 0 0-2 0v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0V5a2.002 2.002 0 0 0-2-2H8a2.002 2.002 0 0 0-2 2v22a2.002 2.002 0 0 0 2 2zm15.615-9.121L26.494 17H13.322a1 1 0 0 1 0-2h13.172l-2.879-2.879a1 1 0 0 1 1.414-1.414l4.586 4.586a.999.999 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414-1.414z" />
    </svg>
  )),
);
Logout.displayName = 'Logout';
Logout['iconName'] = 'Logout';
export default Logout;
