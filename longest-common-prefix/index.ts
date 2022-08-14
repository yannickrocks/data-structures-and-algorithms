function longestCommonPrefix(strs: string[]): string {
  let i = 0;

  if (!strs.length) {
    return '';
  }

  while (true) {
    const char = strs[0][i] || '';
    const match = strs.every((str) => str[i] === char);
    if (match) {
      i += 1;
    } else {
      break;
    }
  }
  return strs[0].slice(0, i);
}
