import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const DeskphonePairingInfo = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16 9a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 2a5 5 0 1 0 .001 10.001A5 5 0 0 0 16 11zm1 5v3h-2v-3h2zm0-3v2h-2v-2h2z" />
    </svg>
  )),
);
DeskphonePairingInfo.displayName = 'DeskphonePairingInfo';
DeskphonePairingInfo['iconName'] = 'deskphone-pairing-info';
export default DeskphonePairingInfo;
