import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const TranscriptBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M23 21.6V24H2v-2.4h21zm7-6V18H2v-2.4h28zm0-6V12H2V9.6h28z" />
    </svg>
  )),
);
TranscriptBorder.displayName = 'TranscriptBorder';
TranscriptBorder['iconName'] = 'transcript_border';
export default TranscriptBorder;
