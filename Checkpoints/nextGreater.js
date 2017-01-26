// https://www.interviewbit.com/problems/nextgreater/
nextGreater = function(A) {
  var B = [];
  for(var i=0; i<A.length; i++) {
    B[i] = -1;
    for(var j=i+1; j<A.length; j++) {
      if (A[j] > A[i]) {
        B[i] = A[j];
        break;
      }
    }
  }
  return B;
};

//[5, 10, 10, -1]
console.log(nextGreater([4, 5, 2, 10]));
//[-1,-1,-1]
console.log(nextGreater([3, 2, 1]));
