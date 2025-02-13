import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const MacosOption = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M11.448 6.363H6.455c-.666 0-1.205.51-1.205 1.163s.539 1.149 1.205 1.149h4.44c.354 0 .595.156.751.482l6.722 15.061c.44.98 1.12 1.419 2.17 1.419h5.006c.667 0 1.206-.525 1.206-1.163s-.539-1.149-1.206-1.149h-4.41c-.411 0-.652-.156-.808-.482L13.632 7.796c-.397-.894-1.192-1.433-2.184-1.433zm14.096 0h-6.452c-.681 0-1.192.497-1.192 1.149s.51 1.149 1.192 1.149h6.453c.68 0 1.205-.497 1.205-1.149s-.525-1.149-1.206-1.149z" />
    </svg>
  )),
);
MacosOption.displayName = 'MacosOption';
MacosOption['iconName'] = 'macos_option';
export default MacosOption;
