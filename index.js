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
