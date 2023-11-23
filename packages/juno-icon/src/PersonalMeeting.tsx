import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PersonalMeeting = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M22.222 6.222a2.667 2.667 0 0 1 2.667 2.667v2.153l3.17-1.672a1.777 1.777 0 0 1 2.163 1.736v9.79a1.778 1.778 0 0 1-2.164 1.736l-3.17-1.673v2.154a2.667 2.667 0 0 1-2.667 2.667H4.443a2.667 2.667 0 0 1-2.667-2.667V8.891a2.667 2.667 0 0 1 2.667-2.667h17.778zm0 1.778H4.444a.889.889 0 0 0-.883.785l-.006.104v14.222c0 .456.343.832.785.883l.104.006h17.778a.889.889 0 0 0 .883-.785l.006-.104V8.889a.889.889 0 0 0-.785-.883L22.222 8zm6.222 3.105-3.556 1.877v6.037l3.556 1.876v-9.79z" />
      <path d="M14.373 16.369c1.169-.403 1.925-1.453 1.925-2.837 0-3.971-6.042-3.971-6.042 0 0 1.384.756 2.434 1.925 2.837-3.097.343-3.381 2.204-3.381 4.415h1.493c0-2.049 0-2.985 2.985-2.985s2.984.936 2.984 2.985h1.493c0-2.211-.284-4.072-3.381-4.415zm-2.624-2.836c0-1.131.823-1.533 1.528-1.533s1.528.402 1.528 1.533c0 .958-.571 1.531-1.528 1.531s-1.528-.573-1.528-1.531z" />
    </svg>
  )),
);
PersonalMeeting.displayName = 'PersonalMeeting';
PersonalMeeting['iconName'] = 'personal-meeting';
export default PersonalMeeting;
