import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const UnpinSlash = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M3.565 2.979a.999.999 0 0 1 1.414 0l24.042 24.042a.999.999 0 1 1-1.414 1.414l-5.984-5.983-.078.359a10.215 10.215 0 0 1-2.73 4.888 1.141 1.141 0 0 1-1.613 0l-5.644-5.644-7.256 7.256c-.445.445-2.78 2.058-3.225 1.613s1.167-2.78 1.613-3.225l7.256-7.256-5.644-5.644a1.141 1.141 0 0 1 0-1.613 10.214 10.214 0 0 1 5.246-2.808L3.565 4.394a.999.999 0 0 1 0-1.414zm7.788 9.202a8.23 8.23 0 0 0-4.716 1.623l-.281.219 11.62 11.62.029-.033a8.234 8.234 0 0 0 1.814-4.964l-8.466-8.465zM19.63 1.154c.086.05.165.11.235.181l10.802 10.801a1.141 1.141 0 0 1-.235 1.794l-7.394 4.28-1.464-1.463 6.887-3.988-9.219-9.219-3.987 6.888-1.463-1.464 4.28-7.394a1.14 1.14 0 0 1 1.558-.415z" />
    </svg>
  )),
);
UnpinSlash.displayName = 'UnpinSlash';
UnpinSlash['iconName'] = 'unpin-slash';
export default UnpinSlash;
