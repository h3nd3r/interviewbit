// https://www.interviewbit.com/problems/implement-strstr/
strStr = function(A, B) {
  var a = A.split("");
  var b = B.split("");
  for(var i=0; i<a.length; i++) {
    if (a[i] == b[0]) {
      var j = 1;
      while(j < b.length && a[i+j] == b[j]) {
        j++;
      }
      if (b.length == j) {
        return i;
      }
    }
  }
  return -1;
};
console.log(strStr("", ""));
console.log(strStr("aaa", "a"));
console.log(strStr("aaba", "aba"));
