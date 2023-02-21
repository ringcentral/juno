import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PresenceDnd = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M27.083 18.833H4.916a2.917 2.917 0 0 1 0-5.834h22.167a2.917 2.917 0 0 1 0 5.834z" />
    </svg>
  )),
);
PresenceDnd.displayName = 'PresenceDnd';
PresenceDnd['iconName'] = 'presence-dnd';
export default PresenceDnd;
