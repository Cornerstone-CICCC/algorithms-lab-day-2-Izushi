// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

function getQueryParams(url) {
  let queryParams = {};
  const urlParams = url.substring(url.indexOf("?") + 1);
  const queryParamsArr = urlParams.split("&");
  queryParamsArr.forEach(queryParam => {
    let keyAndValue = queryParam.split("=");
    queryParams[keyAndValue[0]] = keyAndValue[1];
  });
  return queryParams;
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }