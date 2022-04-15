import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Email = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28 5a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h24zM4 9.032v13.744l7.698-7.146 1.529 1.31-8.601 7.988A.992.992 0 0 0 5 25h22c.132 0 .259-.026.374-.072l-8.602-7.988-.82.704-.149.12a3 3 0 0 1-3.599.005l-.157-.126L3.999 9.031zm24-.001-7.699 6.599L28 22.779V24l-.007.122A.987.987 0 0 0 28 24V9.031zM27 7H5a.98.98 0 0 0-.255.033l10.701 9.166a1 1 0 0 0 1.097.007l.107-.08 10.605-9.092a.982.982 0 0 0-.256-.033z" />
    </svg>
  )),
);
Email.displayName = 'Email';
Email['iconName'] = 'email';
export default Email;
