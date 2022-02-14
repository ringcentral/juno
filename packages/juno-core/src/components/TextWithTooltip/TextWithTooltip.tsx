import React, { useRef, useState } from 'react';

import {
  getParsePaletteColor,
  palette2,
  RcPaletteProp,
  styled,
  useDeprecatedLog,
} from '../../foundation';

const StyledText = styled.span<{
  textColor: RcPaletteProp;
}>`
  color: ${({ textColor }) =>
    getParsePaletteColor(textColor, palette2('neutral', 'f06'))};
`;

/** @deprecated please don't use that component, just use `RcText` with `title` directly */
const RcTextWithTooltip = (props: {
  children: React.ReactNode;
  tooltip?: string;
  textColor?: RcPaletteProp;
}) => {
  useDeprecatedLog({
    component: 'RcTextWithTooltip',
    message:
      "please don't use that component, just use `RcText` with `title` directly",
  });

  const { tooltip, children, textColor = ['neutral', 'f06'] } = props;
  const ref = useRef<HTMLSpanElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const onMouseOver = () => {
    const span = ref.current;
    if (span && span.parentElement) {
      const { scrollHeight, scrollWidth, clientHeight, clientWidth } =
        span.parentElement;
      setShowTooltip(scrollWidth > clientWidth || scrollHeight > clientHeight);
    }
  };

  const toolTipText = typeof children === 'string' ? children : tooltip || '';

  return (
    <span
      title={showTooltip ? toolTipText : ''}
      onMouseOver={onMouseOver}
      ref={ref}
    >
      <StyledText textColor={textColor}>{children}</StyledText>
    </span>
  );
};

export { RcTextWithTooltip };
