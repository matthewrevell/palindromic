function findThreeLongestPalindromes(stringToCheck) {
    
    // Variable defintions
    var results = {};
    var allPalindromes = [];
    var currentPalindrome = '';
    var stringLength = stringToCheck.length;
    var startPos = getMidPoint(stringLength);
    var offset = 1;
    var isPalindrome = null;
    var leftChar = '';
    var rightChar = '';
    
    // Validate parameter
    if (typeof stringToCheck !== 'string') {
		return('Not a string');
	} else if (stringLength <= 0) {
        return('Empty string');    
    }
    
   while (startPos+offset < stringLength && isPalindrome !== false) {
        console.log('offset: ' + offset);
        leftChar = stringToCheck.charAt(startPos-offset);
        rightChar = stringToCheck.charAt(startPos+offset);
        
        console.log('stringToCheck: ' + stringToCheck);
        console.log('leftChar: ' + leftChar);
        console.log('rightChar: ' + rightChar);
        
        
        if (leftChar === rightChar) {
            isPalindrome = true;
            console.log('Found match between ' + leftChar + ' and ' + rightChar);
        } else {
            isPalindrome = false;
            console.log('No match found between ' + leftChar + ' and ' + rightChar);
        }
        console.log('isPalindrome: ' + isPalindrome);
        
        offset+=1;
        
    }
        
    //} while (isPalindrome === true);
    
    return;
    
}

function getMidPoint (stringLength) {
    // This returns the position of the midpoint of a string, based on the string length provided
    // For an odd length, it'll select the exact midpoint. For an even length it'll round down to
    // provide the nearest we can get to the midpoint. 
    
    var midPoint = 0;
 
    if (stringLength % 2 === 1) {
        midPoint = Math.round(stringLength / 2);
    } else {
        midPoint = Math.floor(stringLength / 2);
    }
    
    console.log('startPos inside getMidPoint: ' + midPoint);
    
    return(midPoint-1); // Return the midpoint minus 1, to allow for zero base of string numbering
}