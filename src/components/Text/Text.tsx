import React, { forwardRef, useMemo, useRef, useState } from 'react';

import clsx from 'clsx';
import isString from 'lodash/isString';

import {
  combineProps,
  styled,
  useForkRef,
  useOverflow,
  useThemeProps,
} from '../../foundation';
import { RcTypography, RcTypographyProps } from '../Typography';
import { highlightClassName, textStyle } from './styles';

type RcTextProps = {
  /** when set `true`, add style `flex: 1 1 auto` */
  flexFull?: boolean;
  /** highlight for text with color and background to be mentionMe */
  highlight?: boolean;
  /**
   * is show title only when truncated, use `number` value to truncate text at a specific number of lines.
   * ### should not change titleWhenOverflow dynamically, keep that be same value, that will cause hook issue
   */
  titleWhenOverflow?: boolean | number;
} & RcTypographyProps;

const _RcText = forwardRef<any, RcTextProps>((inProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcText' });
  const {
    children,
    className: classNameProp,
    flexFull,
    highlight,
    title,
    titleWhenOverflow,
    useRcTooltip,
    TooltipProps: TooltipPropsProp,
    ...rest
  } = props;
  const [isShowTitle, setIsShowTitle] = useState(true);

  const innerRef = useRef<HTMLElement>(null);

  const textRef = useForkRef(innerRef, ref);

  // * here put hook in if else, titleWhenOverflow not change any more
  if (titleWhenOverflow) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useOverflow(innerRef, (state) => setIsShowTitle(state));
  }

  const className = useMemo(
    () => clsx(classNameProp, { [highlightClassName]: highlight }),
    [classNameProp, highlight],
  );

  const TooltipProps = useMemo(
    () =>
      combineProps(
        {
          tooltipForceHide: !isShowTitle,
        },
        TooltipPropsProp,
      ),
    [TooltipPropsProp, isShowTitle],
  );

  return (
    <RcTypography
      ref={textRef}
      title={
        isShowTitle || useRcTooltip // * if useRcTooltip always keep title pass into
          ? // * if user pass title, use title first
            title || (isString(children) ? children : undefined)
          : undefined
      }
      TooltipProps={TooltipProps}
      useRcTooltip={useRcTooltip}
      variant={highlight ? 'inherit' : undefined}
      component={highlight ? 'span' : undefined}
      className={className}
      {...rest}
    >
      {children}
    </RcTypography>
  );
});

/**
 * `RcText` will auto add title with children when that children is string
 *  and the default wrap is noWrap,
 *  also bring with show title only when overflow
 */
const RcText = styled(_RcText)`
  ${textStyle}
`;

RcText.defaultProps = {
  noWrap: true,
};

export { RcText };
export type { RcTextProps };
