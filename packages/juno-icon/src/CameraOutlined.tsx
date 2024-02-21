import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const CameraOutlined = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M23 2a7 7 0 0 1 7 7v14a7 7 0 0 1-7 7H9a7 7 0 0 1-7-7V9a7 7 0 0 1 7-7h14zm0 2.1H9a4.9 4.9 0 0 0-4.891 4.601L4.1 9v14a4.9 4.9 0 0 0 4.601 4.891L9 27.9h14a4.9 4.9 0 0 0 4.891-4.602l.009-.299v-14a4.9 4.9 0 0 0-4.602-4.891l-.299-.009zm-7 6.3a5.6 5.6 0 1 1 0 11.2 5.6 5.6 0 0 1 0-11.2zm0 2.1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm7-5.25a1.75 1.75 0 1 1-.001 3.501A1.75 1.75 0 0 1 23 7.25z" />
    </svg>
  )),
);
CameraOutlined.displayName = 'CameraOutlined';
CameraOutlined['iconName'] = 'camera-outlined';
export default CameraOutlined;
