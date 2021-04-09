/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numsArr = String(n).split('');
  let max = 0;
  for (let i = 0; i < numsArr.length; i++) {
    const temp = numsArr.slice();
    temp.splice(i, 1);
    const num = parseInt(temp.join(''), 10);
    if (i === 0) {
      max = num;
    } else if (max < num) {
      max = num;
    }
  }
  return max;
}

module.exports = deleteDigit;
