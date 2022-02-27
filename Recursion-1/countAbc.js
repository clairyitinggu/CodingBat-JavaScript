/* Count recursively the total number of "abc" and "aba" substrings that appear in the given string.


countAbc("abc") → 1
countAbc("abcxxabc") → 2
countAbc("abaxxaba") → 2 */

function countAbc(str) {
  if (str.length <= 2) return 0;

  if (str.slice(0, 3) === "abc" || str.slice(0, 3) === "aba") {
    return 1 + countAbc(str.slice(1));
  } else {
    return countAbc(str.slice(1));
  }
}

console.log(countAbc("abc")); /* 1 */
console.log(countAbc("abcxxabc")); /* 2 */
console.log(countAbc("abaxxaba")); /* 2 */

/* 
countAbc("abc") → 1	1	OK	
countAbc("abcxxabc") → 2	2	OK	
countAbc("abaxxaba") → 2	2	OK	
countAbc("ababc") → 2	2	OK	
countAbc("abxbc") → 0	0	OK	
countAbc("aaabc") → 1	1	OK	
countAbc("hello") → 0	0	OK	
countAbc("") → 0	0	OK	
countAbc("ab") → 0	0	OK	
countAbc("aba") → 1	1	OK	
countAbc("aca") → 0	0	OK	
countAbc("aaa") → 0	0	OK	 */
