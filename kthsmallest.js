module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
    kthsmallest : function(A, B){
  var r = Math.floor(A.length/2);

  var pivot = A[r]
  var A1 = [];
  var A2 = [];

  for (var i = 0; i<A.length; i++ ) {
    if (r == i) {
    } else if (A[i] < pivot) {
      A1.push(A[i]);
    } else if (A[i] >= pivot) {
      A2.push(A[i]);
    }
  }

  if (B <= A1.length) {
    return this.kthsmallest(A1, B);
  } else if (B > A.length - A2.length) {
    return this.kthsmallest(A2, B - (A.length - A2.length));
  }  else {
      return pivot;
  }
    }
};

