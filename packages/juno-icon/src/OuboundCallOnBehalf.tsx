import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const OuboundCallOnBehalf = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M12 17c1.439 0 2.822.226 4.092.64a3.383 3.383 0 0 0-.114.775l-.001.175-.105.058c-.338.195-.64.447-.893.744A11.371 11.371 0 0 0 12 19c-4.878 0-8.85 3.019-8.996 6.786L3 26l13.564.001a3.444 3.444 0 0 0 1.308 1.35l.106.058.001.175c.004.14.017.278.038.416H3.001a2 2 0 0 1-2-2c0-5.096 5.019-9 11-9zm17.979-2A1.02 1.02 0 0 1 31 16.021v8.165a1.02 1.02 0 1 1-2.042 0l.001-5.7-7.217 7.216a1.02 1.02 0 1 1-1.443-1.443l7.217-7.216-5.701-.001a1.02 1.02 0 1 1 0-2.042h8.165zM12 3a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    </svg>
  )),
);
OuboundCallOnBehalf.displayName = 'OuboundCallOnBehalf';
OuboundCallOnBehalf['iconName'] = 'oubound_call_on_behalf';
export default OuboundCallOnBehalf;
