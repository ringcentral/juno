import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const CalendarWeek = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M26 4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20zm-1 2H7a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM10 9a1 1 0 0 1 1 1v12a1 1 0 0 1-.883.993L10 23a1 1 0 0 1-1-1V10a1 1 0 0 1 .883-.993L10 9zm12 0a1 1 0 0 1 1 1v12a1 1 0 0 1-.883.993L22 23a1 1 0 0 1-1-1V10a1 1 0 0 1 .883-.993L22 9zm-6 0a1 1 0 0 1 1 1v12a1 1 0 0 1-.883.993L16 23a1 1 0 0 1-1-1V10a1 1 0 0 1 .883-.993L16 9z" />
    </svg>
  )),
);
CalendarWeek.displayName = 'CalendarWeek';
CalendarWeek['iconName'] = 'calendar-week';
export default CalendarWeek;
