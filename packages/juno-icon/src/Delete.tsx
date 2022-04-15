import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Delete = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M20 2a2 2 0 0 1 2 2v2h6a1 1 0 0 1 0 2h-1.083l-.837 20.083A2 2 0 0 1 24.082 30H7.919a2 2 0 0 1-1.998-1.917L5.084 8H4.001a1 1 0 0 1 0-2h6V4a2 2 0 0 1 2-2h8zm4.914 6H7.085l.793 19.042a1 1 0 0 0 .999.958h14.245a1 1 0 0 0 .999-.958L24.913 8zM13 12a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V13a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V13a1 1 0 0 1 1-1zm0-8h-6a1 1 0 0 0-1 1v1h8V5a1 1 0 0 0-1-1z" />
    </svg>
  )),
);
Delete.displayName = 'Delete';
Delete['iconName'] = 'delete';
export default Delete;
