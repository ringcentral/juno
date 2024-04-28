import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Regenerate = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M28.915 17.441a12.992 12.992 0 0 1-23.914 5.474v3.752a.997.997 0 0 1-1 1 .997.997 0 0 1-1-1V20a.997.997 0 0 1 1-1h6.667a.997.997 0 0 1 1 1 .997.997 0 0 1-1 1h-4.44a10.983 10.983 0 0 0 17.828 2.514 10.978 10.978 0 0 0 2.879-6.288 1.01 1.01 0 0 1 .712-.868 1.005 1.005 0 0 1 .769.083 1.01 1.01 0 0 1 .48.607c.036.128.045.262.029.393h-.007zM28 4.333a.997.997 0 0 0-1 1v3.752a12.991 12.991 0 0 0-23.914 5.474 1.001 1.001 0 0 0 .887 1.103h.109a1.004 1.004 0 0 0 .992-.892 10.98 10.98 0 0 1 20.7-3.77h-4.44a.997.997 0 0 0-1 1 .997.997 0 0 0 1 1h6.667a.997.997 0 0 0 1-1V5.333a.997.997 0 0 0-1-1z" />
    </svg>
  )),
);
Regenerate.displayName = 'Regenerate';
Regenerate['iconName'] = 'regenerate';
export default Regenerate;
