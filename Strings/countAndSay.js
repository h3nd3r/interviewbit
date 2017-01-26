// https://www.interviewbit.com/problems/count-and-say/
countAndSay = function(A) {
    var past = [1];
    var current =[1];
    // generate each iteration
    for (var i=1; i<A; i++) {
        current = [];

        // generate the current string based on the previous one
        for (var j=0; j<past.length; j++) {
            var count = 1;
            while (j+1 < past.length && past[j] == past[j+1]) {
                count++;
                j++;
            }
            current.push(count);
            current.push(past[j]);
        }
        past = current.slice(0,current.length);
    }
      return current.join("");
};
