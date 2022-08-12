import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const RbnOff = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28.728 3.272a2 2 0 0 1 0 2.828L6.101 28.727a2 2 0 1 1-2.828-2.828L25.9 3.272a2 2 0 0 1 2.828 0zm-.41 6.068A13.96 13.96 0 0 1 30 16c0 3.771-1.501 7.31-4.12 9.919a1.999 1.999 0 1 1-2.822-2.834A9.961 9.961 0 0 0 26.001 16a9.994 9.994 0 0 0-.688-3.654l3.006-3.006zM8.919 6.107a2 2 0 0 1 .003 2.828A9.961 9.961 0 0 0 6 15.999c0 1.274.239 2.509.688 3.655L3.682 22.66a13.964 13.964 0 0 1-1.683-6.661c0-3.757 1.489-7.283 4.091-9.89a2 2 0 0 1 2.828-.003zm14.81 7.823a8.013 8.013 0 0 1-2.051 7.706 2 2 0 0 1-2.849-2.808l4.901-4.899zm-10.646-3.541a2 2 0 0 1 .159 2.699l-.115.129-4.856 4.855A8.028 8.028 0 0 1 8 16c0-2.105.819-4.086 2.255-5.567a2 2 0 0 1 2.828-.044z" />
    </svg>
  )),
);
RbnOff.displayName = 'RbnOff';
RbnOff['iconName'] = 'rbn-off';
export default RbnOff;
