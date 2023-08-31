import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AvatarDelegatedLines = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M21.436 9c.892 0 1.215.093 1.541.267s.582.43.756.756c.174.326.267.649.267 1.541v4.872c0 .892-.093 1.215-.267 1.541s-.43.582-.756.756-.649.267-1.541.267H17v2.5h3.25a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5H15V19h-4.436c-.892 0-1.215-.093-1.541-.267s-.582-.43-.756-.756C8.093 17.651 8 17.328 8 16.436v-4.872c0-.892.093-1.215.267-1.541s.43-.582.756-.756C9.349 9.093 9.672 9 10.564 9zm-1.186 6h-5.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm-3-3.5h-5.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z" />
    </svg>
  )),
);
AvatarDelegatedLines.displayName = 'AvatarDelegatedLines';
AvatarDelegatedLines['iconName'] = 'avatar-delegated-lines';
export default AvatarDelegatedLines;
