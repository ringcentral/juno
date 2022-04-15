import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ForwardingBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m19.287 27.703.127-.117 10.172-10.172a2 2 0 0 0 .117-2.701l-.117-.127L19.414 4.414a2 2 0 0 0-3.408 1.265L16 5.828 15.999 11 15 10.999c-7.18 0-13 5.82-13 13v3c0 1.192 1.711 1.384 1.975.221a8 8 0 0 1 7.538-6.217l.263-.004h4.222l.001 5.171a2 2 0 0 0 3.287 1.531zM14 13h2.999a1 1 0 0 0 .993-.883l.007-.117L18 6.311c0-.11.09-.2.2-.2.053 0 .104.021.141.059l9.689 9.689a.2.2 0 0 1 0 .283l-9.689 9.689a.2.2 0 0 1-.342-.141l-.001-5.688a1 1 0 0 0-1-1l-5.531.005a9.996 9.996 0 0 0-7.179 3.365l-.202.235.04-.284c.759-4.955 4.824-8.822 9.873-9.277l-.001-.045z" />
    </svg>
  )),
);
ForwardingBorder.displayName = 'ForwardingBorder';
ForwardingBorder['iconName'] = 'forwarding_border';
export default ForwardingBorder;
