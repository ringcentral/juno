import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PlayCircle = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm-2.693 8.146c-.662-.351-1.198-.049-1.292.706l-.012.138-.003.11.002 9.803.003.119c.045.801.551 1.166 1.201.885l.116-.056.089-.051 8.11-4.998c.605-.435.637-1.064.099-1.518l-.108-.083-.093-.061-8.112-4.993z" />
    </svg>
  )),
);
PlayCircle.displayName = 'PlayCircle';
PlayCircle['iconName'] = 'play_circle';
export default PlayCircle;
