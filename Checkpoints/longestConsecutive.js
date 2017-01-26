// https://www.interviewbit.com/problems/longest-consecutive-sequence/
function longestConsecutive(A) {
  A.sort(function(a,b){return a-b;});
  if(A.length == 0){return 0;}

  var longest = 1;
  var count = 1;

  for(var i=1; i<A.length; i++){
      if ((A[i-1]+1) == A[i]) {
        count++;
      } else if ((A[i-1]) == A[i]) {
      } else {
        count = 1;
      }
      longest = Math.max(longest, count);
  }
  return longest;
};

console.log(longestConsecutive([100, 101, 102, 4, 0]));

console.log(longestConsecutive([ 97, 86, 67, 19, 107, 9, 8, 49, 23, 46, -4, 22, 72, 4, 57, 111, 20, 52, 99, 2, 113, 81, 7, 5, 21, 0, 47, 54, 76, 117, -2, 102, 34, 12, 103, 69, 36, 51, 105, -3, 33, 91, 37, 11, 48, 106, 109, 45, 58, 77, 104, 60, 75, 90, 3, 62, 16, 119, 85, 63, 87, 43, 74, 13, 95, 94, 56, 28, 55, 66, 92, 79, 27, 42, 70 ]
));
console.log(longestConsecutive([1,2,0,1,2,3]));
console.log(longestConsecutive([-1,-2,0,1,2,3,4,5,6,7]));
console.log(longestConsecutive([8,-2,0,1,3,4,5,7]));
