/**
 * get that full height and margin with margin
 * that will ignore transform animation
 */
export function outerSize(el: HTMLElement) {
  const style = getComputedStyle(el);

  return {
    get height() {
      return (
        el.offsetHeight +
        parseInt(style.marginTop, 10) +
        parseInt(style.marginBottom, 10)
      );
    },
    get width() {
      return (
        el.offsetWidth +
        parseInt(style.marginLeft, 10) +
        parseInt(style.marginRight, 10)
      );
    },
  };
}
