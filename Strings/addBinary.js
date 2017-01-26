// https://www.interviewbit.com/problems/add-binary-strings/
addBinary = function(A, B) {
  var ret = [];
  var a = A.split("");
  var b = B.split("");
  var carry = 0;

  while (a.length != b.length) {
    a.length > b.length ? b.unshift("0") : a.unshift("0");
  }

  for (var i=a.length - 1; i >=0; i--) {
    var sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    if (sum == 3) {
      carry = 1;
      ret.unshift("1");
    } else if (sum == 2) {
      carry = 1;
      ret.unshift("0");
    } else if (sum == 1) {
      carry = 0;
      ret.unshift("1");
    } else if (sum == 0) {
      carry = 0;
      ret.unshift("0");
    }
  }

  if (carry == 1) {
    ret.unshift("1");
  }

  return ret.join("");
};

console.log(addBinary("100", "11"));
