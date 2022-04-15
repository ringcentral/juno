import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ArrowLeft = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m11.707 15.293 5.586-5.586a.999.999 0 0 1 1.707.707v11.172a1 1 0 0 1-1.707.707l-5.586-5.586a.999.999 0 0 1 0-1.414z" />
    </svg>
  )),
);
ArrowLeft.displayName = 'ArrowLeft';
ArrowLeft['iconName'] = 'arrow-left';
export default ArrowLeft;
