import React, { forwardRef, HTMLAttributes, memo } from 'react';

import {
  RcBaseProps,
  RcPaletteProp,
  RcTheme,
  styled,
  withDeprecatedCheck,
  useThemeProps,
} from '../../foundation';
import { TagStyle } from './styles';
import { colorMap } from './utils';

type RcTagProps = {
  // TODO: remove colorMap
  /** tag color, default is 'highlight.b03' */
  color?: RcPaletteProp | keyof typeof colorMap;
  /** tag border color */
  borderColor?: RcPaletteProp;
  /** text color, default is 'neutral.f01' */
  textColor?: RcPaletteProp;
  /** The content of the tag. */
  children?: React.ReactNode;
  /** custom border radius for tag, default is `xl` */
  radius?: keyof RcTheme['radius'];
  /** @deprecated The content of the tag, please use children directly */
  content?: string;
} & RcBaseProps<HTMLAttributes<HTMLSpanElement>, 'color'>;

const _RcTag = memo(
  forwardRef<any, RcTagProps>((inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: 'RcTag' });
    const {
      color,
      children,
      content,
      textColor,
      borderColor,
      radius,
      ...rest
    } = props;

    return (
      <span {...rest} ref={ref}>
        {content || children}
      </span>
    );
  }),
);

const RcTag = styled(
  withDeprecatedCheck(_RcTag, [
    {
      prop: 'content',
      comment: 'you should replace with children',
      time: '2021-1',
    },
  ]),
)`
  ${TagStyle}
`;

RcTag.defaultProps = {
  color: 'highlight.b03',
  textColor: 'neutral.f01',
  radius: 'xl',
};

RcTag.displayName = 'RcTag';

export { RcTag, RcTagProps };
