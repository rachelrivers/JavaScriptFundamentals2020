/***
 * Change below so that it will also compare data types
 *
 *
 */
function compareEquality(a, b) {
  if ("a" === b) {
   return "Equal"
  } else {
    return "Not Equal"
 };

/** The function should use the strict inequality operator
 *   3 !== 3; // false
 *   3 !== '3'; // true
 *   4 !== 3; // true
 * ```javascript
 * testStrictNotEqual(17, 17) // should return "Equal"
 * testStrictNotEqual("17", 17) // should return "Not Equal"
 * testStrictNotEqual(12, "bob") // should return "Not Equal"
 * ```
 *
 */

function testStrictNotEqual(a, b) {
  // Only Change Code Below this Line
  if (a === b) {
    return "Equal"
  } else {
    return "Not Equal"; 
  };

/***
 *  Refactor the code down below to use the logical && operator.
 *  This should return "Yes" when it is 6, 7, 8 and 9.
 *  ```javascript
 *  testLogicalAnd(9); // should return "Yes"
 *  testLogicalAnd(6); // should return "Yes"
 *  testLogicalAnd(10); // should return "No"
 *  testLogicalAnd(5); // should return "No"
 *  ```
 *  You must use the && operator to complete the problem.
 */

function testLogicalAnd(num) {
  // code here
  if (num <= 6 && num <= 9) {
    return "Yes";
  } else if (num === 10) {
    return "No";
  }
  return "No";
}

/**
 * Refactor the code down below to use the logical || operator
 * ```javascript
 * testLogicalOr(0) // should return No
 * testLogicalOr(20) // should return Yes
 * testLogicalOr(25) // should return Yes
 * ````
 */

function testLogicalOr(num) {
  if (num || num) {
    return "Yes"; 
  } else return "No"
    }
  }


/** Using the modulus operator determine if the argument is an even or odd number */

function isEvenOrOdd(isEven) {
if (isEven % 2 === 0) {
  return "is even";
} if (isEven % 2 !== 0) {
  return "is odd";
}
}

/****
 *  You are given a variable num:
 *  Your task is to print:
- ONE, if num is equal to  1.
- TWO, if num is equal to  2.
- THREE,if num is equal to 3.
- FOUR, if num is equal to 4.
- FIVE, if num is equal to 5.
- SIX,  if num is equal to 6.
- SEVEN,if num is equal to 7.
- EIGHT,if num is equal to 8.
- NINE, if num is equal to 9.
 * 
 * PLEASE TRY AGAIN, if  is none of the above
 * 
 *  *****/

function caseInSwitch(num) {
  switch(num){
    case 1: console.log("ONE");
    break;
    case 2: console.log("TWO");
    break;
    case 3: console.log("THREE");
    break;
    case 4: console.log("FOUR");
    break;
    case 5: console.log("FIVE");
    break;
    case 6: console.log("SIX");
    break;
    case 7: console.log("SEVEN");
    break;
    case 8: console.log("EIGHT");
    break;
    case 9: console.log("NINE");
    break;
    default: 
    console.log("PLEASE TRY AGAIN"); 
  }

}

module.exports = {
  isEvenOrOdd,
  compareEquality,
  testStrictNotEqual,
  testLogicalAnd,
  testLogicalOr,
  caseInSwitch,
};
