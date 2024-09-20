import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AiSummaryMd = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m28.995 6.129 2.009.57c.587.178.995.713.995 1.318s-.409 1.158-.995 1.318l-2.009.57a4.502 4.502 0 0 0-3.111 3.118l-.569 2.014c-.16.57-.693.962-1.316.962s-1.155-.392-1.316-.962l-.569-2.014a4.502 4.502 0 0 0-3.111-3.118l-2.009-.57c-.587-.16-.996-.713-.996-1.318s.409-1.158.996-1.318l2.009-.57a4.502 4.502 0 0 0 3.111-3.118l.569-2.013C22.843.41 23.394 0 23.999 0s1.138.41 1.316.998l.569 2.013a4.502 4.502 0 0 0 3.111 3.118zM24 11.247a6.893 6.893 0 0 1 3.23-3.229A6.893 6.893 0 0 1 24 4.789a6.893 6.893 0 0 1-3.23 3.229A6.893 6.893 0 0 1 24 11.247zM0 11h14v2.4H0V11zM0 19h18v2.4H0V19zM22 27H0v2.4h22V27z" />
    </svg>
  )),
);
AiSummaryMd.displayName = 'AiSummaryMd';
AiSummaryMd['iconName'] = 'AISummaryMD';
export default AiSummaryMd;
