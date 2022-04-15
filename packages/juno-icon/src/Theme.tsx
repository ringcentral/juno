import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Theme = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M25.5 17a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-5-7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM9 7.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zM6.5 17a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM16 2C8.268 2 2 8.268 2 16s6.268 14 14 14a2.333 2.333 0 0 0 2.333-2.333c0-.607-.233-1.151-.607-1.556a2.407 2.407 0 0 1-.591-1.556 2.333 2.333 0 0 1 2.333-2.333h2.753a7.777 7.777 0 0 0 7.778-7.778C29.999 7.568 23.73 2 15.999 2z" />
    </svg>
  )),
);
Theme.displayName = 'Theme';
Theme['iconName'] = 'theme';
export default Theme;
