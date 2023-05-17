import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const FlipSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M8.571 14.881V16c0 2.445 1.819 4.443 4.09 4.565l.221.006 6.073-.001-2.537-2.536 1.615-1.615 5.297 5.295-5.297 5.295-1.615-1.615 2.538-2.538-6.074.001c-3.473 0-6.323-2.802-6.578-6.34l-.014-.26L6.285 16v-1.119h2.286zm5.395-9.891 1.615 1.615-2.539 2.537h6.074c3.474 0 6.324 2.802 6.579 6.34l.014.26.005.257v1.119h-2.286v-1.119c0-2.445-1.819-4.443-4.091-4.565l-.221-.006h-6.073l2.538 2.537-1.615 1.615-5.297-5.295 5.297-5.295z" />
    </svg>
  )),
);
FlipSp.displayName = 'FlipSp';
FlipSp['iconName'] = 'flip_sp';
export default FlipSp;
