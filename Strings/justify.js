// https://www.interviewbit.com/problems/justified-text/
fullJustify = function(A, B) {
      var C = [], currentToken = 0;
      var totalChars = A.reduce(function(a, b){return a + b.length;},0) + (A.length - 1);
      var numLines = Math.ceil(totalChars/B);
      for (var i=0; i<numLines; i++) {
          var line = "", charCountForline = 0, numTokensForLine = 0;
          var totalNumSpaces = 0, leftoverSpaces = 0, space = 0, remainder = 0;
          while (charCountForline <= B && numTokensForLine + currentToken < A.length) {
              if(charCountForline != 0) {charCountForline ++;}
              charCountForline += A[numTokensForLine + currentToken].length;
              numTokensForLine++;
          }
          if (charCountForline > B) {
              numTokensForLine--;
              charCountForline -= A[numTokensForLine + currentToken].length;
          }
          leftoverSpaces = B - charCountForline;
          totalNumSpaces = leftoverSpaces + numTokensForLine;
          space = Math.floor(totalNumSpaces/(numTokensForLine-1));
          remainder = totalNumSpaces%(numTokensForLine-1)
          if (i == (numLines - 1)) {
            space = 1;
            leftoverSpaces = 0;
          }
          var j = 0;
          while (j < numTokensForLine) {
              if (j != 0) {
                  if (j == 1) {
                      for (var k=0; k<remainder; k++) {
                          line += " ";
                      }
                  }
                  for(var k=0; k<space; k++) {
                      line += " ";
                  }
              }
              line += A[currentToken + j];
              if (i == numLines - 1 && j == numTokensForLine - 1) {
                for(var k=charCountForline; k<B; k++) {
                    line += " ";
                }
              }
              j++;
          }
          currentToken += numTokensForLine;
          C.push(line);
      }
      return C;
};

console.log(fullJustify([ "What", "must", "be", "shall", "be." ], 12));
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."],16));
