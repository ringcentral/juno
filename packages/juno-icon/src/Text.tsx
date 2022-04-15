import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Text = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16.533 5.001c.466-.02.906.263 1.069.719l7.279 20.333a.92.92 0 0 1-.628 1.2 1.086 1.086 0 0 1-1.303-.683l-2.126-5.939a.978.978 0 0 1-.163.013h-8.553l-2.12 5.926c-.19.532-.757.829-1.303.683a.921.921 0 0 1-.651-1.128c.007-.024.014-.048.023-.072L15.336 5.72a1.086 1.086 0 0 1 1.135-.714zm3.578 13.644L16.467 8.463l-3.645 10.182h7.289z" />
    </svg>
  )),
);
Text.displayName = 'Text';
Text['iconName'] = 'text';
export default Text;
