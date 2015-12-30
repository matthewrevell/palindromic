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