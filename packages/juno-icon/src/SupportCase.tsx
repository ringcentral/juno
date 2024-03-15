import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const SupportCase = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M3 7v3.341a6.003 6.003 0 0 1 0 11.318V25h10.935A8.96 8.96 0 0 1 13 21a9 9 0 0 1 9-9 9 9 0 0 1 3 .512V7H3zm12.292 20H3a2 2 0 0 1-2-2v-4.714a4.286 4.286 0 0 0 0-8.572V7a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v6.515A9 9 0 1 1 15.292 27zM9 11a1 1 0 0 1 2 0v10a1 1 0 0 1-2 0V11zm13 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0-12a1 1 0 0 0-1 1v3h-3a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2h-3v-3a1 1 0 0 0-1-1z" />
    </svg>
  )),
);
SupportCase.displayName = 'SupportCase';
SupportCase['iconName'] = 'support-case';
export default SupportCase;
