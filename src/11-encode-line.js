/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  const arr = str.split('');
  let i = 0;
  while (i < arr.length) {
    let sum = 1;
    let letter = '';
    while (arr[i + 1] === arr[i] && i < arr.length) {
      letter = arr[i];
      i++;
      sum++;
    }
    if (sum === 1) {
      result += arr[i];
    } else {
      result = result + sum + letter;
    }
    i++;
  }
  return result;
}

module.exports = encodeLine;
