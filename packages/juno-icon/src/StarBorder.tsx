import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const StarBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16.885 1.726c.394.195.714.514.908.908l2.97 6.018a1 1 0 0 0 .753.547l6.641.965a2.001 2.001 0 0 1 1.109 3.412L24.46 18.26c-.236.23-.343.561-.288.885l1.134 6.614a1.999 1.999 0 0 1-2.902 2.108l-5.94-3.123a1.002 1.002 0 0 0-.931 0l-5.94 3.123a2 2 0 0 1-2.902-2.109l1.134-6.614a.999.999 0 0 0-.288-.885l-4.806-4.684a2 2 0 0 1 1.109-3.411l6.641-.965a1 1 0 0 0 .753-.547l2.97-6.018a2 2 0 0 1 2.679-.908zM13.03 9.537a3.001 3.001 0 0 1-2.259 1.641l-6.24.907a.2.2 0 0 0-.111.341l4.515 4.401a3 3 0 0 1 .863 2.655l-1.066 6.215a.2.2 0 0 0 .29.211l5.581-2.934a3.003 3.003 0 0 1 2.792 0l5.581 2.934a.2.2 0 0 0 .27-.084c.02-.039.028-.084.02-.127L22.2 19.482a3 3 0 0 1 .863-2.655l4.515-4.401a.2.2 0 0 0-.11-.341l-6.24-.907a3.001 3.001 0 0 1-2.259-1.641l-2.791-5.655a.2.2 0 0 0-.359 0l-2.791 5.655z" />
    </svg>
  )),
);
StarBorder.displayName = 'StarBorder';
StarBorder['iconName'] = 'star_border';
export default StarBorder;
