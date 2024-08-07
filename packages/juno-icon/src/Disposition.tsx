import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Disposition = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m6.858 5.1 10.929.005c2.794.07 3.803.829 4.069 3.278l.036.401.014.211.019.445.006.234.005.49a.9.9 0 0 1-1.8 0l-.005-.797-.008-.344-.014-.311-.022-.279-.031-.249c-.137-.899-.503-1.17-1.474-1.251l-.267-.017-.296-.01-.686-.006H6.86a.963.963 0 0 0-.951.861l-.006.114v16.773c0 .503.372.915.846.971l.111.007h9.918a.9.9 0 0 1 .113 1.793l-.113.007H6.86a2.767 2.767 0 0 1-2.753-2.609l-.005-.169V7.875a2.767 2.767 0 0 1 2.589-2.77l.168-.005z" />
      <path d="M16.776 10.649a.9.9 0 0 1 .113 1.793l-.113.007h-8.32a.9.9 0 0 1-.113-1.793l.113-.007h8.32zm-3.429 3.044a.9.9 0 0 1 .113 1.793l-.113.007H8.456a.9.9 0 0 1-.113-1.793l.113-.007h4.891zm15.166-1.244-3.421-3.274-9.026 9.154-.604 4.309 4.299-.888 8.753-9.301zm-3.421-1.226 1.405 1.322-7.509 7.795-2.083.789.492-1.915 7.694-7.99z" />
      <path d="M22.601 12.071a.9.9 0 0 1 1.181-.08l1.737 1.688c.176.176.189.361.189.592s-.063.461-.239.636a.933.933 0 0 1-1.205.08l-1.663-1.644a.901.901 0 0 1 0-1.273z" />
    </svg>
  )),
);
Disposition.displayName = 'Disposition';
Disposition['iconName'] = 'Disposition';
export default Disposition;
