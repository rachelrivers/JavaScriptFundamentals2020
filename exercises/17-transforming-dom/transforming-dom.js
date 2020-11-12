/**
 * You will follow the instructions in the exercises/17-transforming-dom/transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */

(function () { 

 //Set the <div> so that it is equal to "alert"

const setRoleAlert = document.getElementById("alert-danger"); 

// element.setAttribute("alert-danger", "Alert"); 

console.log("alert-danger"); 


//Change the Link 

const changeLink = document.querySelector("#change-link"); 
changeLink.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";

//Change the Text

let newText = document.querySelector("#victory"); 
newText.textContent = "I am victorious!";

//Change the Background

const changeBackground = document.querySelector("#bgColor"); 
bgColor.style.backgroundColor = "purple"; 


//Change the Text Color
const changeTextColor = document.querySelector("#changeColor");
changeTextColor.classList.add("text-info");



//Hide this <div> 
const hideThisDiv = document.querySelector("#hideThis");
hideThisDiv.style.display = "none";


//Show the hidden <div> 
const showHidden = document.querySelector(".hidden");
showHidden.classList.remove("hidden");


//If Statement/ Change the Button Div 

(function() {
  const conditionalOutput = document.querySelector('#conditionalOutput');
  console.log(conditionalOutput); 

  const myButton = document.querySelector("#myButton");
  console.log(myButton); 

  if (myButton.matches('.btn-primary')) {
    console.log("✓ blue"); 
    document.querySelector(".is-blue").textContent = "✓ blue"; 
  }
})();

})();
