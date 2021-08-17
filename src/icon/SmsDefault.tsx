import React, { forwardRef, memo } from 'react';

const SmsDefault = memo(
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
        <path d="M16 8c-4.649 0-8.4 3.159-8.4 7.225l.003.191c.06 1.969 1.043 3.862 2.669 5.204l.176.141-.008.024c-.114.32-.324.748-.671 1.36l-.486.795c-.23.376.038.86.477.86h.991l.2-.003a5.452 5.452 0 003.412-1.305l.029-.026.276.043c.454.065.893.097 1.332.097 4.616 0 8.4-3.292 8.4-7.382 0-4.081-3.742-7.225-8.4-7.225z" />
      </svg>
    ),
  ),
);
SmsDefault.displayName = 'SmsDefault';
SmsDefault['iconName'] = 'sms-default';
export default SmsDefault;
