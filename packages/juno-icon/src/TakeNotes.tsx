import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const TakeNotes = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M27.573 5.6c.997 0 1.889.463 2.49 1.196l.65.797c.481.587.771 1.345.771 2.174a3.406 3.406 0 0 1-1.155 2.57L16.69 25.187c-.493.427-1.07.69-1.687.776L9 26.795l1.805-5.966.006-.024a3.355 3.355 0 0 1 1.002-1.544L25.45 6.414a3.176 3.176 0 0 1 2.123-.814zm-.01 2.405a.896.896 0 0 0-.594.225L13.327 21.08a.99.99 0 0 0-.304.463l-.718 2.374 2.391-.333a.907.907 0 0 0 .474-.214l13.643-12.852a.975.975 0 0 0 .346-.749.977.977 0 0 0-.22-.622l-.655-.801a.91.91 0 0 0-.721-.341z" />
    </svg>
  )),
);
TakeNotes.displayName = 'TakeNotes';
TakeNotes['iconName'] = 'take-notes';
export default TakeNotes;
