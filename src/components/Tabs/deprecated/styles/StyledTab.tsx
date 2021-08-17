import MuiRootRef from '@material-ui/core/RootRef';
import MuiTab, { TabProps as MuiTabProps } from '@material-ui/core/Tab';
import React, { FunctionComponent, forwardRef } from 'react';
import {
  styled,
  css,
  ellipsis,
  spacing,
  typography,
  RcBaseProps,
  combineProps,
  palette,
} from '../../../../foundation';
import { RcTabsProps } from '../Tabs';
import { RcStyledTabClasses, RcMoreTabClassName } from '../utils';

type StyledTabProps = {
  ref?: React.RefObject<any>;
  automationId?: string;
  averageWidth?: boolean;
  size?: RcTabsProps['size'];
} & RcBaseProps<MuiTabProps>;

const _BaseTab: FunctionComponent<StyledTabProps> = (props) => {
  const { averageWidth, size, ...rest } = props;
  return <MuiTab {...rest} />;
};

const BaseTab = styled(_BaseTab)`
  &.${RcStyledTabClasses.root} {
    text-transform: none;
    box-sizing: border-box;
    ${typography('body1')};
    color: ${palette('tab', 'default')};
    .wrapper {
      ${ellipsis()}
      display: inline;
    }
  }

  ${({ size }) => {
    if (size === 'large') {
      return css`
        && {
          min-width: 32px;
          min-height: 60px;
        }
      `;
    }
    return css`
      && {
        min-width: 32px;
        min-height: 32px;
      }
    `;
  }}

  ${({ averageWidth }) => {
    return averageWidth
      ? css`
          && {
            flex-grow: 1;
            padding: ${spacing(0, 2)};
          }
        `
      : css`
          && {
            max-width: 200px;
            padding: ${({ icon }: any) => (icon ? '0' : spacing(0, 2))};
          }
        `;
  }}

  &.${RcMoreTabClassName} {
    position: absolute;
    right: 2px;
  }

  &.${RcStyledTabClasses.selected} {
    ${typography('body2')};
    color: ${palette('tab', 'selected')} !important;
  }

  span > && > .${RcStyledTabClasses.wrapper} {
    display: inline-flex;
  }
`;

const StyledTab = forwardRef<any, StyledTabProps>((props, ref) => {
  const { children, classes, ...rest } = props;
  const Tab = (
    <BaseTab {...rest} classes={combineProps(RcStyledTabClasses, classes)}>
      {children}
    </BaseTab>
  );

  return ref ? <MuiRootRef rootRef={ref}>{Tab}</MuiRootRef> : Tab;
});

StyledTab.displayName = 'StyledTab';

export { StyledTab, StyledTabProps };
