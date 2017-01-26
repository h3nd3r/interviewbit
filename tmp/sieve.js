sieve = function(A) {
  var primes = [];
  for (var i=0; i<A; i++) {
    primes.push(1);
  }
  primes[0] = 0;
  primes[1] = 0;
  for(var i=2; i<=Math.sqrt(A); i++) {
    if(primes[i] == 1) {
      for(var j=2; i*j<=A; j++) {
        primes[i*j] = 0;
      }
    }
  }
  var final = [];
  for(var i=0; i<primes.length; i++) {
    if(primes[i] != 0){
      final.push(i);
    }
  }
  return final;
};

console.log(sieve(30));
console.log(sieve(1));
console.log(sieve(5));
console.log(sieve(21));
