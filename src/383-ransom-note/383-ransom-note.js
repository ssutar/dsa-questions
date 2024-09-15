/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();
  for (let ch of ransomNote) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  for (let ch of magazine) {
    if (map.has(ch)) {
      map.set(ch, map.get(ch) - 1);
      if (map.get(ch) === 0) {
        map.delete(ch);
      }
    }
  }
  return !map.size;
};
