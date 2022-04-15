import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Description = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M19.25 24c.414 0 .75.448.75 1s-.336 1-.75 1H2.75c-.414 0-.75-.448-.75-1s.336-1 .75-1h16.5zm9.583-9c.644 0 1.167.448 1.167 1s-.522 1-1.167 1H3.166c-.644 0-1.167-.448-1.167-1s.522-1 1.167-1h25.667zm0-9C29.477 6 30 6.448 30 7s-.522 1-1.167 1H3.166c-.644 0-1.167-.448-1.167-1s.522-1 1.167-1h25.667z" />
    </svg>
  )),
);
Description.displayName = 'Description';
Description['iconName'] = 'Description';
export default Description;
