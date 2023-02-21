import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AdvancedSetting = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M10.612 2a9.24 9.24 0 0 0-8.403 5.393h6.788a2.08 2.08 0 0 1 2.083 2.081v3.031a2.08 2.08 0 0 1-2.083 2.081H2a9.248 9.248 0 0 0 12.268 5.128l9.372 9.366a3.138 3.138 0 0 0 4.44 0 3.136 3.136 0 0 0 0-4.44l-9.228-9.226a9.207 9.207 0 0 0 1-4.186c0-5.097-4.135-9.23-9.239-9.23z" />
    </svg>
  )),
);
AdvancedSetting.displayName = 'AdvancedSetting';
AdvancedSetting['iconName'] = 'advanced-setting';
export default AdvancedSetting;
