import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Asterisk = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M16.583 20v-2.463a1.93 1.93 0 0 0-.212-.896c.097.133.207.245.331.336s.265.182.424.274l2.291 1.244.583-.933-2.291-1.257c-.15-.091-.298-.16-.444-.205s-.298-.077-.457-.093a2.09 2.09 0 0 0 .901-.311l2.278-1.244-.583-.933-2.278 1.232c-.15.091-.285.182-.404.274s-.227.199-.325.323a2.04 2.04 0 0 0 .185-.896v-2.451h-1.166v2.463c0 .166.015.326.046.479s.086.305.166.454a2.224 2.224 0 0 0-.755-.647l-2.291-1.244-.583.933 2.291 1.257c.159.1.316.172.47.218s.32.077.497.093a2.365 2.365 0 0 0-.967.299l-2.278 1.244.583.933 2.278-1.232c.291-.166.525-.352.702-.56-.062.133-.104.27-.126.411s-.033.29-.033.448v2.451h1.166z" />
    </svg>
  )),
);
Asterisk.displayName = 'Asterisk';
Asterisk['iconName'] = 'asterisk';
export default Asterisk;
