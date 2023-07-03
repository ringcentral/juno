import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Salesforce = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M13.484 8.29a5.258 5.258 0 0 1 3.804-1.634c1.98 0 3.708 1.104 4.628 2.744a6.387 6.387 0 0 1 2.616-.557c3.572 0 6.467 2.922 6.467 6.525s-2.895 6.525-6.467 6.525c-.436 0-.862-.044-1.274-.127a4.726 4.726 0 0 1-6.194 1.946 5.395 5.395 0 0 1-10.028-.244c-.332.07-.676.107-1.029.107-2.766 0-5.008-2.265-5.008-5.059a5.071 5.071 0 0 1 2.504-4.384A5.823 5.823 0 0 1 8.85 5.999c1.889 0 3.568.899 4.633 2.29z" />
    </svg>
  )),
);
Salesforce.displayName = 'Salesforce';
Salesforce['iconName'] = 'salesforce';
export default Salesforce;
