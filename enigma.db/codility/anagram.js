function anagramCounter(wordsArray) {
    return counter;
  }
  
  function isAnagram(str1, strt2) {
    // true or false if str1 is anagram str2
  
    //pertumantion and combinations
    // 4 what are all the possible combinations
    // One of the combination is matching then that is anagram
  
    if (str1.length !== strt2.length) return false;
  
    let fr1 = {};
  
    let fr2 = {};
  
    for (let i = 0; i < str1.length; i++) {
      let char1 = str1[i];
      let char2 = strt2[i];
  
      if (fr1[char1] !== undefined) {