import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ReminderBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M10.371 3.805 3.597 8.803a1 1 0 1 1-1.191-1.608l6.775-4.998a1 1 0 1 1 1.189 1.608zm12.445-1.61 6.781 5.002A.998.998 0 0 1 29.001 9a.993.993 0 0 1-.594-.195l-6.78-5.002A.998.998 0 0 1 22.223 2a.99.99 0 0 1 .593.195zM17 11v6h4.5a1 1 0 0 1 0 2H17a2 2 0 0 1-2-2v-6a1 1 0 0 1 2 0zm9 7c0-5.523-4.477-10-10-10S6 12.477 6 18s4.477 10 10 10 10-4.477 10-10zm2 0c0 6.627-5.373 12-12 12S4 24.627 4 18 9.373 6 16 6s12 5.373 12 12z" />
    </svg>
  )),
);
ReminderBorder.displayName = 'ReminderBorder';
ReminderBorder['iconName'] = 'reminder_border';
export default ReminderBorder;
