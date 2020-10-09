/**
 * 数组降维函数
 * @param {*} arr 数组
 */
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))

//  EXAMPLES

const result = deepFlatten([1, [2], [[3], 4], 5])
console.log(result)