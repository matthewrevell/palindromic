function findThreeLongestPalindromes(stringToCheck) {
    
    // Variable defintions
    var results = {};
    var allPalindromes = [];
    var stringLength = stringToCheck.length;
    var startPos = 0;
    
    // Define start point
    
    
    
    // Validate parameter
    if (typeof stringToCheck !== 'string') {
		return('Not a string');
	} else if (stringLength <= 0) {
        return('Empty string');    
    }
    
    console.log(stringToCheck);
    
    
    
    
    
    
    
    
    return results;
    
}

function getMidPoint (stringLength) {
    // This returns the position of the midpoint of a string, based on the string length provided
    // For an odd length, it'll select the exact midpoint. For an even length it'll round down to
    // provide the nearest we can get to the midpoint. 
    
    var startPos = 0;
 
    if (stringLength % 2 === 1) {
        startPos = Math.round(stringLength / 2);
    } else {
        startPos = Math.floor(stringLength / 2);
    }
    
    return(startPos);
}