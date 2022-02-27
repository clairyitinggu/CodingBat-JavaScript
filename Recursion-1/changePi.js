/* 
Given a string, compute recursively (no loops) a new string where all appearances of "pi" have been replaced by "3.14".


changePi("xpix") → "x3.14x"
changePi("pipi") → "3.143.14"
changePi("pip") → "3.14p"
 */
function changePi(str) {
  if (str.length <= 1)
    return str; /* <=1  return str而不是"",如果是==0可以return"" */
  if (str.slice(0, 2) === "pi") {
    return "3.14" + changePi(str.slice(2));
  } else {
    return str.slice(0, 1) + changePi(str.slice(1));
  }
}
console.log(changePi("xpix")); /*  x3.14x  */
console.log(changePi("pipi")); /* 3.143.14 */
console.log(changePi("pip")); /* 3.14p */
