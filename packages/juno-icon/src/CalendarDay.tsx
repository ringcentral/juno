import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const CalendarDay = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M26 4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20zm-1 2H7a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-3 9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h12zm-1 2H11v4h10v-4zm1-8a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2h12z" />
    </svg>
  )),
);
CalendarDay.displayName = 'CalendarDay';
CalendarDay['iconName'] = 'calendar-day';
export default CalendarDay;
