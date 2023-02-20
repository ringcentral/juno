import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PrisenceAvailable = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm7.544 9.084-6.222 11.667A1.928 1.928 0 0 1 16 23.778h-.358a1.867 1.867 0 0 1-1.198-.467L9 18.644a1.944 1.944 0 0 1 2.085-3.235c.127.077.242.171.342.28l3.609 3.111 5.087-9.536a1.943 1.943 0 0 1 2.582-.933 1.926 1.926 0 0 1 .933 2.582l-.093.187v-.016z" />
    </svg>
  )),
);
PrisenceAvailable.displayName = 'PrisenceAvailable';
PrisenceAvailable['iconName'] = 'prisence-available';
export default PrisenceAvailable;
