import RootRef from '@material-ui/core/RootRef';
import MuiTabs, { TabsProps as MuiTabsProps } from '@material-ui/core/Tabs';
import React, { FunctionComponent, forwardRef } from 'react';
import {
  styled,
  css,
  spacing,
  RcBaseProps,
  combineProps,
  palette2,
} from '../../../../foundation';
import { RcTabPosition, RcTabsProps } from '../Tabs';
import {
  RcTabPositions,
  RcStyledTabsClasses,
  IndicatorDefaultClassName,
} from '../utils';

type StyledTabsProps = {
  averageWidth?: boolean;
  forceFlex?: boolean;
  size?: RcTabsProps['size'];
  position?: RcTabPosition;
  disableIndicatorTransition?: boolean;
} & RcBaseProps<MuiTabsProps>;

const _BaseTabs: FunctionComponent<StyledTabsProps> = (props) => {
  const { forceFlex, averageWidth, ...rest } = props;
  return <MuiTabs {...rest} />;
};

const BaseTabs = styled(_BaseTabs)`
  .${RcStyledTabsClasses.flexContainer} {
    ${({ position }) => {
      return position && `justify-content:${RcTabPositions[position]};`;
    }}

    ${({ averageWidth, position }) => {
      return !averageWidth && position === 'right' && 'padding-right: 32px;';
    }}
  }

  .${RcStyledTabsClasses.indicator} {
    transition: none;
    background-color: ${palette2('tab', 'selected')};
  }

  .${IndicatorDefaultClassName} {
    background-color: ${palette2('tab', 'selected')};
  }

  ${({ averageWidth }) => {
    return averageWidth
      ? css`
          &&&& {
            padding: ${spacing(0, 6)};
          }
        `
      : '';
  }}

  ${({ size }) => {
    return size === 'large'
      ? css`
          &&&& {
            min-height: 60px;
            height: 60px;
          }
        `
      : css`
          &&&& {
            min-height: 32px;
            height: 32px;
          }
        `;
  }}

  &.${RcStyledTabsClasses.root} {
    display: ${({ forceFlex }) => (forceFlex ? 'flex' : null)};
    padding: ${spacing(0, 2)};
    position: relative;
    border-bottom: 1px solid ${palette2('neutral', 'l02')};
  }
`;

const StyledTabs = forwardRef<any, StyledTabsProps>((props, ref) => {
  const {
    children,
    position,
    forceFlex,
    disableIndicatorTransition,
    classes,
    ...rest
  } = props;

  if (!disableIndicatorTransition) delete RcStyledTabsClasses.indicator;

  const Tabs = (
    <BaseTabs
      {...rest}
      classes={combineProps(RcStyledTabsClasses, classes)}
      position={position}
      forceFlex={forceFlex}
    >
      {children}
    </BaseTabs>
  );

  return ref ? <RootRef rootRef={ref}>{Tabs}</RootRef> : Tabs;
});

StyledTabs.displayName = 'StyledTabs';

export { StyledTabs, StyledTabsProps };
