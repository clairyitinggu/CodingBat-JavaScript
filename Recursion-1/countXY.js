/* 
Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.


changeXY("codex") → "codey"
changeXY("xxhixx") → "yyhiyy"
changeXY("xhixhix") → "yhiyhiy"
 */
function changeXY(str) {
  if (str.length === 0) return "";
  if (str[0] === "x") {
    return "y" + changeXY(str.slice(1));
  } else {
    return str.slice(0, 1) + changeXY(str.slice(1));
  }
}

console.log(changeXY("codex")); /* codey */
console.log(changeXY("xxhixx")); /* yyhiyy */
console.log(changeXY("xhixhix")); /* yhiyhiy */
