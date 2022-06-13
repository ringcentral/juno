import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const TodayCalendarIco = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M7.056 2C4.278 2 2 4.277 2 7.056v17.889c0 2.778 2.277 5.056 5.056 5.056h17.889c2.778 0 5.056-2.277 5.056-5.056V7.056C30.001 4.278 27.724 2 24.945 2H7.056zm0 2.333h17.889a2.706 2.706 0 0 1 2.722 2.722v1.167H4.334V7.055a2.706 2.706 0 0 1 2.722-2.722zm-2.723 6.223h23.333v14.389a2.706 2.706 0 0 1-2.722 2.722H7.055a2.706 2.706 0 0 1-2.722-2.722V10.556zm17.532 3.098a1.168 1.168 0 0 0-.899.398l-6.18 6.863-3.018-3.018a1.166 1.166 0 1 0-1.651 1.65l3.889 3.889a1.165 1.165 0 0 0 1.693-.044l7-7.778a1.166 1.166 0 0 0-.836-1.96h.001z" />
    </svg>
  )),
);
TodayCalendarIco.displayName = 'TodayCalendarIco';
TodayCalendarIco['iconName'] = 'today-calendar-ico';
export default TodayCalendarIco;
