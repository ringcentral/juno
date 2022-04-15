import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ChatBubble = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28 4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-7.586a.997.997 0 0 0-.707.293l-3.141 3.141a.8.8 0 0 1-1.131 0l-3.141-3.141a1 1 0 0 0-.707-.293H4.001a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h24zm-1 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7a2 2 0 0 1 1.414.586L16 25.172l2.586-2.586A2 2 0 0 1 20 22h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-7.222 3a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0l.001-4.585-6.072 6.07a.999.999 0 1 1-1.414-1.414l6.072-6.07L12.779 11a1 1 0 0 1 0-2h7z" />
    </svg>
  )),
);
ChatBubble.displayName = 'ChatBubble';
ChatBubble['iconName'] = 'chat_bubble';
export default ChatBubble;
