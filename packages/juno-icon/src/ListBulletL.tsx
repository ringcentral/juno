import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ListBulletL = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M4.333 22.667c1.234 0 2.246.96 2.328 2.174l.005.16c0 1.234-.96 2.246-2.174 2.328l-.16.005a2.334 2.334 0 0 1-.159-4.661l.16-.005zm21 0c1.234 0 2.246.96 2.328 2.174l.005.16a2.334 2.334 0 0 1-2.333 2.333h-14a2.334 2.334 0 0 1 0-4.666h14zm-21-9.334c1.234 0 2.246.96 2.328 2.174l.005.16c0 1.234-.96 2.246-2.174 2.328l-.16.005a2.334 2.334 0 0 1-.159-4.661l.16-.005zm18.667 0c1.234 0 2.246.96 2.328 2.174l.005.16A2.334 2.334 0 0 1 23 18H11.333a2.334 2.334 0 0 1 0-4.666H23zM4.333 4c1.234 0 2.246.96 2.328 2.174l.005.16c0 1.234-.96 2.246-2.174 2.328l-.16.005a2.334 2.334 0 0 1-.159-4.661l.16-.005zm23.334 0c1.234 0 2.246.96 2.328 2.174l.005.16a2.334 2.334 0 0 1-2.333 2.333H11.334a2.334 2.334 0 0 1 0-4.666h16.333z" />
    </svg>
  )),
);
ListBulletL.displayName = 'ListBulletL';
ListBulletL['iconName'] = 'list-bullet_l';
export default ListBulletL;
