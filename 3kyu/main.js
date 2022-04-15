//https://www.codewars.com/kata/5518a860a73e708c0a000027/train/javascript

function lastDigit(as) {
  if (as.length === 0) return 1
  let result = as.reverse().reduce((x, y) => {
    console.log(`${y}^${x}`)
    return Math.pow(y % 100, (x % 4)+4)
  })
  return (result % 10).toString()
}


console.log(lastDigit([]), 1);
console.log(lastDigit([0, 0]), 1); // 0 ^ 0
console.log(lastDigit([0, 0, 0]), 0); // 0^(0 ^ 0) = 0^1 = 0
console.log(lastDigit([1, 2]), 1);
console.log(lastDigit([3, 4, 5]), 1);
console.log(lastDigit([4, 3, 6]), 4);
console.log(lastDigit([7, 6, 21]), 1);
console.log(lastDigit([12, 30, 21]), 6);
console.log(lastDigit([2, 2, 2, 0]), 4);
console.log(lastDigit([937640, 767456, 981242]), 0);
console.log(lastDigit([123232, 694022, 140249]), 6);
console.log(lastDigit([499942, 898102, 846073]), 6);
console.log(lastDigit([]), 1);


const r1 = Math.floor(Math.random() * 100);
const r2 = Math.floor(Math.random() * 10);
console.log(lastDigit([r1]), r1 % 10);
console.log(lastDigit([r1, r2]), Math.pow(r1 % 10, r2) % 10);