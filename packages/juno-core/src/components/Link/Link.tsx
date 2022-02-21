import React, { AnchorHTMLAttributes, forwardRef } from 'react';

import {
  RcBaseProps,
  RcBaseSize,
  RcPaletteProp,
  styled,
  useA11yKeyEvent,
  useThemeProps,
  useDeprecatedCheck,
} from '../../foundation';
import { RcTypographyVariant } from '../Typography';
import { LinkStyle } from './styles';

type RcLinkSize = RcBaseSize;

type RcLinkProps = {
  /** variant of Link, default is body1 */
  variant?: RcTypographyVariant;
  /** is that link is disabled */
  disabled?: boolean;
  /** color for Link display, support palette pass */
  color?: RcPaletteProp;
  /** root render element, default is `<a />` */
  Component?: keyof JSX.IntrinsicElements;
  /** is that have underline default */
  underline?: boolean;
  /** is that href can be download */
  download?: boolean;
  /**
   * @deprecated size of Link, default is medium, please use variant directly
   * `small` => `caption1`
   * `medium` => `body1`
   * `large` => `headline1`
   */
  size?: RcLinkSize;
  /** @deprecated use onClick replace that */
  handleOnClick?:
    | ((event: React.MouseEvent<HTMLSpanElement>) => void)
    | undefined;
} & RcBaseProps<AnchorHTMLAttributes<HTMLAnchorElement>, 'download' | 'color'>;

const _RcLink = forwardRef<any, RcLinkProps>((inProps: RcLinkProps, ref) => {
  const props = useThemeProps({ props: inProps, name: 'RcLink' });

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useDeprecatedCheck(RcLink, props, [
      {
        prop: 'size',
        time: '2021-4',
        comment: `@deprecated size of Link, default is medium, please use variant directly
 * \`small\` => \`caption1\`
 * \`medium\` => \`body1\`
 * \`large\` => \`headline1\`
 */`,
      },
      {
        prop: 'handleOnClick',
        time: '2021-4',
        comment: `@deprecated use onClick replace that */`,
      },
    ]);
  }

  const {
    handleOnClick: _handleOnClick,
    Component: ComponentProp,
    onKeyDown,
    onClick,
    disabled,
    children,
    tabIndex,
    color,
    underline,
    variant,
    ...rest
  } = props;

  // TODO: remove when handleOnClick removed
  const handleOnClick = _handleOnClick ? _handleOnClick : onClick;

  const handleOnKeyDown = useA11yKeyEvent(handleOnClick, {
    checkKeys: ['Enter'],
  });

  // * prevent tsc error with dynamic component type
  const Component = ComponentProp! as any;
  return (
    <Component
      {...rest}
      tabIndex={disabled ? -1 : tabIndex}
      ref={ref}
      onClick={handleOnClick}
      onKeyDown={onKeyDown || handleOnKeyDown}
    >
      {children}
    </Component>
  );
});

/**
 * @release
 * that onClick event will be trigger with `enter` like `<a>`, when have custom onKeydown event, that will be cover by outside
 * */
const RcLink = styled(_RcLink)`
  ${LinkStyle}
`;

RcLink.defaultProps = {
  variant: 'body1',
  color: 'informative.f02',
  disabled: false,
  Component: 'a',
};

RcLink.displayName = 'RcLink';

export { RcLink };
export type { RcLinkProps, RcLinkSize };
