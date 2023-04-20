//https://www.codewars.com/kata/54d496788776e49e6b00052f

function sumOfDivided(lst) {
  primeFactors = []
  lst.forEach(element => {
    if (Math.abs(element) != 1) primeFactors = primeFactors.concat(fact(element))
  });

  primeFactors = [...new Set(primeFactors)].sort(function (a, b) { return a - b; })

  return primeFactors.map(x => {
    let sum = 0;
    lst.forEach(num => {
      if (num % x == 0) sum += num
    })
    return [x, sum]
  })
}

function fact(num) {
  arr = []
  num = Math.abs(num)
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



function testing(arr, exp) {
  console.log(arr);
  let ans = sumOfDivided(arr);
  console.log("Actual: ", ans);
  console.log("Expect: ", exp);
  console.log(ans, exp);
  console.log("#");
}


console.log(testing([12, 15], [[2, 12], [3, 27], [5, 15]]));