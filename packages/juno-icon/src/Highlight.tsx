import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Highlight = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m20.701 10.969 8.394 1.186c.578.084.982.604.893 1.167a1.016 1.016 0 0 1-.307.588l-6.073 5.757 1.435 8.13c.099.559-.288 1.09-.863 1.186a1.08 1.08 0 0 1-.671-.103l-7.508-3.838-7.508 3.838a1.074 1.074 0 0 1-1.472-.523.999.999 0 0 1-.062-.561l1.435-8.13-6.073-5.757a1.014 1.014 0 0 1-.02-1.456c.162-.161.374-.267.605-.299l8.394-1.186 3.752-7.397a1.076 1.076 0 0 1 1.418-.466c.208.1.377.264.479.466l3.752 7.397z" />
    </svg>
  )),
);
Highlight.displayName = 'Highlight';
Highlight['iconName'] = 'highlight';
export default Highlight;
