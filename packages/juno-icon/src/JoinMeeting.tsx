import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const JoinMeeting = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M27.556 5.333A2.667 2.667 0 0 1 30.223 8v16a2.667 2.667 0 0 1-2.667 2.667H8A2.667 2.667 0 0 1 5.333 24v-4.444h1.778V24c0 .456.343.832.785.883l.104.006h19.556a.889.889 0 0 0 .883-.785l.006-.104V8a.889.889 0 0 0-.785-.883l-.104-.006H8a.889.889 0 0 0-.883.785L7.111 8v4.444H5.333V8A2.667 2.667 0 0 1 8 5.333h19.556zM12.597 11.34l3.619 3.619a.91.91 0 0 1 .172.241.89.89 0 0 1 0 1.602.863.863 0 0 1-.171.241l-3.619 3.619a.889.889 0 0 1-1.257-1.257l2.513-2.515H2.667a.889.889 0 1 1 0-1.778h11.187l-2.513-2.514a.889.889 0 0 1 1.257-1.257z" />
    </svg>
  )),
);
JoinMeeting.displayName = 'JoinMeeting';
JoinMeeting['iconName'] = 'join_meeting';
export default JoinMeeting;
