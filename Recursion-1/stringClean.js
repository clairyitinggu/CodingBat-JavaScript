/* 
Given a string, return recursively a "cleaned" string where adjacent chars that are the same have been reduced to a single char. So "yyzzza" yields "yza".


stringClean("yyzzza") → "yza"
stringClean("abbbcdd") → "abcd"
stringClean("Hello") → "Helo" */

function stringClean(str) {
  if (str.length <= 1) return str;
  if (str.slice(0, 1) === str.slice(1, 2)) {
    return stringClean(str.slice(1));
  } else {
    return str.slice(0, 1) + stringClean(str.slice(1));
  }
}
console.log(stringClean("yyzzza")); /* yza  */
console.log(stringClean("abbbcdd")); /* abcd */
console.log(stringClean("Hello")); /* Helo */

/* 
stringClean("yyzzza") → "yza"	"yza"	OK	
stringClean("abbbcdd") → "abcd"	"abcd"	OK	
stringClean("Hello") → "Helo"	"Helo"	OK	
stringClean("XXabcYY") → "XabcY"	"XabcY"	OK	
stringClean("112ab445") → "12ab45"	"12ab45"	OK	
stringClean("Hello Bookkeeper") → "Helo Bokeper"	"Helo Bokeper"	OK 
*/
