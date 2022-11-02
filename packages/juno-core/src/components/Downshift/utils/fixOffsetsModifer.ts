export const fixOffsetsModifer = {
  order: 890,
  enabled: true,
  fn: (data: any) => {
    for (const property of [
      'transform',
      'msTransform',
      'WebkitTransform',
      'MozTransform',
      'OTransform',
    ]) {
      const tranformValue: string | undefined = data.styles[property];

      if (tranformValue) {
        const matchValue = tranformValue.match(
          /translate3d\((\d+)px, (\d+)px, 0\)/,
        );
        if (matchValue) {
          const dpr = window.devicePixelRatio;
          const x = Math.round(Number(matchValue[1]) * dpr) / dpr;
          const y = Math.round(Number(matchValue[2]) * dpr) / dpr;
          data.styles.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
      }
    }

    return data;
  },
};
