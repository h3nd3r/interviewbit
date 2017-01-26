// https://www.interviewbit.com/problems/add-one-to-number/
plusOne = function(A){
  var count = A.length-1;
  A[count] = A[count]+1;

  while(A[count] == 10) {
    A[count] = 0;
    if (count == 0) {
      A.unshift(0);
    } else {
      count--;
    }
    A[count] = A[count]+1;
  }
  while (A[0] == 0) {
    A.shift();
  }

  return A;
};

console.log(plusOne([0,1,2]));
console.log();
console.log(plusOne([9,9]));
