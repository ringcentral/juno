export function isUrl(url: string) {
  // eslint-disable-next-line no-useless-escape
  const exp =
    /(\b(https?):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;

  return url.match(exp);
}
