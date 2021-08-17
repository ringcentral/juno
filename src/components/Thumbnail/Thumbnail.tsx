import React, { forwardRef, HTMLAttributes, memo } from 'react';

import {
  RcBaseSize,
  styled,
  withDeprecatedCheck,
  useThemeProps,
} from '../../foundation';
import { RcIcon, RcIconProps } from '../Icon';
import { StyledThumbnail } from './styles';

type RcThumbnailSize = RcBaseSize<'small' | 'large'>;

type RcThumbnailProps = {
  /** Thumbnail background url */
  src?: string;
  /** thumbnail size, default is `large` */
  size?: RcThumbnailSize;
  /** that will render RcIcon when not have url */
  symbol?: RcIconProps['symbol'];
  /** @deprecated please change to symbol */
  iconType?: string;
  /** @deprecated Thumbnail background url, please use src to replace that */
  url?: string;
} & HTMLAttributes<HTMLSpanElement>;

const _RcThumbnail = forwardRef<any, RcThumbnailProps>(
  (inProps: RcThumbnailProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcThumbnail' });
    const { url, src = url, iconType, size, symbol, ...rest } = props;
    return (
      <>
        {src ? (
          <StyledThumbnail
            ref={ref}
            src={src}
            size={size}
            data-test-automation-id="thumbnail"
            {...rest}
          />
        ) : (
          <RcIcon
            ref={ref}
            data-test-automation-id="iconThumbnail"
            {...rest}
            size={size === 'small' ? 'small' : 'xxxlarge'}
            symbol={symbol}
          >
            {iconType}
          </RcIcon>
        )}
      </>
    );
  },
);

const RcThumbnail = styled(
  withDeprecatedCheck(
    memo(_RcThumbnail),
    [
      {
        prop: 'iconType',
        time: '2021-2',
        comment: 'Please use symbol to set icon',
      },
      {
        prop: 'url',
        time: '2021-2',
        comment: 'Please use src to set url',
      },
    ],
    'RcThumbnail',
  ),
)``;

RcThumbnail.defaultProps = {
  size: 'large',
};

RcThumbnail.displayName = 'RcThumbnail';

export { RcThumbnail, RcThumbnailProps, RcThumbnailSize };
