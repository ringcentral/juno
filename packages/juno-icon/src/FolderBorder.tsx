import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const FolderBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m13.281 4.632 1.923 2.052a.996.996 0 0 0 .612.309l.118.007h12.067a2 2 0 0 1 2 2v17a2 2 0 0 1-2 2h-24a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7.821a2 2 0 0 1 1.459.632zM10.955 6H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1l-11.419-.021a2.998 2.998 0 0 1-1.836-.928l-1.33-1.419A2 2 0 0 0 10.956 6z" />
    </svg>
  )),
);
FolderBorder.displayName = 'FolderBorder';
FolderBorder['iconName'] = 'folder_border';
export default FolderBorder;
