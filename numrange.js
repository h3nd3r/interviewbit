module.exports = { 
    //param A : array of integers
    //param B : integer
    //param C : integer
    //return an integer
    numRange : function(A, B, C){
  var count = 0;
  for(var i=0; i<A.length; i++) {
      var sum = 0;
      for(var j=i; j<A.length; j++) {
        sum=sum+A[j];
        if (sum>=B && sum<=C) {
          count++;
        } else if (sum > C) {
          break;
        }
      }
  }
  return count;
    }
};
