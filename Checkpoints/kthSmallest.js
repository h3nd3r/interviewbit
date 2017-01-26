// https://www.interviewbit.com/problems/kth-smallest-element-in-the-array/
// [2, 1, 4, 3, 2], 3 -> 0, 1, 2
// [2, 1, 3, 2], 3 ->
// [1, 2, 2, 3, 4] ->2 @ index 2
function QuickSelect(A, k) {
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

  if (k <= A1.length) {
    return QuickSelect(A1, k);
  } else if (k > A.length - A2.length) {
    return QuickSelect(A2, k - (A.length - A2.length));
  }  else {
      return pivot;
  }
}
console.log(QuickSelect([8, 16, 80, 55, 32, 8, 38, 40, 65, 18, 15, 45, 50, 38, 54, 52, 23, 74, 81, 42, 28, 16, 66, 35, 91, 36, 44, 9, 85, 58, 59, 49, 75, 20, 87, 60, 17, 11, 39, 62, 20, 17, 46, 26, 81, 92 ],9));

//console.log(QuickSelect([2, 1, 4, 3], 3));
