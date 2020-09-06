/**
 * Object转qs 函数
 * @param {Object} queryParameters 
 */
const objectToQueryString = queryParameters => {
  return queryParameters
    ? Object.entries(queryParameters).reduce((queryString, [key, val], index) => {
      const symbol = queryString.length === 0 ? '?' : '&';
      queryString += typeof val === 'string' ? `${symbol}${key}=${val}` : '';
      return queryString;
    }, '')
    : '';
};

// EXAMPLES
const a = objectToQueryString({ page: '1', size: '2kg', key: undefined }); // '?page=1&size=2kg'
console.log(a)