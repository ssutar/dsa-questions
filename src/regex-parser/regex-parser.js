function regexParser(pattern, str) {
  function matcher(patternIndex, strIndex) {
    if (patternIndex >= pattern.length && strIndex >= str.length) {
      return true;
    }

    if (patternIndex >= pattern.length || strIndex >= str.length) {
      return false;
    }

    const char = pattern.charAt(patternIndex);

    if (char === '*') {
      if (patternIndex === pattern.length) {
        return true;
      }
      return (
        matcher(patternIndex, strIndex + 1) ||
        matcher(patternIndex + 1, strIndex) ||
        matcher(patternIndex + 1, strIndex + 1)
      );
    }

    if (char !== str.charAt(strIndex)) {
      return false;
    }
    return matcher(patternIndex + 1, strIndex + 1);
  }

  return matcher(0, 0);
}

console.log(regexParser('a*bcd', 'abcd'));
console.log(regexParser('*dcf', 'abdfdc'));
