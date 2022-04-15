import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Forward = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M17.101 6.101a.999.999 0 0 0 0 1.414L24.586 15H5a1 1 0 0 0 0 2h19.588L17.1 24.486a.999.999 0 1 0 1.414 1.414l9.192-9.192a.999.999 0 0 0 0-1.414l-9.192-9.192a.999.999 0 0 0-1.414 0z" />
    </svg>
  )),
);
Forward.displayName = 'Forward';
Forward['iconName'] = 'forward';
export default Forward;
