import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const NoConnection = memo(
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
        d="M27 4a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2zM17 14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-8.634l2.191 2.165a1.593 1.593 0 0 0 2.257 0l1.069-1.058.092-.103.098-.136c.456-.695.372-1.634-.218-2.218l-2.039-2.017h.551zM7 20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2zm8.026-6 2.759 2.727a.769.769 0 0 1 .053 1.005l-.025.031-1.068 1.058a.593.593 0 0 1-.851 0l-2.893-2.86.005-.109a2.001 2.001 0 0 1 1.838-1.845l.183-.006z"
      />
      <path
        fill="#f54c3d"
        d="m11 10.018 4.893-4.838a.59.59 0 0 1 .774-.065l.076.065 1.041 1.029a.774.774 0 0 1 .061.995l-.061.069L13.003 12l4.781 4.728a.769.769 0 0 1 .053 1.005l-.025.031-1.068 1.058a.593.593 0 0 1-.851 0L11 13.983l-4.894 4.839a.59.59 0 0 1-.774.065l-.076-.065-1.041-1.029a.774.774 0 0 1-.061-.995l.061-.069 4.78-4.728-4.78-4.727a.769.769 0 0 1-.053-1.005l.053-.059 1.041-1.029a.593.593 0 0 1 .851 0L11 10.019z"
      />
    </svg>
  )),
);
NoConnection.displayName = 'NoConnection';
NoConnection['iconName'] = 'no-connection';
export default NoConnection;
