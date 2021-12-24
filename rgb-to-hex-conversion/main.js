// https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b) {
  return (`${convertHex(r)}${convertHex(g)}${convertHex(b)}`)
}

const convertHex = function (number) {
  if (number < 0) return "00"
  if (number > 255) return "FF"
  return (`${number.toString(16).padStart(2, '0')}`).toUpperCase()
} 