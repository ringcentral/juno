import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ChangeLength = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M12.523 23.373a1 1 0 0 0-1.412-1.415l-1.627 1.627V8.413l1.627 1.627a1.001 1.001 0 0 0 1.414-1.415L9.192 5.292a1.001 1.001 0 0 0-1.415 0L4.444 8.625a1 1 0 1 0 1.415 1.415l1.627-1.627v15.172l-1.627-1.627a1 1 0 1 0-1.415 1.415l3.333 3.333a1.015 1.015 0 0 0 .707.293.992.992 0 0 0 .707-.293l3.333-3.333zM18.821 18a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-8zM15.821 25.06a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2h-10a1 1 0 0 1-1-1zM16.821 12a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-10z" />
    </svg>
  )),
);
ChangeLength.displayName = 'ChangeLength';
ChangeLength['iconName'] = 'change-length';
export default ChangeLength;
