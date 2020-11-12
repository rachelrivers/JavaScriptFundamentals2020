/**
 * This function should return an object with the property "hello".
 * "hello" should be a method (or function) that accepts a string "name" as an argument
 * and returns the string "Hello _____!"
 * @returns {Object}
 * @property {function} hello
 *     @param {string} name
 *     @returns {string} e.g. Hello Twinkle Toes!
 *
 * @example
 * const say = greeter();
 * const greeting = say.hello("Twinkle Toes");
 * console.log(greeting); // Hello Twinkle Toes!
 *
 * (This is technically not a closure. It is here to prepare you for the next problems.)
 */


const greeter = () => {
  return {
    hello: (name) => {
      return `Hello ${name}`;
    },
};
};


/**
 * As a programmer, I would like to be able to call on a function that returns an object that will allow me to
 * interact with an array.
 * The object will contain three methods that will allow the developer to interact with the array.
 *
 * 1. The first method on the object will accept an argument of type string.
 *    The method will add an element to the grocery list array.
 *
 *    @example
 *    const groceryListObj = groceryList();
 *    groceryListObj.add("apples");
 *    groceryListObj.add("bananas");
 *    groceryListObj.add("steak");
 *    // "groceryItems" should equal ["apples", "bananas", "steak"]
 *
 * 2. The second method on the object will accept an argument. The argument will be type `number`.
 *    Using the argument will remove the element from the array.
 *
 *    @example
 *    const groceryListObj = groceryList();
 *    groceryListObj.remove(2); // ["apples","steak"]
 *
 * 3. The third method will return list.
 *
 *    @example
 *    const groceryListObj =  groceryList();
 *    groceryListObj.getList() // ["apples","steak"];
 *
 * IMPORTANT! name the methods add,remove, and getList otherwise the tests will not work properly.
 */

const groceryList = () => {
  let groceryItems = [];
  return {
    add: (string) => {
      groceryItems.push(string);
      console.log(groceryItems); 
    },
    remove: (itemPostion) => {
      if {
        typeof itemPosition === "number" &&
        itemPosition < groceryItems.length
      } {
        groceryItems.splice(itemPosition, 1);
        return groceryItems;
      } else console.error["You are wrong!"];
    },
    getList: () => {
      return groceryItems;
    },
  };
};

let groceryItems= ["apples", "bananas", "steak"];

list.add("apples"); 
console.log(list.getList()); 


/**
 * Use closures to complete this exercise.
 * For those of you who are familiar with object-oriented programming, this exercise will use a similar pattern with "setters" and "getters".
 * @returns {Object} an object that has two methods. See comments below.
 */
const calculator = () => {

  /**
   * Create a private variable called "sum"
   * @var {number}
   */
   let sum = 0;   
   
   /**
   * Return an object that has two methods:
   *
   * 1. The first is a "setter" function that a.) accepts a parameter of type number and
   *    b.) adds that number to the "sum" above.
   * @param {number}
   **/
   return {
    setter: (num) => {
      let sum = 0;
      sum = num + sum;
      console.log(sum);  
    },
    getter: () => {
      console.log(sum);
      return sum;
    },
   }; 
  };

const calc = calculator();
calc.setter(5);
calc.setter(7);
calc.setter(10);
console.log(calc.getter()); 


  //  * 
  //  * 2. The second function is a "getter" function
  //  * that should return the value of "sum" above.
  //  * @returns {number} the value of sum
  //  */


/**
 * CHALLENGE!
 * Write a function called guessingGame which takes in one parameter amount.
 * The function should return another function that takes in a parameter called guess.
 * In the outer function, you should create a variable called answer which is
 * the result of a random integer between 0 and 10 as well as a variable called guesses which should be set to 0.
 *
 * In the inner function, if the guess passed in is the same as the random integer (defined in the outer function),
 * you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.
 *
 * You will have to make use of closure to solve this problem.
 *
 * @example (yours might not be like this, since the answer is random every time):
 *
 * let guessRound1 = guessingGame(5); // Allowing only 5 guesses
 * guessRound1(1); // "You're too low!"
 * guessRound1(8); // "You're too high!"
 * guessRound1(5); // "You're too low!"
 * guessRound1(7); // "You got it!"
 *
 * let guessRound2 = guessingGame(3); // Allowing only 3 guesses
 * guessRound2(5); // "You're too low!"
 * guessRound2(3); // "You're too low!"
 * guessRound2(1); // "No more guesses. The answer was 0"
 */

const guessingGame = (numberOfRounds) => {

};

let guessRound1 = guessingGame(5); 
guessRound1(1);
guessRound1(8);
guessRound1(5);
guessRound1(7);


// let guess = 0;
// const answer = Math.floor(Math.random() * 11);
// if (guess < answer) return "You're too low!";
// if (guess > answer) return "You're too high!";
// if (guess === answer) return "You got it!";




module.exports = {
  greeter,
  groceryList,
  calculator,
  guessingGame,
};
