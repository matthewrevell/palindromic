// Test all function's ability to take a string and return an array of the
// three longest palindromes in that string

QUnit.test('String outtuoxyabbatbebvtoooooot should return array with toooooot, outtuo, ooooo in that order', function(assert) {
   var stringToCheck = 'outtuoxyabbatbebvtoooooot';
   var expected = ['toooooot', 'outtuo', 'ooooo'];
   var actual = findAndReturnPalindromes(stringToCheck, 3, false);   
   
   assert.deepEqual(actual, expected);   
});

QUnit.test('String 1a2b3b4a5 with retainNumbers false should return array with abba', function(assert) {
   var stringToCheck = '1a2b3b4a5';
   var expected = ['abba', 'a', 'b'];
   var actual = findAndReturnPalindromes(stringToCheck, 3, false);
   
   assert.deepEqual(actual, expected);   
});

QUnit.test('String 123321aabbbaa4554 with retainNumbers true should return array of palindromes including numbers', function(assert) {
   var stringToCheck = '123321aabbbaa4554';
   var expected = ['aabbbaa', '123321', '4554'];
   var actual = findAndReturnPalindromes(stringToCheck, 3, true);
   
   assert.deepEqual(actual, expected);   
});

QUnit.test('Provide a longer string with punctuation and spaces.', function(assert) {
   var stringToCheck = 'beeeeeeeb abbba xyz noon A man, a plan, a canal – Panama!';
   var expected = ['amanaplanacanalpanama', 'beeeeeeeb', 'eeeeee'];
   var actual = findAndReturnPalindromes(stringToCheck, 3, false);
   
   assert.deepEqual(actual, expected);   
});

QUnit.test('A string with no palindrome should return a string saying there is no palindrome', function(assert) {
   var stringToCheck = 'abcdefghijk';
   var expected = 'No palindromes found';
   var actual = findAndReturnPalindromes(stringToCheck, 3, false);
   
   assert.equal(actual, expected);
});

QUnit.test('Requesting five palindromes should return five palindromes', function(assert) {
   var stringToCheck = 'beeeeeeeb abbba xyz noon A man, a plan, a canal – Panama! noooooon';
   var expected = 5;
   var resultsArray = findAndReturnPalindromes(stringToCheck, 5, false);
   var actual = resultsArray.length;
   
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