import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Stripe = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M2 2v28h28V2H2zm17.932 20.643c-.968.775-2.402 1.182-4.126 1.182-2.169 0-4.261-.659-5.384-1.298l.581-3.622c1.317.775 3.331 1.375 4.552 1.375.988 0 1.53-.368 1.53-1.007 0-.659-.562-1.085-2.247-1.685-2.615-.949-4.222-2.072-4.222-4.707 0-1.453.523-2.653 1.53-3.486.968-.794 2.324-1.22 3.951-1.22 2.305 0 3.971.639 4.784 1.027l-.581 3.583c-1.027-.504-2.518-1.065-3.971-1.065-.794 0-1.24.31-1.24.852 0 .639.775 1.046 2.189 1.569 2.653.949 4.3 2.072 4.3 4.765 0 1.627-.562 2.886-1.646 3.738z" />
    </svg>
  )),
);
Stripe.displayName = 'Stripe';
Stripe['iconName'] = 'stripe';
export default Stripe;
