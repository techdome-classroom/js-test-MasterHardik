/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stk = [];
  const bracketsPair = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let char of s) {
    if (char in bracketsPair) {
      stk.push(char);
    } else {
      let last = stk.pop();
      if (bracketsPair[last] !== char) return false;
    }
  }
  return stk.length === 0;
};

module.exports = { isValid };
