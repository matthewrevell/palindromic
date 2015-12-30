QUnit.test('String outtuoxyabbatbebvtoooooot sent to findPalindromesInString should return array with toooooot, outtuo, ooooo in that order', function(assert) {
   var stringToCheck = prepareString('outtuoxyabbatbebvtoooooot', false);
   var expected = ['toooooot', 'outtuo', 'ooooo'];
   var positionsArray = findPalindromesInString(stringToCheck, false);
   var actual = returnTopThreePalindromes(stringToCheck, positionsArray);
   
   assert.deepEqual(actual, expected);   
});
