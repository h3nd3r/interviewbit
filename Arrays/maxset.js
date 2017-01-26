// https://www.interviewbit.com/problems/max-non-negative-subarray/
maxset = function(A){
  var result = [];
  var pointer = [];
  var sum = -1;
  var tmp = 0;

  for (var i=0; i<A.length; i++) {
    result[i] = [];
    tmp = 0;

    for (j=i; j<A.length; j++) {
      if (A[j] >= 0) {
        result[i][j-i] = A[j];
        tmp += A[j];
      }
      else {
        break;
      }
    }

    if (tmp > sum) {
      sum = tmp;
      pointer = result[i];
    }
  }

  return pointer;
};


var A = [0, 0, -1, 0];

console.log(maxset(A));
