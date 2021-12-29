

function fact(num) {
  arr = []
  let _num = num
  for (let index = 2; index <= num - 1; index++) {
    while (_num % index == 0) {
      _num /= index
      arr.push(index)
    }
  }
  if (_num == num) arr.push(num)
  return arr
}

function decomp(n) {
  let primeFactors = []

  Array.from((function* (x = 2) {
    while (x <= n) yield x++;
  })()).forEach(element => {
    primeFactors = primeFactors.concat(fact(element))
  });

  str = "";
  for (let i = 2; i <= n; i++) {
    let numberOfRepeat = primeFactors.filter(x => x == i).length;
    str += numberOfRepeat > 1 ? `${i}^${numberOfRepeat} * ` : (numberOfRepeat == 1 ? `${i} * ` : '')
  }
  str = str.substring(0, str.length - 3);
  return str
}

decomp(22)
console.log(decomp(17), "2^15 * 3^6 * 5^3 * 7^2 * 11 * 13 * 17")
console.log(decomp(5), "2^3 * 3 * 5")
console.log(decomp(22), "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19")
console.log(decomp(14), "2^11 * 3^5 * 5^2 * 7^2 * 11 * 13")
console.log(decomp(25), "2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23")
