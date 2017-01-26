// https://www.interviewbit.com/problems/colorful-number/
colorful = function(A) {
  var a = A.toString();
  a = a.split("");
  var lookup = {};

  for (var i=0; i<a.length; i++) {
    for (var j=0; j+i<a.length; j++) {
      var number = a.slice(i, a.length - j);
      var product = number.reduce(function(a,b){
          return parseInt(a) * b;
        },"1");
      if (lookup[product] == undefined) {
        lookup[product] = 1;
      } else {
        return 0;
      }
    }
  }
  return 1;
};
console.log(colorful(33));
console.log(colorful(23));
console.log(colorful(0));
console.log(colorful(3245));
