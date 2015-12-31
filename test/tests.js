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
   var expected = ['amanaplanacanalpanama', 'beeeeeeeb', 'eeeee'];
   var positionsArray = findPalindromesInString(stringToCheck, true);
   var actual = returnTopThreePalindromes(stringToCheck, positionsArray);
   
   assert.deepEqual(actual, expected);   
});
