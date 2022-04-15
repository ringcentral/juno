import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const MissedcallBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M9.791 2.353a3.42 3.42 0 0 1 1.577 1.5 33.63 33.63 0 0 0 1.257 2.265 49.99 49.99 0 0 0 1.696 2.601c.414.626.579 1.307.486 2.017-.091.699-.403 1.322-.977 1.9a6.076 6.076 0 0 1-1.027.705 1.161 1.161 0 0 1-.218.137l-.171.083-.178.098-.045.022a1.99 1.99 0 0 0-.144.067c.016.079.043.175.083.29l.098.258c.124.331.324.717.602 1.154.285.448.649.938 1.09 1.465a13.92 13.92 0 0 0 1.328 1.391c.395.352.753.616 1.068.791.121.067.226.121.312.159l.218-.239.08-.079.085-.107.254-.263.272-.265.049-.045c.171-.156.362-.306.617-.477a3.574 3.574 0 0 1 2.169-.483c.803.071 1.484.39 1.965.905a69.978 69.978 0 0 0 1.865 1.697l.459.399.947.804 1.129.938c.586.482.976 1.073 1.157 1.757.164.617.135 1.216-.074 1.743l-.087.194c-.193.479-.565 1.044-1.117 1.713-.476.576-.912 1.028-1.295 1.343l-.161.127c-.44.363-.947.637-1.516.818a6.01 6.01 0 0 1-1.829.264c-1.073 0-2.192-.21-3.356-.625-1.135-.405-2.29-.984-3.466-1.737a24.373 24.373 0 0 1-3.044-2.327l-.431-.391a36.73 36.73 0 0 1-3.448-3.565c-1.492-1.787-2.714-3.551-3.664-5.291-.955-1.731-1.628-3.354-2.018-4.87-.397-1.544-.493-2.938-.281-4.173.204-1.306.769-2.366 1.703-3.149.433-.361 1.041-.728 1.828-1.11.803-.39 1.468-.63 2.018-.716a3.627 3.627 0 0 1 2.133.308zM7.966 4.022c-.314.049-.8.222-1.451.538-.661.321-1.134.608-1.416.843-.548.46-.881 1.078-1.018 1.956-.16.934-.085 2.047.247 3.337.345 1.34.953 2.809 1.836 4.41.884 1.619 2.031 3.276 3.432 4.954a34.87 34.87 0 0 0 3.283 3.393 22.997 22.997 0 0 0 3.194 2.502c1.055.675 2.074 1.187 3.059 1.538.959.342 1.853.509 2.684.509.466 0 .872-.058 1.223-.17.274-.087.514-.206.768-.392l.155-.12c.275-.206.66-.595 1.112-1.142.391-.473.643-.844.765-1.097l.106-.236c.064-.128.078-.299.017-.53-.072-.27-.226-.504-.496-.726l-1.295-1.078-.817-.695-.471-.41a71.406 71.406 0 0 1-1.293-1.163l-.624-.582-.088-.088c-.138-.148-.36-.25-.681-.279a1.596 1.596 0 0 0-.827.134l-.119.063-.049.035a3.377 3.377 0 0 0-.189.145l-.079.069-.16.152-.227.231-.036.047-.09.104-.159.162-.157.172a1.998 1.998 0 0 1-2.3.472 6.246 6.246 0 0 1-.459-.233c-.46-.256-.934-.607-1.428-1.047a16.01 16.01 0 0 1-1.531-1.601 16.348 16.348 0 0 1-1.243-1.674 8.88 8.88 0 0 1-.691-1.286l-.073-.183a5.005 5.005 0 0 1-.292-.913 2 2 0 0 1 1.025-2.162l.25-.12.178-.098.111-.054.05-.036.143-.086c.134-.073.249-.143.346-.21l.175-.127.102-.083.049-.052c.16-.183.247-.349.289-.528l.02-.109a.87.87 0 0 0-.147-.621 52.75 52.75 0 0 1-1.763-2.705 34.089 34.089 0 0 1-1.299-2.338 1.447 1.447 0 0 0-.553-.588l-.12-.063a1.627 1.627 0 0 0-.976-.142zm13.241-1.729 3.536 3.535 3.535-3.535a.999.999 0 1 1 1.414 1.414l-3.535 3.535 3.535 3.536a.999.999 0 1 1-1.414 1.414l-3.535-3.536-3.536 3.536a.999.999 0 1 1-1.414-1.414l3.536-3.536-3.536-3.535a.999.999 0 1 1 1.414-1.414z" />
    </svg>
  )),
);
MissedcallBorder.displayName = 'MissedcallBorder';
MissedcallBorder['iconName'] = 'missedcall_border';
export default MissedcallBorder;
