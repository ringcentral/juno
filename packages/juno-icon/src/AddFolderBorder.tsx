import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AddFolderBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M24 17a1 1 0 0 1 1 1v4h4a1 1 0 0 1 0 2h-4.001L25 28a1 1 0 0 1-2 0l-.001-4H19a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 1-1zM11.821 4a2 2 0 0 1 1.459.632l1.923 2.052a.996.996 0 0 0 .612.309l.118.007H28a2 2 0 0 1 2 2l.001 8.71a8.05 8.05 0 0 0-2-1.639L28 10a1 1 0 0 0-1-1l-11.419-.021a2.998 2.998 0 0 1-1.836-.928l-1.33-1.419A2 2 0 0 0 10.956 6H5.001a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1l11.582.001a8.01 8.01 0 0 0 1.173 2L4.001 28a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7.821z" />
    </svg>
  )),
);
AddFolderBorder.displayName = 'AddFolderBorder';
AddFolderBorder['iconName'] = 'add-folder_border';
export default AddFolderBorder;
