let text = "  Hello World! This is a TEST string. It has 123 numbers and some extra spaces.  ";

// Trim method
// Trim method removes the extra spaces from the beginning and end of the string.
const trimSpaces = text.trim()
console.log("Remove spaces before and after:", trimSpaces)

//lowerCase method
// lowerCase method changes all the characters in the string to lowercase.

const lowerCase = text.toLowerCase()
console.log("Change all to lowercase:", lowerCase)

//replace method
// replace method replaces the first occurrence of a string with another string.

const replace = text.replace("TEST", "practice")
console.log("Replace TEST with practice:", replace)

//split method
// split method splits the string into an array of substrings.

const countS = text.split("s").length - 1
console.log("Count of s in the string:", countS)

//endsWith method
// endsWith method is used to check if the string ends with a specific substring.

const endsWith = text.endsWith(".")
console.log("String ends with a period:", endsWith)

//indexOf method
// indexOf method returns the index of the first occurrence of a substring in a string.

const worldPosition = text.indexOf(`World`)
console.log("World is at position:", worldPosition)

//split method
// split method splits the string into an array of substrings.

const split = text.split(" ")
console.log("Split the string into an array of words:", split)

//replace method
// replace method replaces all occurrences of a string with another string.

const replaceNumbers = text.replace(/\d/g, "")
console.log("Replace numbers with empty string:", replaceNumbers)

//capitalize method
// capitalize method capitalizes the first character of a string.

const capitalizeFirstLetter = text.charAt(0).toUpperCase() + text.slice(1)
console.log("Capitalize the first character:", capitalizeFirstLetter)

//includes method
// includes method checks if a string contains a specific substring.

const helloReg = /hello/i
const includes = helloReg.test(text)
console.log("String includes hello:", includes)



