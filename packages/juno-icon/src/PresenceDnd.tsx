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
      <path d="M5 13h22a3 3 0 0 1 3 3v.4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V16a3 3 0 0 1 3-3z" />
    </svg>
  )),
);
PresenceDnd.displayName = 'PresenceDnd';
PresenceDnd['iconName'] = 'presence-dnd';
export default PresenceDnd;
