fractionToDecimal = function(A, B) {
  var C = [], hash = {}
  if (A < 0 || B < 0) {
    if (A > 0 || B > 0) C.push("-")
  }
  B = Math.abs(B), A = Math.abs(A), remainder = A%B
  C.push(Math.floor(A/B).toString().split(""))
  C.push(".")
  while (remainder != 0) {
    if (hash[remainder] == undefined) hash[remainder] = remainder
    else break
    remainder = remainder*10
    C.push(Math.floor(remainder/B))
    remainder = remainder%B
  }
  if (remainder != 0) {
    var length = remainder.toString().length
    remainder = Math.floor((Math.pow(10, length)) * (Math.floor(remainder)/B))
    if(remainder.toString().length != length) {
      remainder = "0" + remainder.toString()
    }
    var i = C.indexOf(remainder)
    remainder = C.slice(i, C.length)
    console.log(remainder);
    C = C.slice(0, i)
    C.push("(")
    C.push(remainder)
    C.push(")")
  }
  if (C[C.length-1] == ".") C.pop()
  return C.join("");
};
//console.log(fractionToDecimal(-1, -2147483648))
//console.log(fractionToDecimal(11, 100));
console.log(fractionToDecimal(857, 413));
//console.log(fractionToDecimal(945, 103));
//console.log(fractionToDecimal(1, -2));
//console.log(fractionToDecimal(-1, 2));
console.log(fractionToDecimal(87, 22));
// console.log(fractionToDecimal(2, 1));
// console.log(fractionToDecimal(2, 3));
//console.log(fractionToDecimal(253, 457));
