/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 */
function removeKFromList(l, k) {
  let prev = null;
  let cur = l;
  while (cur.next !== null) {
    if (cur.value === k) {
      prev.next = cur.next;
      prev = cur;
      cur = cur.next;
    }
  }
  return l;
}

module.exports = removeKFromList;
