const urlEncode = function (text) {
  let modifiedText = "";
  text = text.trim();
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      modifiedText += "%20";
    } else {
      modifiedText += text[i];
    }
  }
  return modifiedText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
