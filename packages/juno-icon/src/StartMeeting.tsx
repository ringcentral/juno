import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const StartMeeting = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M22.222 6.222a2.667 2.667 0 0 1 2.667 2.667v2.153l3.17-1.672a1.778 1.778 0 0 1 2.163 1.736v9.79a1.778 1.778 0 0 1-2.164 1.736l-3.17-1.673v2.154a2.667 2.667 0 0 1-2.667 2.667H4.443a2.667 2.667 0 0 1-2.667-2.667V8.891a2.667 2.667 0 0 1 2.667-2.667h17.778zm0 1.778H4.444a.889.889 0 0 0-.883.785l-.006.104v14.222c0 .456.343.832.785.883l.104.006h17.778a.889.889 0 0 0 .883-.785l.006-.104V8.889a.889.889 0 0 0-.785-.883L22.222 8zm6.222 3.105-3.556 1.877v6.037l3.556 1.877v-9.79zm-15.111.451c.491 0 .889.398.889.889v2.667h2.667a.889.889 0 1 1 0 1.778h-2.667v2.667a.889.889 0 1 1-1.778 0v-2.668l-2.667.001a.889.889 0 1 1 0-1.778l2.667-.001v-2.666c0-.491.398-.889.889-.889z" />
    </svg>
  )),
);
StartMeeting.displayName = 'StartMeeting';
StartMeeting['iconName'] = 'start_meeting';
export default StartMeeting;
