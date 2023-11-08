import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PushToTalk = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M11 1a1 1 0 0 1 1 1l-.001 3.008 11.997.001a3 3 0 0 1 2.993 2.795l.007.205v12.387c0 .591-.175 1.169-.502 1.662l-1.543 2.317-.686 4.119a3 3 0 0 1-2.777 2.501l-.182.006H10.695a3 3 0 0 1-2.959-2.507l-.687-4.119-1.536-2.32a2.999 2.999 0 0 1-.491-1.436l-.008-.22V8.01a3 3 0 0 1 3-3H10V2.002a1 1 0 0 1 1-1zm12.996 6.009H8.014a1 1 0 0 0-1 1v12.389c0 .196.058.388.166.552l1.772 2.676.756 4.539a1 1 0 0 0 .986.836h10.611a1 1 0 0 0 .986-.836l.757-4.54 1.78-2.675c.109-.164.167-.357.167-.554V8.009a1 1 0 0 0-1-1zM18 24a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h4zm2-4a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2h8zm.667-9.667a1 1 0 0 1 1 1v4.333a1 1 0 0 1-1 1h-9.333a1 1 0 0 1-1-1v-4.333a1 1 0 0 1 1-1h9.333zm-1 2h-7.333v2.333h7.333v-2.333z" />
    </svg>
  )),
);
PushToTalk.displayName = 'PushToTalk';
PushToTalk['iconName'] = 'push-to-talk';
export default PushToTalk;
