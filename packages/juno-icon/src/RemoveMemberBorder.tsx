import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const RemoveMemberBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M13 17c.96 0 1.895.101 2.789.291-.4.575-.742 1.193-1.016 1.846A11.424 11.424 0 0 0 12.999 19c-4.709 0-8.573 2.812-8.967 6.395-.05.451.335.605.519.605l9.905.001c.221.703.518 1.373.88 2L3.998 28a2 2 0 0 1-2-2c0-5.096 5.019-9 11-9zm7.172 1.757L23 21.585l2.828-2.828a.999.999 0 1 1 1.414 1.414l-2.828 2.828 2.828 2.828a.999.999 0 1 1-1.414 1.414l-2.829-2.829-2.828 2.829a.999.999 0 1 1-1.414-1.414l2.828-2.829-2.828-2.828a.999.999 0 1 1 1.414-1.414zM13 3a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    </svg>
  )),
);
RemoveMemberBorder.displayName = 'RemoveMemberBorder';
RemoveMemberBorder['iconName'] = 'remove-member_border';
export default RemoveMemberBorder;
