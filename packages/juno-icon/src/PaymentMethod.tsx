import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PaymentMethod = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M2 9a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9zm3-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H5z" />
      <path d="M3 12h26v4H3v-4zM6 21a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1z" />
    </svg>
  )),
);
PaymentMethod.displayName = 'PaymentMethod';
PaymentMethod['iconName'] = 'payment-method';
export default PaymentMethod;
