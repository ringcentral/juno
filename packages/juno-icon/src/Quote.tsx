import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Quote = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28 4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-7.586a.997.997 0 0 0-.707.293l-3.141 3.141a.8.8 0 0 1-1.131 0l-3.141-3.141a1 1 0 0 0-.707-.293H4.001a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h24zm-1 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7a2 2 0 0 1 1.414.586L16 25.172l2.586-2.586A2 2 0 0 1 20 22h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-15 4a3 3 0 0 1 2.98 2.65l.015.185.005.164-.004.147a2.529 2.529 0 0 1-.01.152l.001-.031a6.958 6.958 0 0 1-3.056 5.525.5.5 0 0 1-.579-.818 6.018 6.018 0 0 0 2.026-2.31 3 3 0 1 1-1.376-5.666zm8 0a3 3 0 0 1 2.98 2.65l.015.185.005.164-.004.147a2.529 2.529 0 0 1-.01.152v-.031a6.958 6.958 0 0 1-3.056 5.525.5.5 0 0 1-.579-.818 6.018 6.018 0 0 0 2.026-2.31 3 3 0 1 1-1.376-5.666z" />
    </svg>
  )),
);
Quote.displayName = 'Quote';
Quote['iconName'] = 'quote';
export default Quote;
