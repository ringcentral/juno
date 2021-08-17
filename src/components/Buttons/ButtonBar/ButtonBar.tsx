import React, {
  CSSProperties,
  FunctionComponent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  useCallback,
} from 'react';

import {
  RcBaseDirection,
  styled,
  useA11yKeyEvent,
  useDeprecatedLog,
} from '../../../foundation';
import { StyledButtonBar } from './styles';

type RcButtonBarProps = {
  /**
   * Define the size of the gap between components on the basis of 4.
   * Positive value means children will overlap and negative value vice versa.
   */
  overlapSize?: number;
  /** The margin spaces is on the basis of 4, default is 0 */
  margin?: number[];
  /** The arrangement of components, default is `horizontal`  */
  direction?: RcBaseDirection;
  /** children */
  children: ReactNode;
  /** pass id to the div */
  id?: string;
  /** pass the className */
  className?: string;
  /** customize the style of div */
  style?: CSSProperties;
  /** is Stop Propagation  for the bar click */
  isStopPropagation?: boolean;
  /** triggered when user click */
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  /** triggered when user hit the keyboard */
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
};

const _RcButtonBar: FunctionComponent<RcButtonBarProps> = (props) => {
  const { children, isStopPropagation, onClick, onKeyUp, ...rest } = props;

  useDeprecatedLog({
    component: 'RcButtonBar',
    message: `please use \`RcIconButtonGroup\` to replace that,
      \`margin\` => \`space\`
      \`overlapSize\` => \`gap\``,
  });

  const clickHandler = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      onClick && onClick(event);
      isStopPropagation && event.stopPropagation();
    },
    [onClick, isStopPropagation],
  );

  const handleOnKeyUp = useA11yKeyEvent(clickHandler, {
    preventDefault: false,
  });

  /** that button bar just for put buttons inside, and can stop below all events from this bar layer. */
  const keyUpHandler = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      onKeyUp && onKeyUp(event);
      isStopPropagation && event.stopPropagation();
      handleOnKeyUp(event);
    },
    [onKeyUp, isStopPropagation, handleOnKeyUp],
  );
  return (
    <StyledButtonBar onClick={clickHandler} onKeyUp={keyUpHandler} {...rest}>
      {children}
    </StyledButtonBar>
  );
};

_RcButtonBar.defaultProps = {
  overlapSize: 0,
  direction: 'horizontal',
};

/**
 * @deprecated
 * please use `RcIconButtonGroup` to replace that,
 * `margin` => `space`
 * `overlapSize` => `gap`
 */
const RcButtonBar = styled(_RcButtonBar)``;

RcButtonBar.displayName = 'RcButtonBar';

export { RcButtonBar, RcButtonBarProps };
