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
      <path d="M24 6.666v16h-2.666V11.23L7.886 24.68 6 22.794l13.46-13.46H8V6.666z" />
    </svg>
  )),
);
ExternalLinkGlobal.displayName = 'ExternalLinkGlobal';
ExternalLinkGlobal['iconName'] = 'external-link-global';
export default ExternalLinkGlobal;
