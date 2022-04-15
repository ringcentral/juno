import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AddNewFolder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M4.545 3A2.552 2.552 0 0 0 2 5.545v15.273c0 1.4 1.145 2.545 2.545 2.545h10.284a8.899 8.899 0 0 1-.102-1.273 8.91 8.91 0 0 1 8.909-8.909c1.368 0 2.66.319 3.818.87V8.09c0-1.4-1.145-2.545-2.545-2.545h-9.128a2.545 2.545 0 0 1-1.8-.746l-1.054-1.054a2.547 2.547 0 0 0-1.8-.746H4.545zm19.101 12.747c-1.625 0-3.249.623-4.492 1.864a6.325 6.325 0 0 0 0 8.978c2.484 2.484 6.497 2.484 8.981 0s2.484-6.499 0-8.984a6.326 6.326 0 0 0-4.489-1.859zm.005 2.528c.703.001 1.273.57 1.273 1.273v1.273h1.273a1.273 1.273 0 0 1 0 2.546h-1.273v1.273a1.273 1.273 0 0 1-2.546 0v-1.273h-1.273a1.273 1.273 0 0 1 0-2.546h1.273v-1.273c0-.703.57-1.273 1.273-1.273z" />
    </svg>
  )),
);
AddNewFolder.displayName = 'AddNewFolder';
AddNewFolder['iconName'] = 'add_new_folder';
export default AddNewFolder;
