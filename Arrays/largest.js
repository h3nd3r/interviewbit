// https://www.interviewbit.com/problems/largest-number/
mySort = function(a, b) {
  ab = a.toString() + b.toString();
  ba = b.toString() + a.toString();

  return ab < ba;
};

largestNumber = function(A){
  A.sort(mySort);

  if (parseInt(A.join("")) == 0) {
    return 0;
  }
  return A.join("");
};


console.log(largestNumber([ 472, 663, 964, 722, 485, 852, 635, 4, 368, 676, 319, 412,8 ]));
console.log(largestNumber([ 0, 0, 0, 0, 0 ]));
console.log(largestNumber([ 3, 34 ]));
console.log(largestNumber([ 34, 3 ]));
console.log(largestNumber([ 8, 89 ]));
console.log(largestNumber([ 9, 90 ]));
console.log(largestNumber([ 89, 8 ]));
console.log(largestNumber([ 90, 9 ]));
console.log(largestNumber([3, 30, 34, 5, 9]));
console.log(largestNumber([1]));
console.log(largestNumber([9, 30, 34, 5, 9]));
console.log(largestNumber([3, 90, 99, 5, 9]));
