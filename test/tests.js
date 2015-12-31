// Test all function's ability to take a string and return an array of the
// three longest palindromes in that string

QUnit.test('String outtuoxyabbatbebvtoooooot sent to findPalindromesInString should return array with toooooot, outtuo, ooooo in that order', function(assert) {
   var stringToCheck = prepareString('outtuoxyabbatbebvtoooooot', false);
   var expected = ['toooooot', 'outtuo', 'ooooo'];
   var positionsArray = findPalindromesInString(stringToCheck, false);
   var actual = returnTopThreePalindromes(stringToCheck, positionsArray);
   
   assert.deepEqual(actual, expected);   
});

QUnit.test('String 1a2b3b4a5 sent to findPalindromesInString with retainNumbers false should return array with abba', function(assert) {
   var stringToCheck = prepareString('1a2b3b4a5', false);
   var expected = ['abba', 'a', 'b'];
   var positionsArray = findPalindromesInString(stringToCheck, false);
   var actual = returnTopThreePalindromes(stringToCheck, positionsArray);
   
   assert.deepEqual(actual, expected);   
});

QUnit.test('String 123321aabbbaa4554 sent to findPalindromesInString with retainNumbers true should return array of palindromes including numbers', function(assert) {
   var stringToCheck = prepareString('123321aabbbaa4554', true);
   var expected = ['aabbbaa', '123321', '4554'];
   var positionsArray = findPalindromesInString(stringToCheck, true);
   var actual = returnTopThreePalindromes(stringToCheck, positionsArray);
   
   assert.deepEqual(actual, expected);   
});

QUnit.test('Provide a longer string with punctuation and spaces.', function(assert) {
   var stringToCheck = prepareString('beeeeeeeb abbba xyz noon A man, a plan, a canal – Panama!', false);
   var expected = ['amanaplanacanalpanama', 'beeeeeeeb', 'eeeeee'];
   var positionsArray = findPalindromesInString(stringToCheck, false);
   var actual = returnTopThreePalindromes(stringToCheck, positionsArray);
   
   assert.deepEqual(actual, expected);   
});

QUnit.test('A string with no palindrome should return a string saying there is no palindrome', function(assert) {
   var stringToCheck = prepareString('abcdefghijk', false);
   var expected = 'No palindromes found';
   var positionsArray = findPalindromesInString(stringToCheck, false);
   var actual = returnTopThreePalindromes(stringToCheck, positionsArray);
   assert.equal(actual, expected);
});

// Test prepareString

QUnit.test('prepareString with false and string A123bba! should return ,a,b,b,a,', function(assert) {
   var stringToCheck = 'A123bba!';
   var expected = ',a,b,b,a,';
   var actual = prepareString(stringToCheck, false);   
   assert.equal(actual, expected);   
});

QUnit.test('prepareString with true and string A123bba! should return ,a,1,2,3,b,b,a,', function(assert) {
   var stringToCheck = 'A123bba!';  
   var expected = ',a,1,2,3,b,b,a,';
   var actual = prepareString(stringToCheck, true);   
   assert.equal(actual, expected);   
});