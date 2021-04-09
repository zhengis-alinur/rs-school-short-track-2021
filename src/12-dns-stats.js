/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const DNS = {};
  for (let i = 0; i < domains.length; i++) {
    const doms = domains[i].split('.').reverse();
    for (let j = 0; j < doms.length; j++) {
      const temp = doms.slice();
      DNS[`.${temp.splice(0, j + 1).join('.')}`] = 0;
    }
  }
  for (let i = 0; i < domains.length; i++) {
    const doms = domains[i].split('.').reverse();
    for (let j = 0; j < doms.length; j++) {
      const temp = doms.slice();
      DNS[`.${temp.splice(0, j + 1).join('.')}`]++;
    }
  }
  return DNS;
}

module.exports = getDNSStats;
