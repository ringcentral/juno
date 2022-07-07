import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Message = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M21.5 11c.69 0 1.25.56 1.25 1.25v7.5c0 .69-.56 1.25-1.25 1.25h-2.866a.625.625 0 0 0-.442.183l-1.963 1.963a.5.5 0 0 1-.707 0l-1.963-1.963a.625.625 0 0 0-.442-.183h-2.866c-.69 0-1.25-.56-1.25-1.25v-7.5c0-.69.56-1.25 1.25-1.25h11.25z" />
    </svg>
  )),
);
Message.displayName = 'Message';
Message['iconName'] = 'Message';
export default Message;
