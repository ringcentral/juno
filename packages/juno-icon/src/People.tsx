import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const People = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 18c7.067 0 13 4.315 13 10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2c0-5.685 5.933-10 13-10zm0-16a7 7 0 1 1 0 14 7 7 0 0 1 0-14z" />
    </svg>
  )),
);
People.displayName = 'People';
People['iconName'] = 'people';
export default People;
