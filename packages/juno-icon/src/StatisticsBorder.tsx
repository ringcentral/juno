import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const StatisticsBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28.552 1.014A2.727 2.727 0 0 1 31 3.728v24.545l-.014.279a2.729 2.729 0 0 1-2.435 2.435l-.279.014-24.824-.014a2.729 2.729 0 0 1-2.435-2.435l-.014-.279V3.728a2.728 2.728 0 0 1 2.448-2.714L3.726 1l24.824.014zM3.728 3A.727.727 0 0 0 3 3.728v18.099l6.852-6.852.076-.068a1 1 0 0 1 1.337.067l4.159 4.143 8.158-8.128h-3.805a1 1 0 0 1 0-2l6.324.005a1 1 0 0 1 .898.995v6.223a1 1 0 0 1-2 0v-3.813l-8.869 8.84a1 1 0 0 1-1.412 0l-4.158-4.144-7.561 7.56v3.618c0 .402.325.728.728.728h24.545a.727.727 0 0 0 .728-.728V3.728A.727.727 0 0 0 28.272 3H3.727z" />
    </svg>
  )),
);
StatisticsBorder.displayName = 'StatisticsBorder';
StatisticsBorder['iconName'] = 'statistics_border';
export default StatisticsBorder;
