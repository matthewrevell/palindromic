Palindromic takes a string and returns an array of the top X palindromes 
found in that string. If there are no palindromes in the string, it returns an error.

## Usage

```js
    var stringToCheck = 'beeeeeeeb abbba xyz noon A man, a plan, a canal – Panama!';
    var numberOfPalindromesToReturn = 3;
    var retainNumbersInPalindromeString = false;
    var palindromes = [];
    
    palindromes = findAndReturnPalindromes(stringToCheck, numberOfPalindromesToReturn, retainNumbersInPalindromeString);
           
```