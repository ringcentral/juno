import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Folder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m13.281 4.632 1.923 2.052a.996.996 0 0 0 .612.309l.118.007h12.067a2 2 0 0 1 2 2v17a2 2 0 0 1-2 2h-24a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7.821a2 2 0 0 1 1.459.632z" />
    </svg>
  )),
);
Folder.displayName = 'Folder';
Folder['iconName'] = 'folder';
export default Folder;
