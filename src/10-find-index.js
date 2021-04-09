/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let left = 0;
  let right = array.length;
  let index = -1;
  let isHave = false;
  let center;
  while (left <= right && isHave === false) {
    center = Math.floor((left + right) / 2);
    if (array[center] === value) {
      isHave = true;
      index = center;
    } else if (array[center] > value) {
      right = center - 1;
    } else {
      left = center + 1;
    }
  }
  return index;
}

module.exports = findIndex;
