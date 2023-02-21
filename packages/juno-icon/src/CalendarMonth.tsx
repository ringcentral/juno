import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const CalendarMonth = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M26 4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20zm-1 2H7a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-15 9a2 2 0 1 1 .001 3.999A2 2 0 0 1 10 15zm6 0a2 2 0 1 1 .001 3.999A2 2 0 0 1 16 15zm-6-6a2 2 0 1 1 .001 3.999A2 2 0 0 1 10 9zm6 0a2 2 0 1 1 .001 3.999A2 2 0 0 1 16 9zm6 0a2 2 0 1 1 .001 3.999A2 2 0 0 1 22 9z" />
    </svg>
  )),
);
CalendarMonth.displayName = 'CalendarMonth';
CalendarMonth['iconName'] = 'calendar-month';
export default CalendarMonth;
