// https://www.interviewbit.com/problems/equal/
equal = function(A){
  var B = [];
  var sum = {};

  for(var i=0; i<A.length; i++) {
    for(var j=i+1; j<A.length; j++) {
        if(sum[A[i] + A[j]] == undefined) {
          sum[A[i] + A[j]] = [];
        }
        sum[A[i] + A[j]].push([i,j]);
    }
  }
  Object.keys(sum).forEach(function(key,index) {
      if (sum[key].length > 1) {
        for(var i=1; i<sum[key].length; i++) {
          var tmp = [sum[key][0][0], sum[key][0][1], sum[key][i][0], sum[key][i][1]];
          if (tmp[0] != tmp[2] && tmp[0] < tmp[2] && tmp[1] != tmp[3] && tmp[1] != tmp[2]) {
            if (B.length == 0) {
              B = tmp.slice(0,tmp.length);
            } else if ( (tmp[0] < B[0]) ||
              (tmp[0] == B[0] && tmp[1] < B[1]) ||
              (tmp[0] == B[0] && tmp[1] == B[1] && tmp[2] < B[2]) ||
              (tmp[0] == B[0] && tmp[1] == B[1] && tmp[2] == B[2] && tmp[3] < B[3])) {
              B = tmp.slice(0,tmp.length);
            }
          }
        }
      }
  });
  return B;
};
console.log(equal([ 1, 1, 1, 1, 1 ]));
//console.log(equal([3, 4, 7, 1, 2, 9, 8]));
