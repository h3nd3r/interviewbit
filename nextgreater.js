module.exports = { 
    //param A : array of integers
    //return a array of integers
    nextGreater : function(A){
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
    }
};

