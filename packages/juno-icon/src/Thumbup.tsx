import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Thumbup = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M7 15v13H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h3zM19 2a2.305 2.305 0 0 1 2.227 2.899L19.867 10H26a4 4 0 0 1 4 4v4.5a9.5 9.5 0 0 1-9.5 9.5H9V13.37l5.825-9.49A4 4 0 0 1 18.217 2H19z" />
    </svg>
  )),
);
Thumbup.displayName = 'Thumbup';
Thumbup['iconName'] = 'thumbup';
export default Thumbup;
