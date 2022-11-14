import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const SortMessage = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m4.914 21.5 2.879 2.879V5.207a1 1 0 0 1 2 0v19.172l2.879-2.879a1 1 0 0 1 1.414 1.414L9.5 27.5a.999.999 0 0 1-1.414 0L3.5 22.914A1 1 0 0 1 4.914 21.5zm14-11 2.879-2.879v19.172a1 1 0 0 0 2 0V7.621l2.879 2.879a1 1 0 0 0 1.414-1.414L23.5 4.5a.999.999 0 0 0-1.414 0L17.5 9.086a1 1 0 0 0 1.414 1.414z" />
    </svg>
  )),
);
SortMessage.displayName = 'SortMessage';
SortMessage['iconName'] = 'sort-message';
export default SortMessage;
