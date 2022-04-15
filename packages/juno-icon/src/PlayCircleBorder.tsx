import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PlayCircleBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 2C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm-3.432 5.17.116.065 9.73 5.832c.776.533.782 1.328.01 1.867l-.128.083-9.711 5.808c-.845.442-1.523.022-1.58-.967l-.004-.138-.002-11.437.003-.128c.052-.997.724-1.418 1.565-.984zm.431 2.584.002 8.494 7.093-4.245-7.095-4.249z" />
    </svg>
  )),
);
PlayCircleBorder.displayName = 'PlayCircleBorder';
PlayCircleBorder['iconName'] = 'play_circle_border';
export default PlayCircleBorder;
