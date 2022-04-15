import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Dropbox = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m10.519 22.653-7.852-5.227 5.416-4.441 7.916 4.998-5.48 4.67zm5.48-4.671 7.918-4.997 5.416 4.44-7.837 5.228-5.497-4.671zm.033 1.017 5.496 4.653 2.357-1.572v1.769l-7.853 4.801v.016l-.016-.016-.017.016v-.016l-7.835-4.801V22.08l2.356 1.572L16 18.999v-.033l.017.016.016-.016v.033zM2.667 8.56l7.852-5.227 5.48 4.671-7.916 4.981L2.667 8.56zm18.829-5.227 7.837 5.227-5.416 4.425-7.918-4.981 5.497-4.671z" />
    </svg>
  )),
);
Dropbox.displayName = 'Dropbox';
Dropbox['iconName'] = 'dropbox';
export default Dropbox;
