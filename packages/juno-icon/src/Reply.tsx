import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Reply = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m19.287 4.297.127.117 10.172 10.172a2 2 0 0 1 .117 2.701l-.117.127-10.172 10.172a2 2 0 0 1-3.408-1.265L16 26.172 15.999 21l-.999.001c-7.18 0-13-5.82-13-13v-3c0-1.192 1.711-1.384 1.975-.221a8 8 0 0 0 7.538 6.217l.263.004h4.222l.001-5.171a2 2 0 0 1 3.287-1.531zM14 19h2.999a1 1 0 0 1 .993.883l.007.117.001 5.689c0 .11.09.2.2.2a.197.197 0 0 0 .141-.059l9.689-9.689a.2.2 0 0 0 0-.283l-9.689-9.689a.2.2 0 0 0-.342.141l-.001 5.688a1 1 0 0 1-1 1l-5.531-.005a9.996 9.996 0 0 1-7.179-3.365l-.202-.235.04.284c.759 4.955 4.824 8.822 9.873 9.277l-.001.045z" />
    </svg>
  )),
);
Reply.displayName = 'Reply';
Reply['iconName'] = 'reply';
export default Reply;
