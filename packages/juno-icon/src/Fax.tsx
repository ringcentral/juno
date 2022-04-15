import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Fax = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M29 3a1 1 0 0 1 0 2h-2v15h-7a2 2 0 0 0-1.994 1.851L18 22v7H7a2 2 0 0 1-2-2V5H3a1 1 0 0 1 0-2h26zm-2.272 19-.025.058a3.003 3.003 0 0 1-.582.82l-5.536 5.536a2.022 2.022 0 0 1-.415.319l-.17.086V23a1 1 0 0 1 .883-.993L21 22h5.728zM21 14H11a1 1 0 0 0-.117 1.993L11 16h10a1 1 0 0 0 0-2zm0-6H11a1 1 0 0 0-.117 1.993L11 10h10a1 1 0 0 0 0-2z" />
    </svg>
  )),
);
Fax.displayName = 'Fax';
Fax['iconName'] = 'fax';
export default Fax;
