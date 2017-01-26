// https://www.interviewbit.com/problems/hotel-bookings-possible/
hotel = function(A, B, C){
  var hash = {};
  var max = 0;

  // iterate through days
  for(var i=0; i<A.length; i++) {
    for(var k=A[i]; k<B[i]; k++) {
      if(!hash[k]){
        hash[k] = 1;
      } else {
        hash[k]++;
      }
      if (hash[k] > max) {
        max = hash[k];
      }
    }
  }

  return max <= C;
};

console.log(hotel([1, 3, 5],[8, 6, 6],1));
