longestConsecutive = function(A) {
  var hash = {};
  var longest = 0;

  for(var i=0; i<A.length; i++) {
    hash[A[i]] = A[i];
  }

  Object.keys(hash).forEach(function(key) {
    var m = parseInt(key) + 1;

    while(hash[m] != undefined) {
      m++;
    }
    longest = Math.max(longest, m - parseInt(key));
  });
  return longest;
};

console.log(longestConsecutive([-1,-2,0,1,2,3,4,5,6,7]));
//console.log(longestConsecutive([ 65, 7, 3, 29, 39, -3, 87, 85, 21, 22, 108, 89, 54, 120, 92, 1, 72, 80, 9, 117, 16, 96, 34, 4, 119, 61, 84, 35, 99, 113, 18, 59, 42, 62, -1, 69, 48, 52, 2, 102, 40, 28, 74, 104, 23, 90, 44, 0, 47, 5, 43, 111, 6, 60, 46, 10, 63, 68 ]
//));

/*
console.log(longestConsecutive([-5]));
console.log(longestConsecutive([-4,-5,4]));
console.log(longestConsecutive([100, 4, 200, 1, 5, 2]));
console.log(longestConsecutive([100, 8, 200, 1, 3, 6]));
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([100, 4, 5, 1, 3, 2]));
console.log(longestConsecutive([100, 4, 200, 1, 101, 2]));
*/
