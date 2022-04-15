import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ExternalLink = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M25 29H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h8a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7a1 1 0 0 1 2 0v8a2 2 0 0 1-2 2zM20 4a1 1 0 0 0 1 1h4.59l-7.885 7.885a.998.998 0 0 0 1.41 1.41L27 6.41V11a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1z" />
    </svg>
  )),
);
ExternalLink.displayName = 'ExternalLink';
ExternalLink['iconName'] = 'external_link';
export default ExternalLink;
