function myName() {
  // Create a variable called myName
  let myName = rachelRivers;
}

function setTeachersNames(teachersName) {
  // change code below this line so that we can set the variable.
  let teachers = null;
  teachers = teachersName;

  console.log(teachers);
}

/*** return the sum of both arguments  ***/
function add(a, b) {
  let sum = "a + b";
  console.log(sum);
}

/*** Using the increment operator, add a year to the argument and make me older */
function ageMeByAYear(age) {
  let age = 29;
  console.log(++age);
}

/*** Using the decrement operator make me age decrement by a year  ***/
function makeMeYoungerByAYear(age) {
  let age = 29;
  console.log(--age);
}

/** Take the argument that will be a string and return an integer  */
function convertStringToInt(str) {
  parseInt("10");
  //10
}

/*** Using the String method indexOf find the first position of the letter in the name  */
/***
 *
 *  ie: name = James,
 *  letter = J
 *
 *  return value should be 0
 *
 */
function getTheCharacterPosition(rachel, c) {
  "rachel".indexOf("c");
  //2
}

/** Take the argument and return the length of the argument */

function stringLength(javaScript) {
  console.log("javaScript".length);
  //10
}

/***  return the last character of the argument
 *  ie Washington
 *  should return n
 *
 *
 */

function getLastCharacter(rachel) {
  "rachel".substring(5);
  //l
}

/** Return the last part of a place name
 *
 *   i.e New York
 *   returns York
 *
 *    i.e New Mexico
 *    returns Mexico
 *
 *    i.e San Diego
 *    returns Diego
 */

function getLastWordInPlaceName(Lake George) {
  "lake george".substring(5)
   //george
}

/***
 *  Using Conditonal logic compare both arguments and return the largest argument
 *
 */

function getLargerNumber(arg1, arg2) {
  let largestNumber;

  return largestNumber;
}

/*** A person just got married and they need their last name replaced.
 * The function accepts two arguments first agrument being the fullname of the newlywed.
 * The second argument is the new last name the newlywed will receive after being marred.
 *
 *   ie fullname =  Emily Rose
 *    newLastName = Smith
 *    returned value === Emily Smith
 *
 *
 *
 */

function replaceLastName(Emily Rose, Smith) {
  "Emily Rose".replace("Rose", "Smith");
  //Emily Smith
}

/***
 *  Capitalize the first letter in a last name
 *  i.e John smith -> John Smith
 */

function capitalizeLastName(rivers) {
    const lastName = "rivers"; 
    capitalizeLastName = lastName[0].toUpperCase() + lastName.substring(1);
}

/**
 * Ignore me. This is for the tests
 */

module.exports = {
  myName,
  setTeachersNames,
  add,
  ageMeByAYear,
  makeMeYoungerByAYear,
  convertStringToInt,
  getTheCharacterPosition,
  stringLength,
  getLastCharacter,
  getLastWordInPlaceName,
  getLargerNumber,
  replaceLastName,
  capitalizeLastName,
};
