import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const DefaultIntegration = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M14 1a4 4 0 0 1 4 4v1h6a2 2 0 0 1 2 2v6h1a4 4 0 0 1 0 8h-1v6a2 2 0 0 1-2 2h-6v-1a4 4 0 0 0-3.8-3.995L14 25a4 4 0 0 0-3.995 3.8L10 29v1H4a2 2 0 0 1-2-2v-6h1a4 4 0 0 0 3.995-3.8L7 18a4 4 0 0 0-3.8-3.995L3 14H2V8a2 2 0 0 1 2-2h6V5a4 4 0 0 1 4-4z" />
    </svg>
  )),
);
DefaultIntegration.displayName = 'DefaultIntegration';
DefaultIntegration['iconName'] = 'default-integration';
export default DefaultIntegration;
