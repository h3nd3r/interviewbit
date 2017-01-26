removeDuplicates = function(A) {
  for (var i=1; i<A.length; i++) {
    if (A[i] == A[i-1]) {
      A.splice(i, 1);
      i--;
    }
  }

  return A.length;
};

A = [1, 2, 2]
B = [1, 3, 3, 3, 4, 5, 5];
C = [1, 1, 2];
D = [1, 2, 3, 4, 5];
E = [1];
console.log(removeDuplicates(A));
console.log(A);
console.log(removeDuplicates(B));
console.log(B);
console.log(removeDuplicates(C));
console.log(C);
console.log(removeDuplicates(D));
console.log(D);
console.log(removeDuplicates(E));
console.log(E);
