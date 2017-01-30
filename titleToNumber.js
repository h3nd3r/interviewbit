// https://www.interviewbit.com/problems/excel-column-number/
titleToNumber = function(A) {
  var a = A.split("").reverse().join("");
  var number = 0;
  for (var i=0 ;i<a.length; i++) {
    var value = a.charCodeAt(i) - 64;
    if (i == 0) {
      number = value;
    } else {
      number += (value*Math.pow(26,i));
    }
  }
  return number;
};
console.log("bah: " + titleToNumber("AAA"));
console.log("bah: " + titleToNumber("A"));
console.log("bah: " + titleToNumber("AA"));
console.log("bah: " + titleToNumber("AB"));
console.log("bah: " + titleToNumber("Z"));
