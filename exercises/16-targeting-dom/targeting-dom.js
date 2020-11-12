/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 * 
 * @example console.log( document.querySelector("#myTarget") );
 * 
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 * 
 * Do not change the HTML unless you are instructed to do so.
 */




//  console.log(whatever you changes ex: button); 


//Single Elements
const firstLi = document.querySelector("li");
console.log(firstLi);

const myId = document.querySelector("#myId");
console.log(myId);

//Group of Elements
const allLi = document.querySelectorAll("li");
console.log(allLi);

const bgWarning = document.querySelectorAll("bg-warning"); 
console.log(bgWarning);

//Nested Elements
const nestedElements = document.querySelectorAll(".bg-success > div.col");
console.log(nestedElements); 

//Using data attributes
const tarButton= document.querySelector("[btn-success]");
console.log(tarButton);

const modifyText = document.querySelector("alert > alert-success");
modifyText.textContent = "Changing the text";
