/**
 * 深克隆函数
 * @param {any} obj 需要克隆的数据
 */
const deepClone = obj => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
};

// EXAMPLES
const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj

console.log(b)