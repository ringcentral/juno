import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const RecTransciptSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M12.571 8a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm12.572 11.429v2.286h-3.429v-2.286h3.429zm-12.572-9.143a5.714 5.714 0 1 0 0 11.427 5.714 5.714 0 0 0 0-11.427zm0 1.714a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm14.858 2.857v2.286h-5.714v-2.286h5.714zm0-4.571v2.286h-5.714v-2.286h5.714z" />
    </svg>
  )),
);
RecTransciptSp.displayName = 'RecTransciptSp';
RecTransciptSp['iconName'] = 'rec-transcipt_sp';
export default RecTransciptSp;
