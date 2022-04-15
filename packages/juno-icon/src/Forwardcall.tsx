import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Forwardcall = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M9.791 2.353a3.42 3.42 0 0 1 1.577 1.5 33.63 33.63 0 0 0 1.257 2.265 49.99 49.99 0 0 0 1.696 2.601c.414.626.579 1.307.486 2.017-.091.699-.403 1.322-.977 1.9a6.076 6.076 0 0 1-1.027.705 1.161 1.161 0 0 1-.218.137l-.171.083-.178.098-.045.022a1.99 1.99 0 0 0-.144.067c.016.079.043.175.083.29l.098.258c.124.331.324.717.602 1.154.285.448.649.938 1.09 1.465a13.92 13.92 0 0 0 1.328 1.391c.395.352.753.616 1.068.791.121.067.226.121.312.159l.218-.239.08-.079.085-.107.254-.263.272-.265.049-.045c.171-.156.362-.306.617-.477a3.574 3.574 0 0 1 2.169-.483c.803.071 1.484.39 1.965.905a69.978 69.978 0 0 0 1.865 1.697l.459.399.947.804 1.129.938c.586.482.976 1.073 1.157 1.757.164.617.135 1.216-.074 1.743l-.087.194c-.193.479-.565 1.044-1.117 1.713-.476.576-.912 1.028-1.295 1.343l-.161.127c-.44.363-.947.637-1.516.818a6.01 6.01 0 0 1-1.829.264c-1.073 0-2.192-.21-3.356-.625-1.135-.405-2.29-.984-3.466-1.737a24.373 24.373 0 0 1-3.044-2.327l-.431-.391a36.73 36.73 0 0 1-3.448-3.565c-1.492-1.787-2.714-3.551-3.664-5.291-.955-1.731-1.628-3.354-2.018-4.87-.397-1.544-.493-2.938-.281-4.173.204-1.306.769-2.366 1.703-3.149.433-.361 1.041-.728 1.828-1.11.803-.39 1.468-.63 2.018-.716a3.627 3.627 0 0 1 2.133.308zm15.916-.06 4.243 4.243a.999.999 0 0 1 0 1.414l-4.243 4.243a.999.999 0 1 1-1.414-1.414l3.536-3.536-3.536-3.536a.999.999 0 1 1 1.414-1.414zm-5 0 4.243 4.243a.999.999 0 0 1 0 1.414l-4.243 4.243a.999.999 0 1 1-1.414-1.414l3.536-3.536-3.536-3.536a.999.999 0 1 1 1.414-1.414z" />
    </svg>
  )),
);
Forwardcall.displayName = 'Forwardcall';
Forwardcall['iconName'] = 'forwardcall';
export default Forwardcall;
