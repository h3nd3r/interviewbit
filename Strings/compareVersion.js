// https://www.interviewbit.com/problems/compare-version-numbers/
compareVersion = function(A, B) {
  var a = A.split(".");
  var b = B.split(".");

  if (parseInt(a[a.length-1]) == 0) {a.pop();}
  if (parseInt(b[b.length-1]) == 0) {b.pop();}

  var length = a > b ? a.length : b.length;
  for(i=0; i<length; i++) {
      var aInt = parseInt(a[i]);
      var bInt = parseInt(b[i]);
      if (aInt < bInt) {
        return -1;
      } else if (aInt > bInt) {
        return 1;
      }
  }
  if (a.length == b.length) {
    return 0;
  }
  return a.length > b.length ? 1 : -1;
};

console.log(compareVersion("1.0","1.0.1"));
console.log(compareVersion("1.0","1"));
console.log(compareVersion("1.13.4","1.13.4"));
console.log(compareVersion("1.13","1.2"));
console.log(compareVersion("1.13","1.13.4"));
