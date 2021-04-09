/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  const letterArr1 = s1.split('');
  const letterArr2 = s2.split('');
  for (let i = 0; i < letterArr1.length; i++) {
    if (letterArr2.includes(letterArr1[i])) {
      sum += 1;
      letterArr2.splice(letterArr2.indexOf(letterArr1[i]), 1);
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;
