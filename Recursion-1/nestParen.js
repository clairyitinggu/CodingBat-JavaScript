/* Given a string, return true if it is a nesting of zero or more pairs of parenthesis, like "(())" or "((()))". Suggestion: check the first and last chars, and then recur on what's inside them.


nestParen("(())") → true
nestParen("((()))") → true
nestParen("(((x))") → false
 */
function nestParen(str) {
  if (str.length === 0) return true;
  if (str[0] === "(" && str[str.length - 1] === ")") {
    return nestParen(str.slice(1, str.length - 1));
  }
  return false;
}

console.log(nestParen("(())")); /* true  */
console.log(nestParen("((()))")); /* true */
console.log(nestParen("(((x))")); /* false */
/* 
nestParen("(())") → true	true	OK	
nestParen("((()))") → true	true	OK	
nestParen("(((x))") → false	false	OK	
nestParen("((())") → false	false	OK	
nestParen("((()()") → false	false	OK	
nestParen("()") → true	true	OK	
nestParen("") → true	true	OK	
nestParen("(yy)") → false	false	OK	
nestParen("(())") → true	true	OK	
nestParen("(((y))") → false	false	OK	
nestParen("((y)))") → false	false	OK	
nestParen("((()))") → true	true	OK	
nestParen("(())))") → false	false	OK	
nestParen("((yy())))") → false	false	OK	
nestParen("(((())))") → true	true	OK */
