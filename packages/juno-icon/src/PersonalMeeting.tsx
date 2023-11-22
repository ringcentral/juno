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
      <path d="M21 6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h18zm-1 2H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm10 1.618a1 1 0 0 1 .993.883l.007.117v10.764a1 1 0 0 1-1.34.94l-.107-.046-5-2.5a1 1 0 0 1-.545-.77L24 18.881v-5.764a1 1 0 0 1 .445-.832l.108-.063 5-2.5c.139-.069.292-.106.447-.106v.002zm-1 2.618-3 1.5v4.528l3 1.5v-7.528z" />
      <path d="M12.973 16.563c1.169-.403 1.925-1.453 1.925-2.837 0-3.971-6.042-3.971-6.042 0 0 1.384.756 2.434 1.925 2.837-3.097.343-3.381 2.204-3.381 4.415h1.493c0-2.049 0-2.985 2.985-2.985s2.985.936 2.985 2.985h1.493c0-2.211-.285-4.072-3.381-4.415zm-2.624-2.837c0-1.131.823-1.533 1.528-1.533s1.528.402 1.528 1.533c0 .958-.571 1.531-1.528 1.531s-1.528-.573-1.528-1.531z" />
    </svg>
  )),
);
PersonalMeeting.displayName = 'PersonalMeeting';
PersonalMeeting['iconName'] = 'personal-meeting';
export default PersonalMeeting;
