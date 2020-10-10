/**
 * 判断该对象中是否包含 该key
 * @param {Object} obj 父对象
 * @param {Any} keys 需要判断的key
 */
const hasKey = (obj, keys) => {
  return (
    keys.length > 0 &&
    keys.every(key => {
      if (typeof obj !== 'object' || !obj.hasOwnProperty(key)) return false
      obj = obj[keys]
      return true
    })
  )
}

//  EXAMPLES
let obj = {
  a: 1,
  b: { c: 4 },
  'b.d': 5
}

hasKey(obj, ['a']); // true
hasKey(obj, ['b']); // true
hasKey(obj, ['b', 'c']); // true
hasKey(obj, ['b.d']); // true
hasKey(obj, ['d']); // false
hasKey(obj, ['c']); // false
hasKey(obj, ['b', 'f']); // false