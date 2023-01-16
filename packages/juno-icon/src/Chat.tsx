import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Chat = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M27.2 2H4.8a2.796 2.796 0 0 0-2.786 2.8L2 30l5.6-5.6h19.6c1.54 0 2.8-1.26 2.8-2.8V4.8C30 3.26 28.74 2 27.2 2zM7.6 11.8h16.8v2.8H7.6v-2.8zm11.2 7H7.6V16h11.2v2.8zm5.6-8.4H7.6V7.6h16.8v2.8z" />
    </svg>
  )),
);
Chat.displayName = 'Chat';
Chat['iconName'] = 'chat';
export default Chat;
