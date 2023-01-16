import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Summary = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M8.446 2h9.555c.897 0 1.759.35 2.402.975l5.953 5.788a3.448 3.448 0 0 1 1.044 2.471v15.32A3.446 3.446 0 0 1 23.954 30H8.446A3.446 3.446 0 0 1 5 26.554V5.446A3.446 3.446 0 0 1 8.446 2zm13.096 8.615V9.581H10.074l4.205 7.065-4.205 7.065h11.468v-3.044h-2.068v.976h-5.763l2.974-4.997-2.974-4.997h5.763v.976h2.068v-2.01z" />
    </svg>
  )),
);
Summary.displayName = 'Summary';
Summary['iconName'] = 'summary';
export default Summary;
