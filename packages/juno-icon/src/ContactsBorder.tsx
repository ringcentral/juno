import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ContactsBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 20c-3.209 0-6.025 1.306-7.618 3.272l.082.067c2.06 1.665 4.682 2.662 7.537 2.662s5.477-.997 7.537-2.662l.081-.066c-1.594-1.966-4.41-3.272-7.618-3.272zm8.199 2.763-.251.229a9.08 9.08 0 0 0 .251-.229zM16 4C9.373 4 4 9.373 4 16c0 3.011 1.109 5.763 2.941 7.87C8.94 21.506 12.285 20 16 20s7.059 1.506 9.059 3.868A11.948 11.948 0 0 0 28 16c0-6.627-5.373-12-12-12zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    </svg>
  )),
);
ContactsBorder.displayName = 'ContactsBorder';
ContactsBorder['iconName'] = 'contacts_border';
export default ContactsBorder;
