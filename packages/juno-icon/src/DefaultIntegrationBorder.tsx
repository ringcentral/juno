import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const DefaultIntegrationBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M14 1a5 5 0 0 1 5 5h5a2 2 0 0 1 2 2v5a5 5 0 0 1 0 10v5a2 2 0 0 1-2 2h-7v-2a3 3 0 0 0-2.824-2.995L14 25a3 3 0 0 0-2.995 2.824L11 28v2H4a2 2 0 0 1-2-2v-7h2a3 3 0 0 0 2.995-2.824L7 18a3 3 0 0 0-2.824-2.995L4 15H2V8a2 2 0 0 1 2-2h5a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-2.995 2.824L11 6v2H4v5l.058.001.234.008c2.564.149 4.593 2.219 4.702 4.825l.005.225-.008.234a5 5 0 0 1-4.772 4.703l-.22.005v5h5L9 27.943l.008-.234c.149-2.564 2.219-4.593 4.825-4.703l.225-.005.234.008a5 5 0 0 1 4.703 4.772l.005.22h5v-7h2a3 3 0 0 0 .176-5.995L26 15.001h-2v-7h-7v-2a3 3 0 0 0-3-3z" />
    </svg>
  )),
);
DefaultIntegrationBorder.displayName = 'DefaultIntegrationBorder';
DefaultIntegrationBorder['iconName'] = 'default-integration_border';
export default DefaultIntegrationBorder;
