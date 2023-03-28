import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ExternalLinkGlobal = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M9.778 8.222a1 1 0 0 0 1 1h10.586L7.515 23.072a.999.999 0 1 0 1.414 1.414L22.78 10.635l-.001 10.588a1 1 0 0 0 2 0v-13a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1z" />
    </svg>
  )),
);
ExternalLinkGlobal.displayName = 'ExternalLinkGlobal';
ExternalLinkGlobal['iconName'] = 'external-link-global';
export default ExternalLinkGlobal;
