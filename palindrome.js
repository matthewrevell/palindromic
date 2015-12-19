function checkIfPalindrome(stringToCheck) {
	// Takes a single paramater. Checks if it is a string and not empty. 
	// Transposes to lower case. Strips the spaces.
	// Reverses the string. Checks if original matches the reversed version.
	// Returns an error if the supplied string is problematic or a boolean.
	
	//First up, check the parameter is a string
	if (typeof stringToCheck !== 'string') {
		return('Not a string');
	}
	console.log(stringToCheck);	
	console.log(typeof stringToCheck);
	
	// Define variables
	var stringNoSpaces = '';
	var stringLowered = '';
	var stringLength = 0;
	var stringReverse = '';
	
	// Strip any whitespace and punctuation from the string
	stringNoSpaces = stringToCheck.replace(/ /g,'');
	stringLength = stringNoSpaces.length;
	console.log(stringLength);
	// XXX: Strip punctuation
	
	if (stringLength > 0) {
		
		stringLowered = stringNoSpaces.toLowerCase();
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