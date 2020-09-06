/**
 * 冻结复杂数据类型函数
 * @param {Object} obj 需要冻结的对象
 */
const deepFreeze = obj => {
  Object.keys(obj).forEach(prop => {
    if (typeof obj[prop] === 'object') deepFreeze(obj[prop]);
  });
  return Object.freeze(obj);
};

//  EXAMPLES
const o = deepFreeze([1, [2, 3]]);

o[0] = 3; // not allowed
o[1][0] = 4; // not allowed as well