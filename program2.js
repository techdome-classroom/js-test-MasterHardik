/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const sym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = sym[s[i]];
    let next = sym[s[i + 1]];
    curr < next ? (ans -= curr) : (ans += curr);
  }
  return ans;
};

module.exports = { romanToInt };
