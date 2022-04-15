import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const WeakConnection = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fill="#000"
        opacity={0.32}
        d="M25 4h2a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
      />
      <path
        fill="#000"
        d="M17 14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2h2zM7 20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2z"
      />
    </svg>
  )),
);
WeakConnection.displayName = 'WeakConnection';
WeakConnection['iconName'] = 'weak-connection';
export default WeakConnection;
