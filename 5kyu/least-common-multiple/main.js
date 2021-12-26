// * RULE: a*b = gcd(a,b)*lcm(a,b)
// * https://www.onlinemathlearning.com/image-files/euclidean-algorithm.png
// * https://www.bubblyprimes.com/wp-content/uploads/2019/07/What-is-a-GCF.jpg

// var gcd = function (x, y) {
//   let remainder = x % y;
//   x = y;
//   if (remainder != 0) y = remainder;
//   while (remainder != 0) {
//     remainder = x % y;
//     x = y;
//     if (remainder != 0) y = remainder;
//   }

//   return y
// }

// function gcd(x, y) {
//   var remainder = x % y;
//   [x, y] = [y, remainder];
//   return (remainder != 0) ? gcd(x, y) : x
// }

function gcd(x, y) {
  return (y == 0) ? x : gcd(y, x % y)
}

var lcm = (...numbers) => {
  return numbers.reduce((x, y) => x * (y / gcd(x, y)));
}

console.log(lcm(2, 5), 10);
console.log(lcm(2, 3, 4), 12);
console.log(lcm(9), 9);