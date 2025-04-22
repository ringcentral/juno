import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const WindowsKey = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M15.24 25.875H6.125V16.76h9.115v9.115zm10.635 0H16.76V16.76h9.115v9.115zM15.24 15.24H6.125V6.125h9.115v9.115zm10.635 0H16.76V6.125h9.115v9.115z" />
    </svg>
  )),
);
WindowsKey.displayName = 'WindowsKey';
WindowsKey['iconName'] = 'windows_key';
export default WindowsKey;
