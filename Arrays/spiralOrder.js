// https://www.interviewbit.com/problems/spiral-order-matrix-i/
spiralOrder = function(A){
  var t = 0;
  var b = A.length-1;
  var l = 0;
  var r = A[0].length-1;
  var dir = 0;
  var done = [];

  while (t<=b && l<=r) {
    if (dir == 0) {
      for (var i = l; i <= r; i++) {
        done.push(A[t][i]);
      }
      t++;
      dir = 1;
    } else if (dir == 1) {
      console.log("down");
      for (var i = t; i <= b; i++) {
        done.push(A[i][r]);
      }
      r--;
      dir = 2;
    } else if (dir == 2) {
      console.log("left");
      for (var i = r; i >= l; i--) {
        done.push(A[b][i]);
      }
      b--;
      dir = 3;
    } else {
      for (var i = b; i >= t; i--) {
        done.push(A[i][l]);
      }
      l++;
      dir = 0;
    }
  }
  return done;
};
console.log(spiralOrder([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9]
]));

console.log(spiralOrder([
    [ 1, 2, 3, 4 ],
    [ 5, 6, 7, 8 ],
    [ 10, 11, 12, 13]
]));
