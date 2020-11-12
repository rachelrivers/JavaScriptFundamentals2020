(function randomDogPicture() {
  const button = document.querySelector('#dogButton');
  const image = document.querySelector('#dogImage'); 
  image.src = 'https://images.dog.ceo/breeds/springer-english/n02102040_4644.jpg';
  // console.log(button);
  /**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use fetch in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
   */
 fetch('https://dog.ceo/api/breeds/image/random', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json", 
    },
  })
  .then(response => {
    console.log(response);
    response.json();
  })
  .then((response => {
  image.src = response.message;
  });

  button.addEventListener('click', randomDogPicture); 

})();
