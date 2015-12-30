function findPalindromesInString(stringToCheck) {
    
    //var stringLength = stringToCheck.length;
    var separatedString = prepareString(stringToCheck);
    var stringLength = separatedString.length;
    var positionArray = Array(stringLength).fill(0);
    var positionArrayAsString = '';
    var offset;
    
    //var centre = stringLength / 2;
    var current = 1;
    var i;
    
    
    console.log('string: ' + stringToCheck);
    console.log('stringLength: ' + stringLength);
    //console.log('midPoint: ' + midPoint);    
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
    
    //var sortedPositions = positionsArray.sort();
    var palindromes = [];    
    var palindromeStart = 0;
    var palindromeEnd = 0;
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

    return palindromes;
}

function prepareString(stringToPrepare) {
    // Takes a string and returns it with a comma at every even position. 
    // Achieves this by turning the string into an array of chars and then back
    // into a string. This splices commas between each character.
    // We need to manually add a comma to the start and end of the string.
 
    var arrayOfChars = stringToPrepare.split('');
    var stringWithCommas = ',' + arrayOfChars.toString() + ',';
    //console.log(stringWithCommas);  
    
    return stringWithCommas;   
}
    
function sortNumber(a,b) {
    // Supplement array.sort with a numeric sort
    return a - b;
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