/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const set = {};
  const res = [];
  for (let i = 0; i < names.length; i++) {
    set[names[i]] = 0;
  }
  for (let i = 0; i < names.length; i++) {
    if (set[names[i]] === 0) {
      if (res.includes(names[i])) {
        res.push(`${names[i]}(${set[names[i]] + 1})`);
      } else {
        res.push(names[i]);
        set[names[i]]++;
      }
    } else {
      res.push(`${names[i]}(${set[names[i]]++})`);
    }
  }
  return res;
}

module.exports = renameFiles;
