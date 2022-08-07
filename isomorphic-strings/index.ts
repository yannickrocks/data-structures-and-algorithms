interface stringMap {
  [property: string]: string;
}

function isIsomorphic(s: string, t: string): boolean {
  const sMap: stringMap = {};
  const tMap: stringMap = {};

  const sArray = s.split('');
  //Since both are the same length, loop through and add to map
  // mapping tValue to sKey and vice-versa
  for (let i = 0; i < sArray.length; i++) {
    sMap[sArray[i]] = t[i];
    tMap[t[i]] = s[i];
  }

  for (let i = 0; i < sArray.length; i++) {
    if (sMap[s[i]] !== t[i]) {
      return false;
    }

    if (tMap[t[i]] !== sArray[i]) {
      return false;
    }
  }
  return true;
}
