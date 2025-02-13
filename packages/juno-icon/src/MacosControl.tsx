import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const MacosControl = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 33 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M7.643 16.297c-.227.227-.355.51-.355.837 0 .68.525 1.191 1.192 1.191.34 0 .624-.127.85-.34l7.375-7.417 7.36 7.417c.228.213.526.34.852.34.68 0 1.191-.51 1.191-1.191 0-.326-.128-.61-.34-.837l-8.198-8.24a1.139 1.139 0 0 0-.852-.382h-.013.001c-.34 0-.624.127-.879.382l-8.183 8.24z" />
    </svg>
  )),
);
MacosControl.displayName = 'MacosControl';
MacosControl['iconName'] = 'macos_control';
export default MacosControl;
