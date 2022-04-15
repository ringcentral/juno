import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Indent = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M27 24a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h22zM5.598 12.201l.174.114 3.737 2.73c.591.444.658 1.332.152 1.85l-.152.131-3.737 2.684c-.772.548-1.656.304-1.761-.611l-.01-.206v-5.748c-.01-1.043.784-1.413 1.598-.943zM27 15a1 1 0 0 1 0 2H13a1 1 0 0 1 0-2h14zm0-9a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h22z" />
    </svg>
  )),
);
Indent.displayName = 'Indent';
Indent['iconName'] = 'indent';
export default Indent;
