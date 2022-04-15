import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ParkLocation = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M22 2a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8V10a8 8 0 0 1 8-8h12zm0 2H10a6 6 0 0 0-5.996 5.775L4 10v12a6 6 0 0 0 5.775 5.996L10 28h12a6 6 0 0 0 5.996-5.775L28 22V10a6 6 0 0 0-5.775-5.996L22 4zm-4.639 5.226c2.548 0 4.333 1.816 4.333 4.399 0 2.379-1.6 4.129-3.912 4.328l-.219.014-.221.005-2.959-.001.001 3.527c0 .58-.467 1.05-1.046 1.05-.488 0-.904-.337-1.017-.812l-.022-.122-.007-.116V11.039c0-.888.638-1.635 1.499-1.787l.154-.021.153-.007h3.262zm-.417 1.922h-2.561v4.903h2.561c1.679 0 2.612-.871 2.612-2.424s-.831-2.409-2.411-2.475l-.201-.004z" />
    </svg>
  )),
);
ParkLocation.displayName = 'ParkLocation';
ParkLocation['iconName'] = 'park-location';
export default ParkLocation;
