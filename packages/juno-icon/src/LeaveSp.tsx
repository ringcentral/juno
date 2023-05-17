import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const LeaveSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M19.886 3.657A2.743 2.743 0 0 1 22.629 6.4v6.171h-2.057V6.4a.686.686 0 0 0-.562-.675l-.123-.011h-7.883l4.453 1.573a2.057 2.057 0 0 1 1.372 1.94v14.316h2.057a.686.686 0 0 0 .675-.562l.011-.123v-4.114h2.057v4.114a2.743 2.743 0 0 1-2.743 2.743h-2.057v1.207a2.057 2.057 0 0 1-2.742 1.94l-7.085-2.501a2.743 2.743 0 0 1-1.83-2.587V6.401a2.743 2.743 0 0 1 2.743-2.743h10.971zm5.182 7.031 5.017 5.013-5.017 5.013-1.454-1.454 2.6-2.6-7.014.027V14.63l6.872-.027-2.458-2.46 1.454-1.454z" />
    </svg>
  )),
);
LeaveSp.displayName = 'LeaveSp';
LeaveSp['iconName'] = 'leave_sp';
export default LeaveSp;
