// The function isPalindrome() will return true if
// the argument passed is a word that can be spelled
// the same way reveresed i.e. "racecar"
function isPalindrome(word) {
  if(word === word.split("").reverse().join("")) {
    return true
  } else {
    return false
  };
};







/* 
if the word (which is a string) equals sthe string that is operated on, 
return true
else
return false
*/

/*
The function isPalindrome() determines whether or not a word
is a Palindrome by passing the argument given (which should be a string)
through an if loop, given the condition that the string matches its reciprocal
I used Google to find the methods I needed to
1. split the string so that each letter becomes an element
2. use .reverse method to join the string
3. .join concatenates the results to reform the word, but in reverse
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
