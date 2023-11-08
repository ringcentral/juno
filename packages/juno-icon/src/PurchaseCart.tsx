import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PurchaseCart = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M10 28a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM29.217 7.024a1 1 0 0 1 .759 1.193l-2 9a1 1 0 1 1-1.952-.434l2-9a1 1 0 0 1 1.193-.759zM2 3a1 1 0 0 1 1-1h2c.489 0 .906.353.986.836L8.847 20H27a1 1 0 0 1 0 2H8a.999.999 0 0 1-.986-.836L4.153 4H3a1 1 0 0 1-1-1zM24 28a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M5 8a1 1 0 0 1 1-1h23a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1zM7 17a1 1 0 0 1 1-1h19a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1z" />
    </svg>
  )),
);
PurchaseCart.displayName = 'PurchaseCart';
PurchaseCart['iconName'] = 'purchase-cart';
export default PurchaseCart;
