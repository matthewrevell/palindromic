function findAndReturnPalindromes(stringToCheck, numberOfPalindromes, retainNumbers){
    // Accepts: a string to be checked for palindromes, an integer to specify
    // the number of palindromes to return and a boolean specifying whether to
    // retain (true) or strip (false) numbers from the string.
    // Returns: an array of palindrome strings.
    // Dependencies: lodash
    
    // Check the parameters are valid
    
    if (_.isString(stringToCheck) === false) {
        return 'stringToCheck must be a string, not a ' + typeof stringToCheck;
    }
    
    if (stringToCheck.length === 0) {
        return 'stringToCheck must be longer than 0';
    }
    
    if (_.isNumber(numberOfPalindromes) === false) {
        return 'numberOfPalindromes must be a number, not a ' + typeof numberOfPalindromes;        
    }
    
    if (numberOfPalindromes < 1) {
        return 'numberOfPalindromes must be at least 1';
    }
    
    if (_.isBoolean(retainNumbers) === false) {
        return 'retainNumbers must be a boolean, not a ' + typeof retainNumbers;        
    }
    
    // Prepare the provided string by stripping punctuation, spaces and optionally numbers.
    // Adds separators at even positions, leaving the original characters at odd positions.
    var separatedString = prepareString(stringToCheck, retainNumbers);
    
    // For each position in the string (including the separator positions)
    // finds the extent to which a palindrome extends left and right.
    var positionsArray = findPalindromesCentres(separatedString);
    
    // Takes the prepared string, the array of palindrome positions and then
    // returns the specified X longest palindromes found.
    var topPalindromes = retrievePalindromeStrings(separatedString, positionsArray, numberOfPalindromes);
    
    return topPalindromes;
}

function findPalindromesCentres(separatedString) {    
    // Accepts: a string to be checked for palindromes.
    // Returns: an array of numbers. The index of each array corresponds to
    // an index in the string and the value at that index in the array is the
    // extent of any array centred at that position.
    
    var stringLength = separatedString.length;
    var positionArray = Array(stringLength).fill(0);
    var offset;
    var i;
    var rightEdge = 1;
    var currentWorkingCentre = 1;
    var mirror;
    
    //console.log('string: ' + stringToCheck);
    console.log('stringLength: ' + stringLength);    
    console.log('separatedString: ' + separatedString);
    
    // Loop through the string to find any palindromes.
    // Start at index 1, as 0 is only a separator.
    // Compare each character either side. If they are identical, we have a
    // palindrome and record the length in the corresponding index of the
    // position array. We then increase the offset by one and compare those
    // characters. We continue updating the positions array until we hit the
    // extremities of the string or the characters no long match.
    
    for (i = 1; i < stringLength - 1; i++) {
        console.log('i: ' + i);
        console.log('rightEdge: ' + rightEdge);
        mirror = currentWorkingCentre * 2 - i;
        console.log('mirror: ' + mirror);
         
        if (i < rightEdge) {
            console.log ('i < rightEdge');
            if (rightEdge - i < positionArray[mirror]) {
                positionArray[i] = rightEdge - 1;
            } else {
                positionArray[i] = positionArray[mirror];
            }
        }
            
        for (offset = positionArray[i]; i + offset < stringLength; offset++) {  
            console.log('offset: ' + offset);  
            if (separatedString.charAt(i-offset) === separatedString.charAt(i+offset)) {
                positionArray[i] += 1;
            } else {
                offset = stringLength+1;
            }
        }    
        
        
        if (i + positionArray[i] > rightEdge) {
            currentWorkingCentre = i;
            rightEdge = i + positionArray[i];
        }
        
        
        
        
        
                
    }   
    return positionArray;       
}

function retrievePalindromeStrings(stringToCheck, positionsArray, numberOfPalindromes) {
    // Accepts: a string, an array and an integer.
    // The string contains from zero to several palindromes.
    // Each positions of the array corresponds to that position in the string.
    // The values in the array provide the number of characters to the left and
    // right of that position that make up the longest palindrome centred at 
    // that position.
    // The integer specifies how many palindromes to return.
    // Returns: an array of the X longest palindromes, as strings.
        
    var topPalindromes = [];
    var thereIsAPalindrome = false;
    var stringLength = stringToCheck.length;
    var palindromePositionsWithOffsets = [];
    var tempPalindromeDetails = {};
    var palindromeWithCommas = '';
    var i;
    var centre = 0;
    var start = 0;
    var end = 0;
    var offset = 0;
    
    // Can return a minimum of one palindrome
    console.log(numberOfPalindromes);
    if (numberOfPalindromes < 1) {
        return 'numberOfPalindromes must be greater than zero';
    }
    
    // Find the longest X palindromes by looping through the array of
    // palindrome offsets. If the palindrome is longer than the top X, it
    // will push that palindrome's centre index into the topPalindromePositions
    // array, thereby pushing along any existing values that should remain in
    // the top X.
    
    for (i = 0; i < stringLength; i++) {
        console.log(i);
        tempPalindromeDetails.position = i;
        tempPalindromeDetails.offset = positionsArray[i];
        palindromePositionsWithOffsets.push(tempPalindromeDetails);
        tempPalindromeDetails = {};
    }
    
    // Sort the array of objects by offset size in descending order
    palindromePositionsWithOffsets.sort(compareOffsets);    
    console.log(JSON.stringify(palindromePositionsWithOffsets));
    
    // Trim the array of palindrome positions so that we have only three.   
    if (palindromePositionsWithOffsets.length > numberOfPalindromes) {
        palindromePositionsWithOffsets.length = numberOfPalindromes;
    }

    console.log(JSON.stringify(palindromePositionsWithOffsets));
    
    // Populate an array with the strings of our top X palindromes by
    // finding the centre of the palindrome and the offset number of characters
    // that shows the extent left and right. Once we have that, we slice the
    // original string to extract our palindrome.
        
    for (i = 0; i < numberOfPalindromes; i++) {
        centre = palindromePositionsWithOffsets[i].position;
        console.log('centre:' + centre);
        offset = palindromePositionsWithOffsets[i].offset;
        if (offset > 1) {
            thereIsAPalindrome = true;
        }
        start = centre - offset;
        end = centre + offset;
        palindromeWithCommas = stringToCheck.slice(start, end);
        topPalindromes[i] = palindromeWithCommas.replace(/,/g,'');
        console.log(topPalindromes[i]);
    }
    
    if (thereIsAPalindrome) {
        return topPalindromes;
    } else {
        return 'No palindromes found';    
    } 

}

// Helper functions

function compareOffsets(a,b) {
    // Allows us to sort the array of palindrome objects in descending order of
    // the palindrome size.
    return b.offset - a.offset;
}

function prepareString(stringToCheck, retainNumbers) {
	// Takes two paramaters: 
	// 1. A string that is to be checked for palindromicity.
	// 2. A boolean, where true allows numbers in the string and false has them stripped out.
	// The function checks that the first parameter is a string and is not empty. 
	// Transposes to lower case. Strips the spaces and punctuation (and numbers, if specified).
	// Reverses the string and then returns a version of that string that has a comma
    // at ever even position starting at 0.
	
   // Define variables
	var stringStripped = '';
	var stringLowered = '';
	var regexNoNumbers = /[\W_0-9]+/g;
	var regexAllowNumbers = /[\W_]+/g;
	var regexString = retainNumbers === true ? regexAllowNumbers : regexNoNumbers;
    var arrayOfChars = [];
    var stringWithCommas = '';
    
    // First up, check the parameter is a string
	if (typeof stringToCheck !== 'string') {
		return('Not a string');
	} else if (stringToCheck.length < 1) {
        return('String is empty');
    }
    
    // Strip any whitespace and punctuation from the string, optionally numbers as well
	stringStripped = stringToCheck.replace(regexString,'');
    console.log('stringStripped: ' + stringStripped);
    stringLowered = stringStripped.toLowerCase();
    console.log('stringLowered: ' + stringLowered);
    
    // Converting to an array and back automatically inserts commas between characters.
    // We just need to add one to the start and end of the string.
    arrayOfChars = stringLowered.split('');
    stringWithCommas = ',' + arrayOfChars.toString() + ',';
    
    return stringWithCommas;
}