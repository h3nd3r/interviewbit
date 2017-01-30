// https://www.interviewbit.com/problems/next-permutation/
nextPermutation = function(A){
// find biggest move it up one position
// if biggest is at front sort in ascending order
  var position = 0;
  for (var i =0; i<A.length; i++) {
      if (A[i] > A[position] ){
        position = i;
      }
  }
  // swap up
  if (position != 0) {
    var tmp = A[position];
    A[position] = A[position - 1];
    A[position - 1] = tmp;
    return A;
  }

  for (var i=0; i<A.length; i++) {
    var j=i;
    while (j>0 && A[j-1] > A[j]) {
      var tmp = A[j];
      A[j] = A[j-1];
      A[j-1] = tmp;
      j=j-1;
    }
  }

  return A;
};

console.log(nextPermutation([1,2,3]));
console.log(nextPermutation([3,2,1]));
console.log(nextPermutation([1,1,5]));
console.log(nextPermutation([20, 50, 113]));
