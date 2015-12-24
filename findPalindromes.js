function findPalindromesInString(stringToCheck) {
    
    var stringLength = stringToCheck.length;
    var midPoint = getMidPoint(stringLength);
    var separatedString = prepareString(stringToCheck);
    
    console.log('string: ' + stringToCheck);
    console.log('stringLength: ' + stringLength);
    console.log('midPoint: ' + midPoint);       
}

function prepareString(stringToPrepare) {
    // Takes a string and returns it with a comma at every even position. 
    // Achieves this by turning the string into an array of chars and then back
    // into a string. This splices commas between each character.
    // We need to manually add a comma to the start and end of the string.
 
    var arrayOfChars = stringToPrepare.split('');
    var stringWithCommas = ',' + arrayOfChars.toString() + ',';
    console.log(stringWithCommas);  
    
    return stringWithCommas;   
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