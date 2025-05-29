import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ContactCenter = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M6.559 18.72a4.8 4.8 0 0 1 4.8 4.8c0 .868-.234 1.68-.637 2.383A10.748 10.748 0 0 0 16 27.279c1.16 0 2.276-.185 3.323-.523l.684 1.88a12.771 12.771 0 0 1-4.008.644c-2.435 0-4.711-.68-6.648-1.861a4.772 4.772 0 0 1-2.792.902 4.8 4.8 0 1 1 0-9.6zM23.789 6.284c4.116 3.128 5.831 8.308 4.719 13.091a4.799 4.799 0 0 1-5.677 7.739 4.8 4.8 0 0 1 3.816-8.611c.744-3.893-.697-8.031-4.008-10.583l1.15-1.636zM16 0a4.8 4.8 0 1 1-4.438 6.633A10.803 10.803 0 0 0 5.212 16h-2c.191-5.166 3.441-9.549 7.992-11.391A4.798 4.798 0 0 1 15.999 0z" />
    </svg>
  )),
);
ContactCenter.displayName = 'ContactCenter';
ContactCenter['iconName'] = 'ContactCenter';
export default ContactCenter;
