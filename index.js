// String Methods
// 1.	The length property returns the length of a string:                                  let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// txt.length     // Returns 26                                                  Extracting String Parts                      
//  There are 3 methods for extracting a part of a string: slice(start, end)                                     substring(start, end)                                  substr(start, length)
// 2.	slice() extracts a part of a string and returns the extracted part in a new string.                                                                                             The method takes 2 parameters: the start position, and the end position (end not included).                                                              This example slices out a portion of a string from position 7 to position 12 (13-1):                                                                                                                                 let str = "Apple, Banana, Kiwi";
// str.slice(-12, -6)    // Returns Banana
// 3.	substring() is similar to slice().                                                      The difference is that substring() cannot accept negative indexes let str = "Apple, Banana, Kiwi";
// substring(7, 13)    // Returns Banana
// 4.	substr() is similar to slice().                                                                                     The difference is that the second parameter specifies the length of the extracted part.                                                                                                       let str = "Apple, Banana, Kiwi";
// str.substr(7, 6)    // Returns Banana  
// 5.	The replace() method replaces a specified value with another value in a string:                                                                                                    let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");                                       The replace() method does not change the string it is called on. It returns a new string.  
// 6.	A string is converted to upper case with toUpperCase():                                         
// let text1 = "Hello World!";
 // String
// let text2 = text1.toUpperCase();  // text2 is text1 converted to upper
// 7.	A string is converted to lower case with toLowerCase():                                           let text1 = "Hello World!";       // String
// let text2 = text1.toLowerCase();  // text2 is text1 converted to lower   
// 8.	The trim() method removes whitespace from both sides of a string:                             let text = "       Hello World!        ";
// text.trim()    // Returns "Hello World!"                                                                                      
// #String methods
// length => property returns the length of a string:

// slice(start,end) => extracts a part of a string and returns the extracted part in a new string.

// substring(start,end) => substring() is similar to slice(), The difference is that substring() cannot accept negative indexes.
// substr(start,length) => substr()is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
// Replace => The replace()method replaces a specified value with another value in a string: ! The replace()method does not change the string it is called on. It returns a new string.
// lowerCase =>  
// upperCase => 
// concat() => joins two or more strings:
// trim => Thetrim()method removes whitespace from both sides of a string:
// padStart => text.padStart(4,0) // Returns 0005,text.padEnd(4,0) // Returns 5000
// padEnd =>
// charAt => The charAt() method returns the character at a specified index (position) in a string:
// split =>A string can be converted to an array with the split() method:
// indexOf => indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
// Both indexOf(), and lastIndexOf() return -1 if the text is not found:
// search => search() method searches a string for a specified value and returns the position of the match:
//     • The search() method cannot take a second start position argument.
//     • The indexOf() method cannot take powerful search values (regular expressions).

// Match => match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.


// Includes => includes() method returns true if a string contains a specified value.
// StartsWith => The startsWith() method returns true if a string begins with a specified value, otherwise false:
// endsWith => endsWith() method returns true if a string ends with a specified value, otherwise false: