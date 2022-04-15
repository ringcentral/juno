import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ScheduleMeeting = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M24.889 5.333A2.667 2.667 0 0 1 27.556 8v16a2.667 2.667 0 0 1-2.667 2.667H7.111A2.667 2.667 0 0 1 4.444 24V8a2.667 2.667 0 0 1 2.667-2.667h17.778zm.889 8H6.222V24c0 .456.343.832.785.883l.104.006h17.778a.889.889 0 0 0 .883-.785l.006-.104V13.333zm-10.667 7.111a.889.889 0 1 1 0 1.778H9.778a.889.889 0 1 1 0-1.778h5.333zM22.222 16a.889.889 0 1 1 0 1.778H9.778a.889.889 0 1 1 0-1.778h12.444zm2.667-8.889H7.111a.889.889 0 0 0-.883.785L6.222 8v3.556h19.556V8a.889.889 0 0 0-.785-.883l-.104-.006z" />
    </svg>
  )),
);
ScheduleMeeting.displayName = 'ScheduleMeeting';
ScheduleMeeting['iconName'] = 'schedule_meeting';
export default ScheduleMeeting;
