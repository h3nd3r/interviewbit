// https://www.interviewbit.com/problems/binary-representation/
findDigitsInBinary = function(A) {
  var binary = [];
  while (A > 0) {
    var rem = A % 2;
    binary.push(rem);
    A = Math.floor(A/2);
  }

  return binary.length == 0 ? "0" : binary.reverse().join("");
};

console.log(findDigitsInBinary(0));
console.log(findDigitsInBinary(6));
