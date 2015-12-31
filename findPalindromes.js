function findPalindromesInString(stringToCheck, retainNumbers) {

    var separatedString = prepareString(stringToCheck, retainNumbers);
    var stringLength = separatedString.length;
    var positionArray = Array(stringLength).fill(0);
    var positionArrayAsString = '';
    var offset;
    var i;
    
    console.log('string: ' + stringToCheck);
    console.log('stringLength: ' + stringLength);    
    console.log('separatedString: ' + separatedString);
    
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
    positionArrayAsString = positionArray.toString();
    return positionArrayAsString.replace(/,/g,'');       
}

function returnTopThreePalindromes(stringToCheck, positionsArray) {

    var palindromes = [];    
    var palindromeStart = 0;
    var palindromeEnd = 0;
    var palindromesSorted = [];
    var i;
    
    console.log('in returnTopThreePs');
    
    for (i = 1; i < stringToCheck.length - 1; i++) {
        console.log('i: ' + i);
        if (positionsArray[i] > 1) {
            console.log('over 1');
            console.log('positionsArray[' + i + ']: ' + positionsArray[i]);
            console.log('typeof positionsArray[i]:' + typeof positionsArray[i]);
            palindromeStart = i - parseInt(positionsArray[i], 10);
            console.log('palStart: ' + palindromeStart);
            palindromeEnd = i + parseInt(positionsArray[i], 10);
            console.log('palEnd: ' + palindromeEnd);
            console.log(stringToCheck.substring(palindromeStart, palindromeEnd).replace(/,/g,''));
            palindromes.push(stringToCheck.substring(palindromeStart, palindromeEnd).replace(/,/g,''));
        }        
    }
    
    console.log(palindromes);
    
    palindromesSorted = palindromes.sort(sortByLength); 
    console.log(palindromesSorted.slice(0,3));

    return palindromes.slice(0,3);
}

    
function sortByLength(a,b) {
    // Sort the array by value length
    return b.length - a.length;
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
    
    //First up, check the parameter is a string
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
    
    arrayOfChars = stringLowered.split('');
    stringWithCommas = ',' + arrayOfChars.toString() + ',';
    
    return stringWithCommas;
}