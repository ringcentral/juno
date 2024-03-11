import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';

const SmartSummary = memo(
  forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path d="M20.602 6.1c.029-.133.251-.133.296 0l.251.86a2.37 2.37 0 0 0 1.626 1.631l.857.252a.144.144 0 0 1 .118.148c0 .117-.147.159-.268.193l-.02.006-.019.005-.669.197a2.372 2.372 0 0 0-1.626 1.631l-.251.86a.145.145 0 0 1-.148.119c-.117 0-.158-.147-.192-.267l-.011-.039-.196-.672a2.372 2.372 0 0 0-1.626-1.631l-.857-.252a.144.144 0 0 1-.118-.148c0-.117.147-.159.268-.192l.039-.011.669-.197a2.372 2.372 0 0 0 1.626-1.631l.251-.86zM4.25 14a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2h-10a1 1 0 0 1-1-1zM4.25 18a1 1 0 0 1 1-1h7.177a1 1 0 0 1 0 2H5.251a1 1 0 0 1-1-1zM4.25 22a1 1 0 0 1 1-1h5.059a1 1 0 0 1 0 2H5.25a1 1 0 0 1-1-1zM25.258 12.113l.093.055.083.063.052.046 1.885 1.722a.938.938 0 0 1 .344 1.005l-.034.099-.044.091-.074.129-9.63 9.763a1.3 1.3 0 0 1-.407.275l-.135.053-.124.034-2.468.552h-.09l-.104-.003a.923.923 0 0 1-.791-.586l-.028-.09-.021-.12-.012-.141.438-2.428c.028-.151.085-.296.185-.45l.083-.118.082-.092 9.612-9.747a1.018 1.018 0 0 1 1.106-.112l.003-.001zm-3.067 4.296-6.467 6.559-.238 1.321 1.36-.303 6.417-6.504-1.072-1.074zm2.622-2.66-1.45 1.47 1.074 1.074 1.5-1.52-1.123-1.024z" />
    </svg>
  )),
);
SmartSummary.displayName = 'SmartSummary';
SmartSummary['iconName'] = 'smart-summary';
export default SmartSummary;
