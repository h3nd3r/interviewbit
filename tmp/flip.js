flipMe = function(A){
  console.log(A);
  var B = []
  for (var i=0; i<A.length; i++) {
      A[i] == '0' ? B.push('1') : B.push('0');

  }
  console.log(B);
  return B;
}

flip = function(A){
    var arr = A.split("");
    var l=0;
    var r=A.length;
    var maxInt = parseInt(A, 2);
    console.log(A);
    var lFinal = 0; var rFinal = 0;

//array length 0 , 1 , 2
//l == r
    if (r != l && r > 1) {

    for( ; l<r; l++) {
      var num = 0;
      for(;r>l;r--) {
        console.log("left: " + l + " right: " + r);
        var begin = (l-0 == 1) ? A[0] : A.slice(0, l);

        //var begin = A.slice(0, l);
        //begin = begin.join("");
        console.log("begin: " + begin);
        var middle = flipMe(A.slice(l, r));
        console.log("middle: " + middle);

        var end = (A.length-r == 1) ? A[A.length - 1] : A.slice(r, A.length);

        console.log("end: " + end);
        var tmp = begin + middle + end;
        console.log(tmp);
      }
      r=A.length;
    }
    }

    console.log(maxInt);

    return lFinal == rFinal ? [] : [lFinal, rFinal];
};


console.log(flip("010"));
