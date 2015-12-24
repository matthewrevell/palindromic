function findPalindromesInString(stringToCheck) {

    var stringLength = stringToCheck.length;
    var stringLengthEven = stringLength % 2 === 0 ? true : false;
    var startPos = getMidPoint(stringLength);
    var startPosRight = startPos;
    var palindromeIndex = [];
    var isPalindrome;
    var offset = 1;

    // Validate parameter
    if (typeof stringToCheck !== 'string') {
		return('Not a string');
	} else if (stringLength <= 0) {
        return('Empty string');    
    } else if (stringLength === 1) {
        return('String must be longer than one character');
    }
    
    console.log('type: ' + typeof stringToCheck);
    console.log('stringToCheck: ' + stringToCheck);
    console.log('startPos: ' + startPos);
    console.log('starting character: ' + stringToCheck.charAt(startPos));
    
    // Loop through the string to the left
    
    while (startPos > 0) {

        // How we approach the first iteration differs depending on whether the 
        // palindrome is even or odd numbered. But we don't know whether it
        // is even or odd, so we hae to check and then act accordingly.
        if (stringToCheck.charAt(startPos-offset) === stringToCheck.charAt(startPos+offset)) {
            isPalindrome = true;
            console.log('true');
            palindromeIndex[startPos] = 3;
        } else if (stringToCheck.charAt(startPos) === stringToCheck.charAt(startPos+offset)) {
            isPalindrome = true;
            console.log('true');
            palindromeIndex[startPos] = 2;
        } else {
            isPalindrome = false;
            console.log('false');
        }    
        
        while (startPos - offset >= 0 && isPalindrome === true) {
            console.log('offset: ' + offset);
            console.log('current char: ' + stringToCheck.charAt(startPos - offset));
            console.log('palindrome  thus far: ' + stringToCheck.slice(startPos-offset,startPos+offset+1));
        
            if (isPalindrome === true) {
                palindromeIndex[startPos] = offset;
                console.log('palindromeIndex[' + startPos + ']: ' + palindromeIndex[startPos]);
                
                offset += 1;
                isPalindrome = true;
            } else {
                isPalindrome = false;
            
            }
            
            
        }
        startPos -= 1;         
    }
    
    while (startPosRight < stringLength) {

        // How we approach the first iteration differs depending on whether the 
        // palindrome is even or odd numbered. But we don't know whether it
        // is even or odd, so we hae to check and then act accordingly.
        if (stringToCheck.charAt(startPosRight-offset) === stringToCheck.charAt(startPosRight+offset)) {
            isPalindrome = true;
            console.log('true');
            palindromeIndex[startPosRight] = 3;
        } else if (stringToCheck.charAt(startPosRight) === stringToCheck.charAt(startPosRight+offset)) {
            isPalindrome = true;
            console.log('true');
            palindromeIndex[startPosRight] = 2;
        } else {
            isPalindrome = false;
            console.log('false');
        }    
        
        while (startPosRight + offset <= stringLength && isPalindrome === true) {
            console.log('offset: ' + offset);
            console.log('current char: ' + stringToCheck.charAt(startPosRight + offset));
            console.log('palindrome  thus far: ' + stringToCheck.slice(startPosRight+offset,startPosRight-offset+1));
        
            if (isPalindrome === true) {
                palindromeIndex[startPosRight] = offset;
                console.log('palindromeIndex[' + startPosRight + ']: ' + palindromeIndex[startPosRight]);
                
                offset += 1;
                isPalindrome = true;
            } else {
                isPalindrome = false;
            
            }
            
            
        }
        startPosRight += 1;         
    }
    
    for (p in palindromeIndex) {
               console.log(p);
           }
     /*   while (isPalindrome === true) {
            if (stringToCheck.charAt(startPos-offset) === stringToCheck.charAt(startPos+offset)) {
                palindromeIndex[startPos] = offset;
                console.log('palindromeIndex[' + startPos + ']: ' + palindromeIndex[startPos]);
            } else {
                isPalindrome = false;
            }
        }
        
    }*/
}

function getMidPoint (stringLength) {
    // This returns the position of the midpoint of a string, based on the string length provided
    // For an odd length, it'll select the exact midpoint. For an even length it'll round down to
    // provide the nearest we can get to the midpoint.      
    var midPoint = 0;
 
    if (stringLength % 2 === 1 && stringLength > 2) {
        midPoint = Math.round(stringLength / 2);
    } else  if (stringLength % 2 === 0 && stringLength > 2) {
        midPoint = Math.floor(stringLength / 2);
    } 
    
    return(midPoint-1); // Return the midpoint minus 1, to allow for zero base of string numbering
}