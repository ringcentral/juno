import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const SmsTemplate = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M22.129 16.509a1 1 0 0 1 1.742 0l1.996 3.542 3.988.806a1 1 0 0 1 .615 1.564l-.076.093-2.754 2.993.468 4.041a1 1 0 0 1-1.303 1.066l-.107-.042L23 28.88l-3.698 1.692a1 1 0 0 1-1.416-.91l.007-.114.467-4.041-2.753-2.993a1 1 0 0 1 .422-1.626l.117-.031 3.987-.806zM16 2c6.627 0 12 5.373 12 12v1h-2v-1c0-5.523-4.477-10-10-10H7a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h8v2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 17.037-1.351 2.396a.998.998 0 0 1-.673.489l-2.697.544 1.862 2.025a.997.997 0 0 1 .264.668l-.007.124-.316 2.732 2.502-1.144a.999.999 0 0 1 .717-.044l.115.044 2.501 1.144-.315-2.732a1 1 0 0 1 .179-.696l.078-.096 1.861-2.025-2.696-.544a1.001 1.001 0 0 1-.606-.385l-.067-.104zM18 14a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2zm2-5a1 1 0 0 1 0 2h-9a1 1 0 0 1 0-2z" />
    </svg>
  )),
);
SmsTemplate.displayName = 'SmsTemplate';
SmsTemplate['iconName'] = 'sms-template';
export default SmsTemplate;
