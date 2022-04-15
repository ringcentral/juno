import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const NewFile = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M24 17a1 1 0 0 1 1 1v4h4a1 1 0 0 1 0 2h-4.001L25 28a1 1 0 0 1-2 0l-.001-4H19a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 1-1zM11.821 3a2 2 0 0 1 1.459.632l1.923 2.052a.996.996 0 0 0 .612.309l.118.007H28a2 2 0 0 1 2 2l.001 9.71a8.05 8.05 0 0 0-2-1.639L28 13H4v11a1 1 0 0 0 1 1h11.252c.183.71.46 1.382.819 2.001L4 27a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.821zm-.866 2H5a1 1 0 0 0-1 1v5h24V9a1 1 0 0 0-1-1l-11.419-.021a2.998 2.998 0 0 1-1.836-.928l-1.33-1.419A2 2 0 0 0 10.956 5z" />
    </svg>
  )),
);
NewFile.displayName = 'NewFile';
NewFile['iconName'] = 'new-file';
export default NewFile;
