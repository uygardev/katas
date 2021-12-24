// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word) {
  word = word.toLowerCase();
  var str = "";
  [...word].map((x, index, self) => {
    let len;
    if (x == "(" || x == ")") {
      len = word.match(new RegExp(`\\${x}`, "g", "i")).length;
    }
    else {
      len = word.match(new RegExp(`${x}`, "g", "i")).length;
    }
    len > 1 ? str += ")" : str += "("
  });
  return str
}