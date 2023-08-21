import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Reminder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M10.582 2.406a1.002 1.002 0 0 1-.207 1.398l-.003.002-6.778 5a1 1 0 0 1-1.19-1.608l.003-.002 6.778-5a.998.998 0 0 1 1.397.208l.002.003zm10.835 0a1 1 0 0 1 1.401-.208l-.003-.002 6.778 5a1 1 0 1 1-1.191 1.607l.003.002-6.777-5a1 1 0 0 1-.21-1.401l-.002.003zM28 18c0 6.627-5.373 12-12 12S4 24.627 4 18 9.373 6 16 6s12 5.373 12 12zm-11-7a1 1 0 0 0-2 0v6a2 2 0 0 0 2 2h4.5a1 1 0 0 0 0-2H17v-6z" />
    </svg>
  )),
);
Reminder.displayName = 'Reminder';
Reminder['iconName'] = 'reminder';
export default Reminder;
