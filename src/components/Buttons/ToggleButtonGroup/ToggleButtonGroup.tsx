import MuiToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import React, { ComponentProps, forwardRef, useMemo } from 'react';

import {
  combineClasses,
  RcBaseProps,
  styled,
  useThemeProps,
} from '../../../foundation';
import { RcToggleButtonProps } from '../ToggleButton';
import { ToggleButtonGroupStyle } from './styles';
import { RcToggleButtonGroupClasses } from './utils';

type RcToggleButtonGroupProps = {} & Pick<
  RcToggleButtonProps,
  'variant' | 'size'
> &
  RcBaseProps<ComponentProps<typeof MuiToggleButtonGroup>, 'size'>;

const _RcToggleButtonGroup = forwardRef<any, RcToggleButtonGroupProps>(
  (inProps, ref) => {
    const props = useThemeProps({
      props: inProps,
      name: 'RcToggleButtonGroup',
    });
    const { classes: classesProp, children, variant, size, ...rest } = props;
    const classes = useMemo(
      () => combineClasses(RcToggleButtonGroupClasses, classesProp),
      [classesProp],
    );
    return (
      <MuiToggleButtonGroup {...rest} ref={ref} classes={classes}>
        {(children as any[]).map((x, i) =>
          // * that key follow mui key logic
          // eslint-disable-next-line react/no-array-index-key
          React.cloneElement(x, { key: `.${i}`, size, variant }),
        )}
      </MuiToggleButtonGroup>
    );
  },
);

const RcToggleButtonGroup = styled(_RcToggleButtonGroup)`
  ${ToggleButtonGroupStyle}
`;

RcToggleButtonGroup.defaultProps = {
  size: 'medium',
  variant: 'standard',
};

RcToggleButtonGroup.displayName = 'RcToggleButtonGroup';

export { RcToggleButtonGroup, RcToggleButtonGroupProps };
