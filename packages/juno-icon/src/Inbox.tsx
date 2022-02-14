import React, { forwardRef, memo } from 'react';

const Inbox = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        {...props}
      >
        <path d="M30 25a2 2 0 01-2 2H4a2 2 0 01-2-2V14.333c0-.865.281-1.708.8-2.4L7.4 5.8A2 2 0 019 5h14c.63 0 1.222.296 1.6.8l4.6 6.133c.519.692.8 1.535.8 2.4V25zM11.1 15H4v9a1 1 0 001 1h22a1 1 0 001-1v-9h-7.1a5.002 5.002 0 01-9.752.212L11.1 15zm11.4-8h-13a1 1 0 00-.8.4l-3.96 5.28a.2.2 0 00.16.32H12a1 1 0 011 1 3 3 0 005.995.176l.012-.293A1 1 0 0120 13h7.1a.2.2 0 00.16-.32L23.3 7.4a1 1 0 00-.8-.4z" />
      </svg>
    ),
  ),
);
Inbox.displayName = 'Inbox';
Inbox['iconName'] = 'inbox';
export default Inbox;
