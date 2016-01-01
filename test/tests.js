// Test all function's ability to take a string and return an array of the
// three longest palindromes in that string


QUnit.test('String 1a2b3b4a5 with retainNumbers false should return array with abba', function(assert) {
   var stringToCheck = '1a2b3b4a5';
   var expected = ['abba', 'a', 'b'];
   var actual = findAndReturnPalindromes(stringToCheck, 3, false);
   
   assert.deepEqual(actual, expected);   
});

QUnit.test('String sqrrqabccbatudefggfedvwhijkllkjihxymnnmzpop should return array with hijkllkjih, defggfed, abccba in that order', function(assert) {
   var stringToCheck = 'sqrrqabccbatudefggfedvwhijkllkjihxymnnmzpop';
   var expected = ['hijkllkjih', 'defggfed', 'abccba'];
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

QUnit.test('Check findAndReturnPalindromes rejects a non-string as stringToCheck', function(assert) {
   var expected = 'stringToCheck must be a string, not a number';
   var actual = findAndReturnPalindromes(1234, 5, false);
   
   assert.equal(actual, expected);
});

QUnit.test('Check findAndReturnPalindromes rejects a zero length string as stringToCheck', function(assert) {
   var expected = 'stringToCheck must be longer than 0';
   var actual = findAndReturnPalindromes('', 3, false);
   
   assert.equal(actual, expected);
});

QUnit.test('Check findAndReturnPalindromes rejects a number of palindromes of 0', function(assert) {
   var expected = 'numberOfPalindromes must be at least 1';
   var actual = findAndReturnPalindromes('abba nooon lol', 0, false);
   
   assert.equal(actual, expected);
});

QUnit.test('Check findAndReturnPalindromes rejects a number as retainNumbers', function(assert) {
   var expected = 'retainNumbers must be a boolean, not a number';
   var actual = findAndReturnPalindromes('abba nooon lol', 1, 123);
   
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