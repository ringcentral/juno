import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const HangUpSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m15.653 7.245.525.01c5.934.179 11.101 2.67 12.856 6.238.948 1.933.908 4.197-.584 6.699l-.301.482-4.399-1.28a3.124 3.124 0 0 1-2.078-2.837l-.001-.418a2.605 2.605 0 0 0-1.96-2.422c-1.232-.32-2.513-.538-3.711-.575-1.305-.039-2.726.13-4.132.427a2.2 2.2 0 0 0-1.024.534c-.388.388-.611.825-.672 1.314l-.016.212-.014.364a3.121 3.121 0 0 1-2.08 2.863l-.196.063-4.447 1.008-.104-.187c-1.271-2.281-1.498-4.518-.642-6.456a7.122 7.122 0 0 1 1.017-1.618l.254-.288.283-.296.157-.152.363-.322a11.08 11.08 0 0 1 1.941-1.322c2.484-1.349 5.649-2.066 8.965-2.042z" />
    </svg>
  )),
);
HangUpSp.displayName = 'HangUpSp';
HangUpSp['iconName'] = 'hang-up_sp';
export default HangUpSp;
