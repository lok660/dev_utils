/**
 * 获取网址的基地址
 * @param {String} url 网址
 */
const getBaseURL = url => url.indexOf('?') > 0 ? url.slice(0, url.indexOf('?')) : url

//  EXAMPLES
const result = getBaseURL('https://google.com?keywords=abc')
console.log(result)