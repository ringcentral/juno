import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Zendesk = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M12.178 19.074c1.487 1.368 3.12 2.282 3.752 2.607a7.719 7.719 0 0 0 4.179 4.134 7.719 7.719 0 0 1-4.014 3.97 7.84 7.84 0 0 1-4.104-4.025 7.555 7.555 0 0 1-.674-3.142c0-1.237.299-2.453.861-3.545zm-2.661-4.098c.314 1.295 1.074 2.441 1.971 3.407a7.899 7.899 0 0 0-1.455 4.556c0 .695.094 1.397.289 2.098a7.93 7.93 0 0 1-1.886.231 7.707 7.707 0 0 1-3.712-.95 8.777 8.777 0 0 1-.262-2.095c0-1.22.292-2.455.907-3.611a7.716 7.716 0 0 1 4.149-3.636zm17.237 3.617a7.715 7.715 0 0 1 .905 3.626c0 .67-.084 1.333-.249 1.977a8.13 8.13 0 0 1-3.834.985 7.614 7.614 0 0 1-1.864-.229 7.712 7.712 0 0 1-4.675-3.381c.709-.384 2.115-1.209 3.424-2.39.715.286 1.562.428 2.419.428a7.907 7.907 0 0 0 3.874-1.017zm-1.593-9.772c.096.016.181.054.274.074 1.808.454 3.431 1.496 4.535 2.949a7.828 7.828 0 0 1-2.912 4.951 7.714 7.714 0 0 1-4.761 1.64c-.334 0-.671-.023-1.006-.064 1.168-1.268 2.103-2.845 2.105-4.655 0-.312-.034-.609-.083-.883.94-1.024 1.61-2.402 1.842-3.95zm-16.883.038c1.398 0 2.731.38 3.892 1.057-1.499.384-2.809 1.69-2.806 3.797 0 .083.004.171.004.25-1.68.324-3.305 1.329-4.464 2.883a7.716 7.716 0 0 1-2.874-4.85A7.818 7.818 0 0 1 8.278 8.86zm1.46-6.53c.041.024.151.024.267.024 1.824 0 3.657.634 5.133 1.942a7.704 7.704 0 0 1 2.6 5.779c0 .09-.004.18-.004.267-.526.245-1.021.722-1.354 1.377-.623-1.217-1.806-1.83-2.962-1.911C12.041 8.445 10.099 7.6 7.976 7.6c-.091 0-.178.004-.265.004.01-.016.01-.04.01-.069 0-1.991.757-3.821 2.016-5.205zm12.081-.115a7.817 7.817 0 0 1 2.106 5.345 7.738 7.738 0 0 1-1.104 3.984c-.696-1.128-1.911-1.726-3.116-1.75h-.084c-.313 0-.632.037-.947.118.004-.148.009-.298.009-.45 0-1.888-.505-3.776-1.904-5.265 1.466-1.325 3.081-1.981 4.927-1.981z" />
    </svg>
  )),
);
Zendesk.displayName = 'Zendesk';
Zendesk['iconName'] = 'zendesk';
export default Zendesk;