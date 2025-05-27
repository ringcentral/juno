import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Statistics = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28.272 1A2.728 2.728 0 0 1 31 3.728v24.545a2.728 2.728 0 0 1-2.728 2.728H3.727a2.728 2.728 0 0 1-2.728-2.728v-1.619l9.56-9.56 4.158 4.144a1 1 0 0 0 1.412 0l8.87-8.841v3.814a1 1 0 0 0 2 0V9.988a1 1 0 0 0-.898-.995l-.102-.005h-6.223a1 1 0 0 0 0 2h3.805l-8.159 8.128-4.158-4.143a1 1 0 0 0-1.338-.067l-.075.068-8.852 8.852V3.727A2.728 2.728 0 0 1 3.727.999h24.545z" />
    </svg>
  )),
);
Statistics.displayName = 'Statistics';
Statistics['iconName'] = 'statistics';
export default Statistics;
