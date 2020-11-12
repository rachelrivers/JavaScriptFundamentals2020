(function () { 

  const clickButton = document.querySelector("#mybutton");
  let handleClick = () => {
    alert("Yay doggos!");
  };
  clickButton.addEventListener("click", handleClick);

  const subButton = document.querySelector("#subButton");
  let subClick = () => {
    subButton.disabled = 'disabled';
    subButton.textContent = 'Loading ...';
  };

  subButton.addEventListener("click", subClick);


})();


