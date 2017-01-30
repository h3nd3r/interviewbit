// https://www.interviewbit.com/problems/verify-prime/
// 0-> false, it's not prime
// 1 -> true, it's prime
isPrime = function(A) {
  console.log("sqrt: " + Math.floor(Math.sqrt(A)));
    for (var i=2; i<=Math.floor(Math.sqrt(A)); i++) {
        if (A%i == 0) {
            return 0;
        }
    }
    return A == 1 ? 0 : 1;
};
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(16));
console.log(isPrime(39601));
