import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const AddTeam = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M27 19a5 5 0 1 1-.001 10.001A5 5 0 0 1 27 19zM8 19c.9 0 1.769.13 2.582.373C8.969 21.185 8 23.459 8 26c0 .638.149 1.241.415 1.776l.121.225L2 28a2 2 0 0 1-2-2c0-3.955 3.654-7 8-7zm13-2c1.216 0 2.392.161 3.495.461A7.004 7.004 0 0 0 21.255 28H12a2 2 0 0 1-2-2c0-5.096 5.019-9 11-9zm6 3c-.473 0-.87.329-.974.771l-.02.113-.007.117v2h-2l-.117.007a1 1 0 0 0-.112 1.967l.113.02.117.007h1.999l.001 2 .007.117a1 1 0 0 0 1.967.112l.02-.113.007-.117-.001-2h2.001l.117-.007a1 1 0 0 0 .112-1.967l-.113-.02L30 23h-2v-2l-.007-.117A1 1 0 0 0 27 20zM8 7a5 5 0 1 1-.001 10.001A5 5 0 0 1 8 7zm13-4a6 6 0 1 1 0 12 6 6 0 0 1 0-12z" />
    </svg>
  )),
);
AddTeam.displayName = 'AddTeam';
AddTeam['iconName'] = 'add-team';
export default AddTeam;
