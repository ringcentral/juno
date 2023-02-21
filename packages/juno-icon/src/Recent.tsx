import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Recent = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M17 24a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h14zm6-13.002.117.007c.459.053.823.418.877.877l.007.117v10.585l3.793-3.792.094-.083a1 1 0 0 1 1.403 1.403l-.083.094-5.5 5.5-.085.076c-.608.491-1.534.107-1.617-.67L22 24.998v-13l.007-.117c.053-.459.418-.823.877-.877l.117-.007zM17 15a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h14zm12-9a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h26z" />
    </svg>
  )),
);
Recent.displayName = 'Recent';
Recent['iconName'] = 'recent';
export default Recent;
