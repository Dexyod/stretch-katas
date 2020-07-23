const urlDecode = function (text) {
  let result = {};
  let params = text.split("?");
  let eachParamsArr = params[0].split("&");

  if (eachParamsArr && eachParamsArr.length) {
    eachParamsArr.map((param) => {
      let keyValuePair = param.split("=");
      let key = keyValuePair[0];
      let value = keyValuePair[1].replace(/%20/g, " ");
      result[key] = value;
    });
  }
  return result;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
