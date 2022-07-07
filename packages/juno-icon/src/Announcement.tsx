import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Announcement = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M17.024 11.159c.559 0 1.012.435 1.012.971v7.765c0 .536-.453.971-1.012.971l-6.07-1.726v2.346a.674.674 0 0 1-1.348 0l-.001-2.73-1.685-.478c-.598-.145-1.012-.471-1.012-.971v-2.588c0-.468.412-.793 1.012-.971l9.104-2.588zm7.258 1.575.047.054c.596.837.919 1.842.914 2.896s-.338 2.062-.943 2.906a.354.354 0 1 1-.578-.412c.518-.723.803-1.585.808-2.49s-.272-1.764-.783-2.482a.358.358 0 0 1 .085-.498.357.357 0 0 1 .45.026zm-4.373 3.295c0 1.456-1.535 2.259-1.535 2.103v-4.206c0-.163 1.535.647 1.535 2.103zm3.157-1.921a3.222 3.222 0 0 1-.017 3.176.358.358 0 1 1-.622-.352 2.516 2.516 0 0 0 .014-2.47.36.36 0 0 1 .626-.355z" />
    </svg>
  )),
);
Announcement.displayName = 'Announcement';
Announcement['iconName'] = 'Announcement';
export default Announcement;
