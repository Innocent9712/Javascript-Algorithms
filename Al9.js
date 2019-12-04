// CHALLENGE 9: IS AN ANAGRAM?

// “Here’s the definition of an anagram: a word, phrase, or name formed by rearranging the letters of another,
// such as cinema, formed from iceman.
// We are given two strings like “cinema” and “iceman” as inputs.
// Can you write a method isAnagram(str1, str2) that will return true or false depending on whether the
// strings are anagrams of each other ?”

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  if (str1 === str2) {
    return true;
  }

  return (
    [...str1.toLowerCase()].sort().join("") ===
    [...str2.toLowerCase()].sort().join("")
  );
}
console.log(isAnagram("dog", "goD"));