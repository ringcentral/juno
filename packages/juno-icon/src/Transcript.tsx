import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Transcript = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M7.25 2A5.25 5.25 0 0 0 2 7.25v17.5A5.25 5.25 0 0 0 7.25 30h17.5c2.9 0 5.25-2.35 5.25-5.25V7.25A5.25 5.25 0 0 0 24.75 2H7.25zM9 11.625V9h12.25v2.625H9zm14 5.688H9v-2.625h14v2.625zM9 23v-2.625h8.75V23H9z" />
    </svg>
  )),
);
Transcript.displayName = 'Transcript';
Transcript['iconName'] = 'transcript';
export default Transcript;
