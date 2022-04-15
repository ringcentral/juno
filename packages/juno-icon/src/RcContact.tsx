import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const RcContact = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fill="#f80"
        d="M28 4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-7.586a.997.997 0 0 0-.707.293l-3.141 3.141a.8.8 0 0 1-1.131 0l-3.141-3.141a1 1 0 0 0-.707-.293H4.001a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h24z"
      />
    </svg>
  )),
);
RcContact.displayName = 'RcContact';
RcContact['iconName'] = 'rc_contact';
export default RcContact;
