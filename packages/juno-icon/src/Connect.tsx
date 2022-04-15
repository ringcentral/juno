import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Connect = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M23.344 16.945a1 1 0 0 0-1.32.083l-.083.094a1 1 0 0 0 .083 1.32l2.562 2.563L12.953 21a1 1 0 0 0 .117 1.993l11.518.012-2.564 2.565-.083.094a1 1 0 0 0 1.497 1.32l4.271-4.271.083-.094a1 1 0 0 0-.083-1.32l-4.271-4.271zM8.654 4.962l-.094.083-4.271 4.271a1 1 0 0 0-.083 1.32l.083.094 4.271 4.271a.999.999 0 0 0 1.497-1.32l-.083-.094-2.564-2.565 12.586-.012a1 1 0 0 0 .117-1.993l-.117-.007-12.584.012 2.562-2.563a1 1 0 0 0 .083-1.32l-.083-.094a1 1 0 0 0-1.32-.083z" />
    </svg>
  )),
);
Connect.displayName = 'Connect';
Connect['iconName'] = 'connect';
export default Connect;
