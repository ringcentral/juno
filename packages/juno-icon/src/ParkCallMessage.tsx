import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const ParkCallMessage = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M22 8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.586a.997.997 0 0 0-.707.293l-3.141 3.141a.8.8 0 0 1-1.131 0l-3.141-3.141A1 1 0 0 0 8.587 26H4.001a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h18zm-1 2H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a2 2 0 0 1 1.414.586L13 27.172l2.586-2.586A2 2 0 0 1 17 24h4a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zm-6.656 2.382c1.74 0 2.98 1.306 2.98 3.117 0 1.75-1.162 3.034-2.806 3.123l-.185.005-2.632-.001.001 1.965c0 .505-.295.898-.746 1l-.116.019-.122.007c-.54 0-.925-.376-.977-.902l-.006-.124v-7.184c0-.547.346-.963.861-1.019l.122-.007h3.625zM28 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3v-2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1H8V4a2 2 0 0 1 2-2h18zM14.091 14.287l-2.39-.001v2.437h2.39c.826 0 1.239-.411 1.239-1.224 0-.757-.359-1.16-1.088-1.208l-.151-.005z" />
    </svg>
  )),
);
ParkCallMessage.displayName = 'ParkCallMessage';
ParkCallMessage['iconName'] = 'park-call-message';
export default ParkCallMessage;
