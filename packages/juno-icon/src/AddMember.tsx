import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AddMember = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M23 16a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm-10 1c1.037 0 2.046.117 3.004.338A8.965 8.965 0 0 0 14 23c0 1.851.559 3.571 1.516 5.001L4 28a2 2 0 0 1-2-2c0-5.096 5.019-9 11-9zm10 1a1 1 0 0 0-.993.883L22 19v3h-3a1 1 0 0 0-.117 1.993L19 24h2.999L22 27a1 1 0 0 0 1.993.117L24 27l-.001-3H27a1 1 0 0 0 .117-1.993L27 22h-3v-3a1 1 0 0 0-1-1zM13 3a6 6 0 1 1 0 12 6 6 0 0 1 0-12z" />
    </svg>
  )),
);
AddMember.displayName = 'AddMember';
AddMember['iconName'] = 'add-member';
export default AddMember;
