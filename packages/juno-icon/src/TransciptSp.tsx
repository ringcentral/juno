import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const TransciptSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m19.049 13.523 1.751.071c-.274 6.312-3.288 9.793-8.725 10.126v3.48h-1.751v-3.48c-5.436-.334-8.45-3.814-8.725-10.126l1.751-.071c.244 5.645 2.884 8.507 7.849 8.507s7.605-2.863 7.849-8.507zM27.2 20.8V24h-4.8v-3.2h4.8zm-16-16c3.855 0 4.901 2.289 5.167 5.09l.042.548c.006.092.011.185.015.278l.019.562.008.567-.003.832-.013.551-.025.544-.04.535c-.259 2.823-1.294 5.139-5.171 5.139-3.855 0-4.9-2.289-5.167-5.09l-.042-.548a12.597 12.597 0 0 1-.015-.278l-.019-.562-.008-.567.003-.832.013-.551.025-.544.04-.535C6.288 7.116 7.323 4.8 11.2 4.8zm19.2 9.6v3.2h-8v-3.2h8zm0-6.4v3.2h-8V8h8z" />
    </svg>
  )),
);
TransciptSp.displayName = 'TransciptSp';
TransciptSp['iconName'] = 'transcipt_sp';
export default TransciptSp;
