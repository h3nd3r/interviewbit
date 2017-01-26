// https://www.interviewbit.com/problems/pretty-json/
constructLine = function(A, B) {
  var str = "";
  for (var i=0; i<A; i++) {
    str += "\t";
  }
  return str + B;
};

prettyJSON = function(A) {
  var B = [];
  var tabCount = 0;
  var a = A.split("");
  var line = "";

  for (var i=0; i<a.length; i++) {
      switch(a[i]) {
        case "[":
        case "{":
          B.push(line + "\n");
          B.push(constructLine(tabCount, a[i]) + "\n");
          tabCount++;
          line = constructLine(tabCount, "");
          break;
        case "]":
        case "}":
          B.push(line + "\n");
          B.push(constructLine(tabCount, a[i]) + "\n");
          tabCount--;
          line = constructLine(tabCount, "");
          break;
        case ",":
          B.push(line + ",");
          line = constructLine(tabCount, "");
          break;
        default:
          line += a[i];
          break;
      }
  }
  B.shift();
  return B;
};

console.log(prettyJSON("{A:\"\B\",C:{D:\"E\",F:{G:\"H\",I:\"J\"}}}"));
console.log(prettyJSON("[\"foo\", {\"bar\":[\"baz\",null,1.0,2]}]"));
