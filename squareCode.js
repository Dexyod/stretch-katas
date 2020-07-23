const squareCode = function (message) {
  let chars = message.replace(/\s/g, "");
  let cols = Math.ceil(Math.sqrt(chars.length));
  let codedMessage = "";

  for (let i = 0; i < cols; i++) {
    for (let j = i; j < chars.length; j += cols) {
      codedMessage += chars[j];
    }
    codedMessage += " ";
  }
  return codedMessage;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
