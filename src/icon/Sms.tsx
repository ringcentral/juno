import React, { forwardRef, memo } from 'react';

const Sms = memo(
  forwardRef(
    (
      props: React.SVGProps<SVGSVGElement>,
      svgRef?: React.Ref<SVGSVGElement>,
    ) => (
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        {...props}
      >
        <path d="M16 3C8.252 3 2 8.199 2 14.889l.005.314c.1 3.24 1.738 6.355 4.449 8.564l.294.232-.013.04c-.191.526-.539 1.231-1.119 2.237l-.811 1.308A.929.929 0 005.6 29h1.652l.333-.005c2.311-.074 4.224-.916 5.687-2.147l.048-.042.461.072a15.9 15.9 0 002.221.16c7.694 0 14-5.417 14-12.148 0-6.715-6.237-11.889-14-11.889z" />
      </svg>
    ),
  ),
);
Sms.displayName = 'Sms';
Sms['iconName'] = 'sms';
export default Sms;
