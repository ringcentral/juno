import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Airbrake = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m16.175 2.248 13.642 6.947v13.541L16.21 29.753l-.035-.001-.072.001h-.416L2.184 22.736V9.195l13.503-6.947h.488zm1.179 7.11h-2.793l-4.303 10.767c-.122.335-.285.411-.632.411H9.3v2.071h1.611c1.02 0 1.366-.243 1.692-1.083l.897-2.314h4.894l.897 2.314c.326.84.693 1.083 1.713 1.083h1.59v-2.071h-.326c-.346 0-.509-.075-.632-.411L17.354 9.358zm-1.387 2.537s.306 1.251.571 1.979l1.244 3.322h-3.67l1.244-3.322c.265-.727.571-1.979.571-1.979z" />
    </svg>
  )),
);
Airbrake.displayName = 'Airbrake';
Airbrake['iconName'] = 'airbrake';
export default Airbrake;
