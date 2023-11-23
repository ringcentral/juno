import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Transcribe = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M7 9h18v3H7V9zm0 5h18v3H7v-3zm0 5h14v3H7v-3z" />
    </svg>
  )),
);
Transcribe.displayName = 'Transcribe';
Transcribe['iconName'] = 'transcribe';
export default Transcribe;
