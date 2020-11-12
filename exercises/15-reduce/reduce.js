/**
 * Given an array of numbers, return the sum
 * @param {array} arr an array of numbers, e.g. `[1, 2, 3]`
 * @returns sum
 * @example
 *  addItems([1,5,6]) // 12
 *  addItems([1,-2,-3]) // -4
 */
const addItems = (arr) => {
  let sum = 0;
  let numbers = [];
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
} return sum;
};

/**
 * Create a function that flattens an array (that is, it should "unnest" a nested array).
 * @param {array} array e.g. `[[1, 3], [5, 10]]`
 * @returns {array} new, flattened array e.g. `[1, 3, 5, 10]`
 */
const flattenArray = (array) => {
  let flattenedArray = array.reduce( (total, amount) => {
   return [...total, ...amount];
  }, []);
  return flattenedArray; 
};

/**
 * Create a function that tallies the number of each kind of "thing" within the array
 * @param {array} array e.g. `['Apple', 'Orange', 'Apple', 'Blueberry']`
 * @returns {object} where the thing name is the key and the tally is the value
 * @example
 *   let fruits = ['Apple', 'Orange', 'Apple', 'Blueberry', 'Grape', 'Grape'];
 *   generateTally(generateTally); // {Apple: 2, Orange: 1, Blueberry: 1, Grape: 2}
 */

const generateTally = (array) => {
let tally = array.reduce((acc, value) => {
  if (acc[value]) {
  acc[value] = 1;
} else {
  acc[value] =1;
}
  return acc;
}, {});
console.log(tally); 
return tally;
};  

// const generateTally = (array) => {
// let tally = array.reduce((acc, value) => { 
//   acc[value] = acc[value] ? acc[value] + 1 : 1; 
//   return acc;
// }, {}); 
// }

/**
 * Create a function, that when given an array of object literals, will index the object literals by a single column
 * (in this case, the ID). The function should return an object where the ID is the key and value is the the
 * object literal.
 *
 * @param {array} arr an array of nested objects, where each object as a key called "ID"
 * @returns {object} an object where the key is the ID and the value is the entire nested object
 * @example
 *
 * let people = [
 *  {id: 123, name: 'Dave', age: 23},
 *  {id, 456, name: 'Rachel', age: 35}
 * ];
 *
 * let result =  arrayToObject();
 *
 * // result should be:
 * {
 *   123: {id: 123, name: 'Dave', age: 23},
 *   456: {id, 456, name: 'Rachel', age: 35}
 * }
 */
const arrayToObject = (arr) => {
return arr.reduce( (acc, item) => {
  return{ 
    ...acc, 
    [item.id]:item, 
  }; 
}, {}); 
};

module.exports = {
  addItems,
  flattenArray,
  generateTally,
  arrayToObject,
};
