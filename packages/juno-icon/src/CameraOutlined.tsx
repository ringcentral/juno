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
      <path d="M20.2 3.6a2 2 0 0 1 2 2v7.202L22 12.8c-.615 0-1.216.055-1.8.162V6.6a1 1 0 0 0-1-1H4.8a1 1 0 0 0-1 1V19a1 1 0 0 0 1 1h7.597a9.989 9.989 0 0 0-.366 2H3.799a2 2 0 0 1-2-2V5.6a2 2 0 0 1 2-2h16.4zM30.2 17.075V7.418l-.007-.117a1 1 0 0 0-.993-.883v-.002c-.155 0-.308.037-.447.106l-5 2.5-.108.063a1 1 0 0 0-.445.832v2.954c.691.083 1.36.236 2 .452v-2.787l3-1.5v5.917c.765.605 1.44 1.32 2 2.121zM22 26.8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <path d="M22 30.8a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
    </svg>
  )),
);
CameraOutlined.displayName = 'CameraOutlined';
CameraOutlined['iconName'] = 'camera-outlined';
export default CameraOutlined;
