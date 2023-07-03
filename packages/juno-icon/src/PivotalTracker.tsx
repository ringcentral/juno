import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PivotalTracker = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16.001 2.003c7.718 0 13.996 6.278 13.996 13.995 0 7.72-6.278 13.999-13.996 13.999S2.003 23.717 2.003 15.998c0-7.717 6.279-13.995 13.998-13.995zm0 2.834c-6.165 0-11.163 4.997-11.163 11.161 0 6.167 4.998 11.165 11.163 11.165s11.162-4.999 11.162-11.165c0-6.165-4.997-11.161-11.162-11.161zm-.949 13.195a2.226 2.226 0 0 0 1.531.135l3.125 5.413-3.555 2.052-2.745-4.754zm-1.286-1.838c.046.518.272 1.012.649 1.391l-3.127 5.417-3.555-2.054 2.746-4.753zm10.655.385v4.104H18.93l-1.644-2.847a2.241 2.241 0 0 0 .881-1.256h6.255zm-3.71-7.581 3.554 2.052-2.747 4.756h-3.285a2.242 2.242 0 0 0-.65-1.394l3.127-5.415zm-7.638 2.318 1.643 2.844a2.225 2.225 0 0 0-.882 1.26H7.582v.035H7.58v-4.14h5.493zm2.773-4.95 2.746 4.755-1.643 2.846a2.24 2.24 0 0 0-1.53-.137l-3.125-5.412 3.552-2.052z" />
    </svg>
  )),
);
PivotalTracker.displayName = 'PivotalTracker';
PivotalTracker['iconName'] = 'pivotal-tracker';
export default PivotalTracker;
