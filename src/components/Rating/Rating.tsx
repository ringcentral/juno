import MuiRating, {
  IconContainerProps as MuiIconContainerProps,
} from '@material-ui/lab/Rating';
import React, { ComponentProps, forwardRef, useCallback, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  RcPaletteProp,
  styled,
  useEventCallback,
  useThemeProps,
} from '../../foundation';
import Star from '../../icon/Star';
import StarBorder from '../../icon/StarBorder';
import { RcIcon } from '../Icon';
import { RcTooltip, RcTooltipProps } from '../Tooltip';
import { RatingStyle } from './styles';
import { RcRatingClasses } from './utils';

const defaultSize = 'xlarge';

const defaultIcon = <RcIcon size={defaultSize} symbol={Star} />;

const defaultEmptyIcon = <RcIcon symbol={StarBorder} size={defaultSize} />;

type RcRatingProps = {
  /** content of tooltip, array for each icon, `['first icon', 'second icon', ...]` */
  tooltips?: string[];
  /** whether use emphasized style, emphasized means will use palette color `warning.f02` */
  emphasized?: boolean;
  /** disable tooltip */
  disableTooltip?: boolean;
  /** props for pass into `RcTooltip` */
  TooltipProps?: Omit<Partial<RcTooltipProps>, 'title' | 'open'>;
  /** color for rating icon, when is not emphasized */
  color?: RcPaletteProp;
} & RcBaseProps<
  ComponentProps<typeof MuiRating>,
  'size' | 'precision' | 'IconContainerComponent'
>;

const _RcRating = forwardRef<any, RcRatingProps>(
  (inProps: RcRatingProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcRating' });
    const {
      TooltipProps,
      disableTooltip,
      classes: classesProp,
      onChangeActive: onChangeActiveProp,
      max,
      tooltips,
      emphasized,
      color,
      ...rest
    } = props;

    const tooltipOpenStatus = useMemo(() => {
      const tooltipOpenStatus: boolean[] = [];
      for (let i = 0; i < max!; i++) {
        tooltipOpenStatus.push(false);
      }
      return tooltipOpenStatus;
    }, [max]);

    const IconContainer = useCallback(
      (containerProps: MuiIconContainerProps) => {
        const { value: itemValue, children, ...other } = containerProps;

        return (
          <span {...other}>
            {!disableTooltip && tooltips?.[itemValue - 1] ? (
              <RcTooltip
                title={tooltips[itemValue - 1]}
                open={!!tooltipOpenStatus[itemValue - 1]}
                {...TooltipProps}
              >
                {children as React.ReactElement<any, any>}
              </RcTooltip>
            ) : (
              children
            )}
          </span>
        );
      },
      [disableTooltip, tooltips, tooltipOpenStatus, TooltipProps],
    );

    const onChangeActive = useEventCallback(
      (e: React.ChangeEvent<{}>, value: number) => {
        tooltipOpenStatus.forEach((v, i) => {
          tooltipOpenStatus[i] = i === value - 1;
        });
        onChangeActiveProp?.(e, value);
      },
    );

    const classes = useMemo(
      () => combineClasses(RcRatingClasses, classesProp),
      [classesProp],
    );

    return (
      <MuiRating
        ref={ref}
        classes={classes}
        max={max}
        IconContainerComponent={IconContainer}
        onChangeActive={onChangeActive}
        {...rest}
      />
    );
  },
);

const RcRating = styled(_RcRating)`
  ${RatingStyle}
`;

RcRating.defaultProps = {
  icon: defaultIcon,
  emptyIcon: defaultEmptyIcon,
  tooltips: [],
  emphasized: true,
  disableTooltip: false,
  name: 'rating',
  color: 'neutral.f06',
  max: 5,
};

RcRating.displayName = 'RcRating';

export { RcRating, RcRatingProps };
