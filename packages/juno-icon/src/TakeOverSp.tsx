import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const TakeOverSp = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="m6.846 14.358 3.614 1.362a2.966 2.966 0 0 1 1.961 2.786l-.003.155c0 .551.344 1.021.828 1.208l.144.046c.653.169 1.635.376 2.617.406.981.005 1.959-.097 2.918-.303a.975.975 0 0 0 .746-.783l.013-.133.009-.275a2.986 2.986 0 0 1 1.924-2.696l.218-.072 3.949-1.152.243.943c1 1.851 1.157 3.671.451 5.269h-.002a5.938 5.938 0 0 1-1.054 1.591l-.371.376a8.966 8.966 0 0 1-1.789 1.286l-.047.023c-1.906 1.038-4.321 1.598-6.848 1.598l-.531-.009c-4.646-.139-8.706-2.146-10.107-4.994-.618-1.257-1.014-3.29.606-5.831l.512-.8zM16 4.571l4.177 4.181-1.211 1.211-2.167-2.167v8.847h-1.714V7.915l-2.05 2.048-1.211-1.211 4.177-4.181z" />
    </svg>
  )),
);
TakeOverSp.displayName = 'TakeOverSp';
TakeOverSp['iconName'] = 'take-over_sp';
export default TakeOverSp;
