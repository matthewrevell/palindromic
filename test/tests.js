QUnit.test('abba should be validated as a palindrome', function(assert) {
   assert.ok( checkIfPalindrome('abba') ); 
});

QUnit.test('bjorn should not be validated as a palindrome', function(assert) {
   assert.notOk( checkIfPalindrome('bjorn') ); 
});

QUnit.test('long palindrome with punctuation should be validated as a palindrome', function(assert) {
   assert.ok( checkIfPalindrome('A man, a plan, a canoe, pasta, heros rajahs, a coloratura, maps, snipe, percale, macaroni, a gag, a banana bag, a tan, a tag, a banana bag again (or a camel), a crepe, pins, Spam, a rut, a Rolo, cash, a jar, sore hats, a peon, a canal - Panama!') ); 
});

QUnit.test('palindrome with numbers should be validated when retainNumbers parameter is true', function(assert) {
   assert.ok( checkIfPalindrome('999abba999', true) ); 
});

QUnit.test('string where letters form palindrome but numbers do not should be validated when retainNumbers parameter is false', function(assert) {
   assert.ok( checkIfPalindrome('123abba456', false) ); 
});

QUnit.test('string where letters form palindrome but numbers do not should bot be validated when retainNumbers parameter is true', function(assert) {
   assert.notOk( checkIfPalindrome('123abba456', true) ); 
});

QUnit.test('error should be generated when a non-string is passed as the first parameter', function(assert) {
   assert.equal( checkIfPalindrome(1234), 'Not a string' ); 
});

QUnit.test('error should be generated when an empty string is passed as the first parameter', function(assert) {
   assert.equal( checkIfPalindrome(''), 'Empty string' ); 
});