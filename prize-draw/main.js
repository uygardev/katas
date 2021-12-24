// https://www.codewars.com/kata/5616868c81a0f281e500005c

function rank(st, we, n) {
  if (st == "")
    return "No participants";

  var nameArr = st.split(",");
  if (n > nameArr.length)
    return "Not enough participants";

  var arrOfObj = nameArr.map((x, index) => { return { name: x, som: getSomOfWord(x) * we[index] } }).sort((a, b) => {
    if (a.som == b.som) {
      return (a.name > b.name) ? 1 : -1;
    }
    else {
      return (a.som > b.som) ? -1 : 1
    }
  });
  return arrOfObj[n - 1].name
}


function getSomOfWord(name) {
  return name.length + Array.from(name).reduce(reducer, 0);
}

const reducer = function (accumulator, item) {
  return accumulator + ([...'abcdefghijklmnopqrstuvwxyz'].indexOf(item.toLowerCase()) + 1);
};