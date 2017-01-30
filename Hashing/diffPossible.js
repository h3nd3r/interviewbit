// https://www.interviewbit.com/problems/diffk-ii/
// A[i] - A[j] = k, i != j
diffPossible = function(A, B) {
  var hash = {};
  for(var i=0; i<A.length; i++) {
    var compliment = A[i] - B;
    var otherCompliment = A[i] + B;

    if (hash[compliment] != undefined || hash[otherCompliment] != undefined) {
      return 1;
    } else {
      hash[A[i]] = A[i];
    }
  }
  console.log(hash);

  return 0;
};

console.log(diffPossible([11, 85, 100, 44, 3, 32, 96, 72, 93, 76, 67, 93, 63, 5, 10, 45, 99, 35, 13], 60));
console.log(diffPossible([1, 5, 3], 2));
