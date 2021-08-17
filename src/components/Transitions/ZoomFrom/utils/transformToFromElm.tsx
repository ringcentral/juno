import React from 'react';

export function transformToFromElm(
  fromRef: React.RefObject<HTMLElement>,
  toRef: React.RefObject<HTMLElement>,
) {
  const fromElm = fromRef.current!;
  const toElm = toRef.current!;

  const fromRect = fromElm.getBoundingClientRect();
  const toRect = toElm.getBoundingClientRect();

  const deltaX = fromRect.x - toRect.x;
  const deltaY = fromRect.y - toRect.y;

  const scaleX = fromRect.width / toRect.width;
  const scaleY = fromRect.height / toRect.height;

  toElm.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scaleX}, ${scaleY})`;
  toElm.style.transformOrigin = '0 0';
}
