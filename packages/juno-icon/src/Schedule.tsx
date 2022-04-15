import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Schedule = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 33 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M23.793 30.946a8.434 8.434 0 1 0-.001-16.867 8.434 8.434 0 0 0 .001 16.867zm0-3.2a5.233 5.233 0 1 1 0-10.466 5.233 5.233 0 0 1 0 10.466z" />
      <path d="M23.793 19.351c.582 0 1.054.472 1.054 1.054v1.054h1.054a1.054 1.054 0 0 1 0 2.108h-1.054v1.054a1.054 1.054 0 0 1-2.108 0v-1.054h-1.054a1.054 1.054 0 0 1 0-2.108h1.054v-1.054c0-.582.472-1.054 1.054-1.054zM1.431 10.24h23.04v3.2H1.431v-3.2zM8 0a1.6 1.6 0 0 1 1.6 1.6v1.92a1.6 1.6 0 1 1-3.2 0V1.6A1.6 1.6 0 0 1 8 0zM18.24 0a1.6 1.6 0 0 1 1.6 1.6v1.92a1.6 1.6 0 1 1-3.2 0V1.6a1.6 1.6 0 0 1 1.6-1.6z" />
      <path d="M1.6 3.84a1.6 1.6 0 0 1 1.6 1.6V24A1.6 1.6 0 1 1 0 24V5.44a1.6 1.6 0 0 1 1.6-1.6zM24.64 3.84a1.6 1.6 0 0 1 1.6 1.6v9.6a1.6 1.6 0 1 1-3.2 0v-9.6a1.6 1.6 0 0 1 1.6-1.6z" />
      <path d="M1.6 3.84h23.04a1.6 1.6 0 1 1 0 3.2H1.6a1.6 1.6 0 1 1 0-3.2zM1.6 22.4h14.72a1.6 1.6 0 1 1 0 3.2H1.6a1.6 1.6 0 1 1 0-3.2z" />
    </svg>
  )),
);
Schedule.displayName = 'Schedule';
Schedule['iconName'] = 'schedule';
export default Schedule;
