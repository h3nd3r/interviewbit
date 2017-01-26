// https://www.interviewbit.com/problems/numrange/
numRange = function(A, B, C) {
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
};
// return an integer
console.log(numRange([10, 5, 1, 0, 2], 6, 8));
