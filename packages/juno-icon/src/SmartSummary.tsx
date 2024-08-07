import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const SmartSummary = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m21.752 3.626-.312 1.072-.005.021a2.974 2.974 0 0 1-2.029 2.019l-.884.26c-.15.042-.334.094-.334.24v.009a.18.18 0 0 0 .148.177l1.07.314a2.96 2.96 0 0 1 2.032 2.038l.246.84.014.05c.042.15.094.334.24.334h.007a.18.18 0 0 0 .177-.148l.314-1.074.005-.021a2.977 2.977 0 0 1 2.027-2.019l.836-.246.024-.006.024-.008c.152-.04.336-.094.336-.24v-.009a.18.18 0 0 0-.148-.177l-1.072-.312a2.974 2.974 0 0 1-2.032-2.04l-.314-1.074c-.056-.168-.332-.168-.37 0zM1.312 13.5c0 .69.56 1.25 1.25 1.25h12.5a1.25 1.25 0 0 0 0-2.5h-12.5c-.69 0-1.25.56-1.25 1.25zm1.248 3.75h8.974a1.25 1.25 0 0 1 0 2.5H2.562a1.25 1.25 0 0 1 0-2.5zM1.312 23.5c0 .69.56 1.25 1.25 1.25h6.324a1.25 1.25 0 0 0 0-2.5H2.562c-.69 0-1.25.56-1.25 1.25zm26.376-12.29-.116-.068h-.004a1.266 1.266 0 0 0-1.385.142l.002-.002-12.016 12.184-.1.114-.104.148c-.109.16-.189.348-.23.55l-.002.01-.546 3.036.016.178.026.15.034.112c.162.408.538.698.986.732h.004l.13.004h.112l3.086-.69.154-.042.17-.068c.197-.085.366-.201.508-.342l12.038-12.204.092-.16.056-.116.042-.122a1.174 1.174 0 0 0-.427-1.256l-.003-.002-2.356-2.152-.064-.056-.104-.08zm-12.034 13.5 8.084-8.2 1.34 1.344-8.02 8.128-1.7.38.296-1.652zm11.362-11.524 1.404 1.28-1.876 1.9-1.34-1.342 1.812-1.838z" />
    </svg>
  )),
);
SmartSummary.displayName = 'SmartSummary';
SmartSummary['iconName'] = 'smart-summary';
export default SmartSummary;
