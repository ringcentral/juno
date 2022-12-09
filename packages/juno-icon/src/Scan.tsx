import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Scan = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M13.38 28v2h-2v-2h2zM17 28v2h-2v-2h2zm3.66 0v2h-2v-2h2zM7 25.765V27a1 1 0 0 0 .883.993L8 28h1.356v2H8a3 3 0 0 1-2.995-2.824L5 27v-1.235h2zm20 .014V27a3 3 0 0 1-2.824 2.995L24 30h-1.286v-2H24a1 1 0 0 0 .993-.883L25 27v-1.221h2zM7 22.3v2H5v-2h2zm20 0v2h-2v-2h2zm2-5.3a1 1 0 0 1 .993.883L30 18v4a1 1 0 0 1-1.993.117L28 22v-1H4v1a1 1 0 0 1-1.993.117L2 22v-4a1 1 0 0 1 1.993-.117L4 18v1h24v-1a1 1 0 0 1 1-1zM19.425 2 27 9.625v7.973h-2v-5.973h-6.575a1 1 0 0 1-.993-.883l-.007-.117L17.424 4H8a1 1 0 0 0-.993.883L7 5v12.598H5V5a3 3 0 0 1 2.824-2.995L8 2h11.425zm-.001 2.837v4.788h4.756l-4.756-4.788z" />
    </svg>
  )),
);
Scan.displayName = 'Scan';
Scan['iconName'] = 'scan';
export default Scan;
