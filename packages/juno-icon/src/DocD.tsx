import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const DocD = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fill="#222f42"
        d="M3.556 0h24.889a3.556 3.556 0 0 1 3.556 3.556v24.889a3.556 3.556 0 0 1-3.556 3.556H3.556A3.556 3.556 0 0 1 0 28.445V3.556A3.556 3.556 0 0 1 3.556 0z"
      />
      <path
        fill="#4169a1"
        d="M11.919 8c-.601 0-1.108.208-1.522.624s-.62.927-.62 1.532v11.688c0 .605.207 1.116.62 1.532s.921.624 1.522.624h8.161c.601 0 1.108-.208 1.522-.624s.62-.927.62-1.532v-9.059L16.671 8h-4.752z"
      />
      <path
        fill="#f1f1f1"
        d="m17.009 20.53-1.202-4.842h-.037l-1.24 4.842h-1.052l-1.954-6.129h1.09l1.39 5.032 1.24-5.032h1.089l1.278 5.032 1.39-5.032h1.014l-1.916 6.129z"
      />
    </svg>
  )),
);
DocD.displayName = 'DocD';
DocD['iconName'] = 'doc-D';
export default DocD;
