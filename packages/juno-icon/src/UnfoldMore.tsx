import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const UnfoldMore = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M11.05 20.55 16 25.5l4.95-4.95a.999.999 0 1 1 1.414 1.414l-5.657 5.657a.999.999 0 0 1-1.414 0l-5.657-5.657a.999.999 0 1 1 1.414-1.414zM9.636 9.95l5.657-5.657a1 1 0 0 1 1.32-.083l.094.083 5.657 5.657a.999.999 0 0 1-1.32 1.497l-.094-.083L16 6.414l-4.95 4.95a.999.999 0 0 1-1.497-1.32l.083-.094z" />
    </svg>
  )),
);
UnfoldMore.displayName = 'UnfoldMore';
UnfoldMore['iconName'] = 'unfold_more';
export default UnfoldMore;
