// ! alway new Regex for regex will have index issue
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/RegExp

/**
 * return regex with only allow dialPad value `1234567890*+#-`
 */
export function getDialPadValueOnlyRegex() {
  return /[1234567890*+#]+/g;
}
