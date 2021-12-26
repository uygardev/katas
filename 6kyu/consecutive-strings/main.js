// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k <= 0) return ""

  var objArray = [];
  strarr.map((x, index, self) => {
    let mergedWord = "";
    for (let i = 0; i < k; i++) {
      if (self[index + i] != undefined) mergedWord += self[index + i]
    };
    if (mergedWord.length != 0) objArray.push({ word: mergedWord, len: mergedWord.length, index: index });
  })
  objArray.sort((a, b) => {
    if (a.len == b.len) return (a.index > b.index) ? 1 : -1;
    return (a.len > b.len) ? -1 : 1;
  });
  return objArray[0].word;
}