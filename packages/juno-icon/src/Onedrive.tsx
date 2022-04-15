import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const Onedrive = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M27.933 18.397c1.492.535 2.193 1.659 2.065 3.311-.083 1.081-.586 1.944-1.386 2.372l-.375.201-8.349.016c-6.415.013-8.454-.01-8.806-.098-1.695-.424-2.64-1.774-2.643-3.777-.001-.64.045-.947.205-1.359.391-1.009 1.427-1.771 2.789-2.051.678-.14.887-.289.887-.636 0-.109.081-.433.179-.72.448-1.304 1.278-2.392 2.164-2.837.928-.465 1.396-.57 2.519-.565 1.594.008 2.389.355 3.501 1.525l.611.644.548-.19c2.652-.92 5.296.645 5.509 3.261l.058.715.522.188zM7.729 22.665c.099.194.154.379.123.411-.081.081-2.67.053-3.028-.032-.99-.236-2.038-1.111-2.53-2.113C2.015 20.363 2 20.28 2 19.275c0-.956.024-1.11.246-1.584.468-1 1.365-1.723 2.491-2.007.237-.06.46-.156.496-.213s.074-.367.087-.689c.079-2.001 1.39-3.765 3.22-4.332.989-.305 2.232-.23 3.307.2.341.137.303.167 1.024-.781.427-.56 1.289-1.258 1.995-1.613.761-.383 1.553-.559 2.5-.557 2.648.007 4.929 1.665 5.772 4.197.27.808.256 1.035-.062 1.042-.139.003-.536.08-.883.17l-.631.165-.576-.577c-1.624-1.626-4.274-1.978-6.527-.866a5.417 5.417 0 0 0-2.169 1.914c-.39.592-.886 1.699-.886 1.973 0 .194-.157.292-.83.513-2.082.683-3.297 2.262-3.296 4.283 0 .736.19 1.636.452 2.151z" />
    </svg>
  )),
);
Onedrive.displayName = 'Onedrive';
Onedrive['iconName'] = 'onedrive';
export default Onedrive;
