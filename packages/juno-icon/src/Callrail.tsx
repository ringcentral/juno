import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Callrail = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 3c6.971 0 12.997 4.876 13 12.13a.243.243 0 0 1-.243.24L17 15.342v-4.341l-.007-.117a1 1 0 0 0-1.967-.112l-.02.113-.007.117v10l.007.117a1 1 0 0 0 1.967.112l.02-.113.007-.117v-3.535l11.515.001c.208 0 .377.169.377.377l-.001.026-.015.187-.034.332c-.012.1-.025.189-.038.262-1.109 6.122-6.595 9.92-12.804 9.92a13.12 13.12 0 0 1-6.257-1.576 8.682 8.682 0 0 1-2.041 1.664c-1.885 1.088-4.418-.622-3.668-2.942.529-1.638.576-2.86-.067-5.082a12.577 12.577 0 0 1-.968-4.848c0-7.099 5.86-12.785 13-12.785zm-2.75 12.25a.75.75 0 0 0-.743.648L12.5 16v3.75a.75.75 0 0 0 1.493.102L14 19.75V16a.75.75 0 0 0-.75-.75zm-2.5-3A.75.75 0 0 0 10 13v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75z" />
    </svg>
  )),
);
Callrail.displayName = 'Callrail';
Callrail['iconName'] = 'callrail';
export default Callrail;
