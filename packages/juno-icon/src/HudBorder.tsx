import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const HudBorder = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28 3a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H17v2h4a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2h4v-2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h24zm-1 2H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-3 3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h16zm-1 2H9v8h14v-8z" />
    </svg>
  )),
);
HudBorder.displayName = 'HudBorder';
HudBorder['iconName'] = 'hud_border';
export default HudBorder;
