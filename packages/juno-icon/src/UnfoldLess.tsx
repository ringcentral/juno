import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const UnfoldLess = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m11.05 27.621 4.95-4.95 4.95 4.95a.999.999 0 1 0 1.414-1.414l-5.657-5.657a.999.999 0 0 0-1.414 0l-5.657 5.657a.999.999 0 1 0 1.414 1.414zM9.636 5.707l5.657 5.657a1 1 0 0 0 1.32.083l.094-.083 5.657-5.657a.999.999 0 0 0-1.32-1.497l-.094.083L16 9.243l-4.95-4.95a.999.999 0 0 0-1.497 1.32l.083.094z" />
    </svg>
  )),
);
UnfoldLess.displayName = 'UnfoldLess';
UnfoldLess['iconName'] = 'unfold_less';
export default UnfoldLess;
