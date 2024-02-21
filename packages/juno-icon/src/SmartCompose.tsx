import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const SmartCompose = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M25.806 8.448a2.396 2.396 0 0 0-.521-2.617l-1.128-1.128a2.411 2.411 0 0 0-1.698-.704 2.396 2.396 0 0 0-1.698.704l-1.057 1.058a.871.871 0 0 0-.08.07l-.022.023a.606.606 0 0 0-.047.056l-8.31 8.323a.79.79 0 0 0-.185.186l-.483.484a.796.796 0 0 0-.21.371l-1.136 4.528a.8.8 0 0 0 .973.97l4.528-1.152a.791.791 0 0 0 .368-.21L25.284 9.226c.223-.223.4-.488.521-.779zm-3.652-2.787a.803.803 0 0 1 .872.174l1.128 1.128a.785.785 0 0 1 .174.872.787.787 0 0 1-.174.26l-.563.563L21.328 6.4l.566-.567a.826.826 0 0 1 .259-.174zm-1.956 1.872L22.46 9.79l-7.356 7.356-2.254-2.253 7.348-7.359zm-8.391 8.579 2.074 2.074-2.771.705.697-2.779zM6.069 23.666a1.6 1.6 0 0 1 1.131-.469.8.8 0 1 0 0-1.6 3.2 3.2 0 1 0 0 6.4h20a.8.8 0 1 0 0-1.6h-20a1.6 1.6 0 0 1-1.131-2.731z" />
    </svg>
  )),
);
SmartCompose.displayName = 'SmartCompose';
SmartCompose['iconName'] = 'smart-compose';
export default SmartCompose;
