// https://www.interviewbit.com/problems/multiply-strings/
// sum to strings
sum = function(A, B) {

};

multiply = function(A, B) {
  var a = A.split("");
  var b = B.split("");
  var product = [];

  for(var j=0; j<B.length; j++) {
    var subtotal = [];
    var carry = 0;
    var place = 0;

    for (var i=0; i<j; i++) {
      place++;
    }
    for(var i=0; i<A.length; i++) {
      console.log("subtotal[place]: " + (subtotal[place] ? subtotal[place] : 0) );
      // check if there is anything there

      var tmp = parseInt(a[A.length -1- i])*parseInt(b[B.length -1- j]);
      if (tmp.length > 1) {
        // we need to carry
      } else {
        subtotal[place] = (subtotal[place]||0) + tmp;
      }
      subtotal.unshift(parseInt(a[A.length -1- i])*parseInt(b[B.length -1- j]));
      place++;
    }
    product.push(subtotal.join(""));
  }

  return product.join("");
};

console.log(multiply("10", "20"));
console.log(multiply("5", "30"));
console.log(multiply("30", "50"));
console.log(multiply("0", "0"));
console.log(multiply("1", "0"));
console.log(multiply("1", "500"));
console.log(multiply("123", "530"));
