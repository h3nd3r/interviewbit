module.exports = {
twoSum: function (a, b) {
  var hash = {}

  for (var i = 1; i < a.length; i++) {
    if (hash[a[i]] || hash[a[i]] === 0) continue
    hash[a[i]] = i
  }
//console.log(hash);
  // for (var i = a.length - 1; i > 0; i--) {
  for (var i = 2; i < a.length; i++) {
    // console.log(i)
    var curVal = a[i]
    var j = hash[b - curVal]

    // console.log(a[i], a[j])

    if (j || j === 0) {
      if (i <= j) continue

      return [j, i]
    }
  }

  return []
},
};

console.log(module.exports.twoSum([ 6, -7, 6, 8, 4, -4, -2, -6, -6, 1, -10, -1, -2, 2, 2, 0, -3, -7, 9 ], -2));
// console.log(module.exports.twoSum([1,2,3],3));
console.log(module.exports.twoSum([ 2, 5, 0, -6, 7, -4, 0, 4, 3, 0, -2, 0, 9, -3, -9, -3, 9, 3, 2, -10, -8, -3, -10, -5, 2, -8, 4, 5, 6, 7, -10, 4, -3, -10, 5, 4, 1, 5, 5, -3, -1, -8, -3, -6, -7, -8, -8, -7, 0, -2, 7, 7, 10, -7, -7, 10, -4, 0, 0, -6, -5, -5, 0, 8, 4, 1, 4, -1, -10, -4, -6, 10, -2, 9, -6, -3, -4, -1, 10, -9, -5, 10, -5, 8, 3 ],
 0));
console.log(module.exports.twoSum([ 1, 1, 1 ],2));
// console.log(module.exports.twoSum([],1));
// console.log(module.exports.twoSum([2,1,1,8,7],9));
