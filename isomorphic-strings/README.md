# Isomorphic Strings

## Space Time Complexity

**Average**
Time Complexity: O(N), We process each character in both the strings exactly once to determine if the strings are isomorphic.

Space Complexity: O(1), since the size of the ASCII character set is fixed and the keys in our dictionary are all valid ASCII characters according to the problem statement.

## Task

[Link to Leetcode](https://leetcode.com/problems/isomorphic-strings/)

Given two strings `s` and `t`, _determine if they are isomorphic._

Two strings `s` and `t` are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

## Example 1:

```
Input: s = "egg", t = "add"
Output: true
```

## Example 2:

```
Input: s = "foo", t = "bar"
Output: false
```

## Example 3:

```
Input: s = "paper", t = "title"
Output: true
```

## Constraints:

- `1 <= s.length <= 5 * 10^4`
- `t.length == s.length`
- `s` and `t` consist of any valid ascii character.
