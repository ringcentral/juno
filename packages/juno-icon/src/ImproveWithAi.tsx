import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ImproveWithAi = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m15.636 13.944 13.113 13.113c.467.467.467 1.235 0 1.703s-1.235.467-1.703 0L13.933 15.647c-.467-.467-.467-1.235 0-1.703s1.235-.467 1.703 0zm-4.153 7.559a1.038 1.038 0 0 1 1.263-.736c.558.155.875.717.733 1.265l-1.01 3.775c-.157.574-.713.887-1.258.738a1.04 1.04 0 0 1-.738-1.266l1.01-3.775zm-7.847-5.358 3.783-1.012a1.03 1.03 0 0 1 1.257.728c.148.533-.17 1.1-.725 1.256l-3.783 1.012a1.03 1.03 0 0 1-1.257-.728c-.148-.533.17-1.1.725-1.256zM9.6 9.813a1.022 1.022 0 0 1-1.454 0L5.377 7.044c-.405-.405-.405-1.049 0-1.454s1.049-.405 1.454 0L9.6 8.359a1.022 1.022 0 0 1 0 1.454zm7.303-1.865a1.038 1.038 0 0 1-1.263.736 1.038 1.038 0 0 1-.733-1.265l1.01-3.775a1.037 1.037 0 0 1 1.263-.736c.558.155.875.717.733 1.265l-1.01 3.775zm8.47 4.72L21.59 13.68a1.03 1.03 0 0 1-1.257-.728c-.148-.533.17-1.1.725-1.256l3.783-1.012a1.028 1.028 0 0 1 1.256.728c.148.533-.17 1.1-.725 1.256z" />
    </svg>
  )),
);
ImproveWithAi.displayName = 'ImproveWithAi';
ImproveWithAi['iconName'] = 'improve-with-ai';
export default ImproveWithAi;
