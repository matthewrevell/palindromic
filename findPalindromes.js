function findPalindromesInString(stringToCheck, retainNumbers) {
    
    // Accepts: a string to be checked for palindromes and a boolean flag.
    // Returns: an array of numbers. The index of each array corresponds to
    // an index in the string and the value at that index in the array is the
    // extent of any array centred at that position.
    // The boolean flag chooses whether to retain any numbers in the string or
    // to strip them out.
    // The function prepares the string: it removes punctuation, spaces and
    // numbers, if chosen, then transposes it to lower case and places a comma
    // at each odd index, starting at 0 and finishing at the final index.
    // It then returns the array giving the size of the offset creating the
    // palindrome from each of the string's corresponding indexes.

    var separatedString = prepareString(stringToCheck, retainNumbers);
    var stringLength = separatedString.length;
    var positionArray = Array(stringLength).fill(0);
    var offset;
    var i;
    
    console.log('string: ' + stringToCheck);
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
        console.log('##################');
        console.log('Working on new character');
        console.log('##################');        
        console.log('i: ' + i);
        console.log('char: ' + separatedString.charAt(i));
        for (offset = 1; i + offset < stringLength; offset++) {
            console.log('offset: ' + offset);    
            console.log('left: ' + separatedString.charAt(i-offset));
            console.log('right: ' + separatedString.charAt(i+offset));
            if (separatedString.charAt(i-offset) === separatedString.charAt(i+offset)) {
                positionArray[i] = offset;
                console.log('positionArray[i]: ' + positionArray);
                console.log('palindrome thus far: ' + separatedString.substring(i-offset, i+(offset+1)));
                console.log('A palindrome!');
            } else {
                console.log('Not a palindrome');
                offset = stringLength+1;
            }
                  
        }        
    }   
    return positionArray;       
}

function returnTopThreePalindromes(stringToCheck, positionsArray) {
    // Accepts: a string containing various palindromes and an array.
    // Each index in the array corresponds to an index in the string.
    // The values in the array show the number of characters left and right
    // of any palindrome centred at that index.
    // Returns: an array of the three longest palindromes, as strings.
        
    var topPalindromes = [];
    var topPalindromePositions = [0, 0, 0];
    var stringLength = stringToCheck.length;
    var palindromePositionsWithOffsets = [];
    var tempPalindromeDetails = {};
    var palindromeWithCommas = '';
    var i;
    var centre = 0;
    var start = 0;
    var end = 0;
    var offset = 0;
    
    // Find the longest three palindromes by looping through the array of
    // palindrome offsets. If the palindrome is longer than the top three, it
    // will push that palindrome's centre index into the topPalindromePositions
    // array, thereby pushing along any existing values that should remain in
    // the top three.
    
    for (i = 0; i < stringLength; i++) {
        console.log(i);
        tempPalindromeDetails.position = i;
        tempPalindromeDetails.offset = positionsArray[i];
        palindromePositionsWithOffsets.push(tempPalindromeDetails);
        tempPalindromeDetails = {};
    }
    
    palindromePositionsWithOffsets.sort(compareOffsets);
    
    console.log(JSON.stringify(palindromePositionsWithOffsets));

    /*for (i = 0; i < stringLength; i++) {
        if (positionsArray[i] > topPalindromePositions[0]) {
            topPalindromePositions.splice(0, 0, i); 
            console.log(topPalindromePositions);
        } else if (positionsArray[i] > topPalindromePositions[1]) {
            topPalindromePositions.splice(1, 0, i)
            console.log(topPalindromePositions);
        } else if (positionsArray[i] > topPalindromePositions[2]) {
            topPalindromePositions.splice(2, 0, i)
            console.log(topPalindromePositions);
        }
    }*/
    
    // Trim the array of palindrome positions so that we have only three.
    
    if (palindromePositionsWithOffsets.length > 3) {
        palindromePositionsWithOffsets.length = 3;
    }

    console.log(JSON.stringify(palindromePositionsWithOffsets));
    
    // Populate an array with the strings of our top three palindromes by
    // finding the centre of the palindrome and the offset number of characters
    // that shows the extent left and right. Once we have that, we slice the
    // original string to extract our palindrome.
        
    for (i = 0; i <= 2; i++) {
        centre = palindromePositionsWithOffsets[i].position;
        console.log('centre:' + centre);
        offset = palindromePositionsWithOffsets[i].offset;
        start = centre - offset;
        end = centre + offset;
        palindromeWithCommas = stringToCheck.slice(start, end);
        topPalindromes[i] = palindromeWithCommas.replace(/,/g,'');
        console.log(topPalindromes[i]);
    }
    
    return topPalindromes;

}

function compareOffsets(a,b) {
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