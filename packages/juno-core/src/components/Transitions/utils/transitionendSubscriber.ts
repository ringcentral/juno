export const transitionendSubscriber = (
  elm: HTMLElement,
  event: (e: any) => any,
) => {
  elm.addEventListener('transitionend', event);
  elm.addEventListener('transitioncancel', event);

  return () => {
    elm.removeEventListener('transitionend', event);
    elm.removeEventListener('transitioncancel', event);
  };
};
