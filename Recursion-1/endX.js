/* 
Given a string, compute recursively a new string where all the lowercase 'x' chars have been moved to the end of the string.


endX("xxre") → "rexx"
endX("xxhixx") → "hixxxx"
endX("xhixhix") → "hihixxx" */

function endX(str) {
  if (str.length === 0) return str;

  if (str.slice(0, 1) === "x") {
    return endX(str.slice(1)) + "x";
  } else {
    return str.slice(0, 1) + endX(str.slice(1));
  }
}
console.log(endX("xxre")); /* rexx */
console.log(endX("xxhixx")); /* hixxxx */
console.log(endX("xhixhix")); /* hihixxx */
