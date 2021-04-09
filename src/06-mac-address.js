/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // const symbs = ['A','B','C','D','E','F','1','2','3','4','5','6','7','8','9'];
  const arr = n.split('-');
  let isMac = false;
  for (let i = 0; i < arr.length; i++) {
    if (/[0-9A-F]{2}/.test(arr[i]) && arr[i].length === 2) {
      isMac = true;
    } else {
      isMac = false;
      break;
    }
  }
  return isMac;
}

module.exports = isMAC48Address;
