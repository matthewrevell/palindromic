function checkIfPalindrome(stringToCheck, retainNumbers) {
	// Takes two paramaters: 
	// 1. A string that is to be checked for palindromicity.
	// 2. A boolean, where true allows numbers in the string and false has them stripped out.
	// The function checks that the first parameter is a string and is not empty. 
	// Transposes to lower case. Strips the spaces and punctuation (and numbers, if specified).
	// Reverses the string. Checks if original matches the reversed version.
	// Returns an error if the supplied string is problematic.
	
	//First up, check the parameter is a string
	if (typeof stringToCheck !== 'string') {
		return('Not a string');
	}
	console.log(stringToCheck);	
	console.log(typeof stringToCheck);
	
	// Define variables
	var stringStripped = '';
	var stringLowered = '';
	var stringLength = 0;
	var stringReverse = '';
	var regexNoNumbers = /[\W_0-9]+/g;
	var regexAllowNumbers = /[\W_]+/g;
	var regexString = retainNumbers === true ? regexAllowNumbers : regexNoNumbers; 
	
	// Strip any whitespace and punctuation from the string, optionally numbers as well
	stringStripped = stringToCheck.replace(regexString,'');
	stringLength = stringStripped.length;
	console.log(stringLength);
	
	if (stringLength > 0) {
		
		stringLowered = stringStripped.toLowerCase();
		console.log(stringLowered);
		// Check if it's a palindrome
		stringReverse = stringLowered.split('').reverse().join('');
		console.log(stringReverse);
		if (stringLowered === stringReverse) {
			return (true);
			console.log('true');	
		} else {
			return (false);
			console.log('false');
		}
	} else {
		return ('Empty string');
	}
}