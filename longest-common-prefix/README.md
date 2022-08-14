# Roman to Integer

## Space Time Complexity

**Average**

O(S) Because each character in each string will potentially be visited one time, the time complexity is O(s), where S represents the sum of all characters in all strings.

## O(1) This approach will use a constant amount of space, making the Space Complexity

## Task

[Link to Leetcode](https://leetcode.com/problems/longest-common-prefix/)

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

## Example 1:

```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

## Example 2:

```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

## Constraints:

- `1 <= strs.length <= 200`
- `0 <= strs[i].length <= 200`
- `strs[i]` consists of only lowercase English letters.
