import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const PlayBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m10.614 5.267.193.101 16.217 9.164c1.294.837 1.303 2.087.017 2.934l-.214.13-16.185 9.128c-1.409.694-2.538.035-2.633-1.519l-.007-.217-.003-17.973.005-.201c.087-1.567 1.206-2.229 2.609-1.547zm-.615 1.941.003 17.587 15.576-8.789L9.999 7.208z" />
    </svg>
  )),
);
PlayBorder.displayName = 'PlayBorder';
PlayBorder['iconName'] = 'play_border';
export default PlayBorder;
