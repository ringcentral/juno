import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PresenceAvailable = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m29.253 7.261-11.147 20.9A3.452 3.452 0 0 1 15.737 30h-.641a3.345 3.345 0 0 1-2.146-.836l-9.753-8.36a3.483 3.483 0 0 1 3.734-5.797c.227.137.434.306.613.502l6.465 5.573L23.121 4a3.483 3.483 0 0 1 4.626-1.672 3.456 3.456 0 0 1 1.672 4.625l-.167.334v-.028z" />
    </svg>
  )),
);
PresenceAvailable.displayName = 'PresenceAvailable';
PresenceAvailable['iconName'] = 'presence-available';
export default PresenceAvailable;
