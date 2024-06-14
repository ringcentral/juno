import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ViewInConversationThread = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M25.333 4A2.667 2.667 0 0 1 28 6.667v2.667h-2V6.667a.668.668 0 0 0-.547-.656L25.333 6H6.666a.668.668 0 0 0-.656.547l-.011.12V20c0 .327.236.599.547.656l.12.011h4.804l4.529 4.683 4.529-4.683h4.804a.668.668 0 0 0 .656-.547l.011-.12v-2.667h2V20a2.667 2.667 0 0 1-2.667 2.667h-3.956l-4.914 5.081a.668.668 0 0 1-.852.063l-.091-.079-4.898-5.065H6.665A2.667 2.667 0 0 1 3.998 20V6.667A2.667 2.667 0 0 1 6.665 4h18.667zm-5.948 4.627a1 1 0 0 1 .095 1.302l-.097.112-2.299 2.292H31a1 1 0 0 1 0 2H17.355l1.976 1.704a1 1 0 0 1 .192 1.291l-.088.119a1 1 0 0 1-1.291.192l-.119-.088-3.525-3.044a1.667 1.667 0 0 1-.152-2.254l.122-.135 3.502-3.493a1 1 0 0 1 1.414.002z" />
    </svg>
  )),
);
ViewInConversationThread.displayName = 'ViewInConversationThread';
ViewInConversationThread['iconName'] = 'view-in-conversation-thread';
export default ViewInConversationThread;
