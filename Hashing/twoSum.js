// https://www.interviewbit.com/problems/2-sum/
// A[i] + A[j] = B && i < j
module.exports = {
  twoSum: function (a, b) {
    var hash = {};
    var finalI = null, finalJ = null;

    for (var i = 0; i < a.length; i++) {
      if (hash[a[i]]) continue
      hash[a[i]] = i
    }
    for (var i = 0; i < a.length; i++) {
      var currentI = i, currentJ = null;
      if (hash[b - a[i]] != undefined) {
        currentJ = hash[b - a[i]];
        if (currentJ < currentI) {
          currentJ = currentI;
          currentI = hash[b - a[i]];
        }
        if ( currentI != currentJ) {
         if (finalI == null && currentJ != null) {
            finalI = currentI;
            finalJ = currentJ;
          } else if (currentJ < finalJ) {
            finalJ = currentJ;
            finalI = currentI;
          } else if (currentJ == finalJ) {
            if (currentI < finalI) {
              finalJ = currentJ;
              finalI = currentI;
            }
          }
        }
      }
    }

    return finalI == null ? [] : [finalI + 1, finalJ + 1];
  },
};
console.log(module.exports.twoSum([ 4, 7, -4, 2, 2, 2, 3, -5, -3, 9, -4, 9, -7, 7, -1, 9, 9, 4, 1, -4, -2, 3, -3, -5, 4, -7, 7, 9, -4, 4, -8 ], -3));
console.log(module.exports.twoSum([ -5, 1, 4, -7, 10, -7, 0, 7, 3, 0, -2, -5, -3, -6, 4, -7, -8, 0, 4, 9, 4, 1, -8, -6, -6, 0, -9, 5, 3, -9, -5, -9, 6, 3, 8, -10, 1, -2, 2, 1, -9, 2, -3, 9, 9, -10, 0, -9, -2, 7, 0, -4, -3, 1, 6, -3 ], -1));

//console.log(module.exports.twoSum([ 6, -7, 6, 8, 4, -4, -2, -6, -6, 1, -10, -1, -2, 2, 2, 0, -3, -7, 9 ], -2));
// console.log(module.exports.twoSum([1,2,3],3));
// console.log(module.exports.twoSum([ 2, 5, 0, -6, 7, -4, 0, 4, 3, 0, -2, 0, 9, -3, -9, -3, 9, 3, 2, -10, -8, -3, -10, -5, 2, -8, 4, 5, 6, 7, -10, 4, -3, -10, 5, 4, 1, 5, 5, -3, -1, -8, -3, -6, -7, -8, -8, -7, 0, -2, 7, 7, 10, -7, -7, 10, -4, 0, 0, -6, -5, -5, 0, 8, 4, 1, 4, -1, -10, -4, -6, 10, -2, 9, -6, -3, -4, -1, 10, -9, -5, 10, -5, 8, 3 ],
// 0));
// console.log(module.exports.twoSum([ 1, 1, 1 ],2));
// console.log(module.exports.twoSum([],1));
// console.log(module.exports.twoSum([2,1,1,8,7],9));
