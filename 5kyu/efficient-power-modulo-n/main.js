// https://www.codewars.com/kata/52fe629e48970ad2bd0007e6/train/javascript

//Calculate (x^y) % n for large y
function modpow(x, y, n) {
  let result = 1;
  x = x % n;

  if (x == 0) return 0;

  while (y > 0) {
    if (y & 1) result = (result * x) % n;
    y = y / 2;
    x = (x * x) % n;
  }
  return result;
}

console.log(modpow(3, 7, 5), 2)
console.log(modpow(4, 12, 3), 1)
console.log(modpow(11, 10, 300), 1)
console.log(modpow(11, 100000, 49), 32)
console.log(modpow(5, 100000000, 19), 5)