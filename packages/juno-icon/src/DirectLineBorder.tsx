import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const DirectLineBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M8 2v25.76c0 .586.206 1.186.63 1.61s1.024.63 1.61.63h11.2c.586 0 1.186-.206 1.61-.63s.63-1.024.63-1.61V7.6c0-.586-.206-1.186-.63-1.61s-1.024-.63-1.61-.63h-11.2V2H8zm2.24 5.6h11.2v4.48h-11.2V7.6zm0 6.72h11.2v13.44h-11.2V14.32zm1.12 2.24v2.24h2.24v-2.24h-2.24zm3.36 0v2.24h2.24v-2.24h-2.24zm3.36 0v2.24h2.24v-2.24h-2.24zm-6.72 3.36v2.24h2.24v-2.24h-2.24zm3.36 0v2.24h2.24v-2.24h-2.24zm3.36 0v2.24h2.24v-2.24h-2.24zm-6.72 3.36v2.24h2.24v-2.24h-2.24zm3.36 0v2.24h2.24v-2.24h-2.24zm3.36 0v2.24h2.24v-2.24h-2.24z" />
    </svg>
  )),
);
DirectLineBorder.displayName = 'DirectLineBorder';
DirectLineBorder['iconName'] = 'direct-line_border';
export default DirectLineBorder;
