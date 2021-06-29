// Event listener stuff
const submitBtn = document.getElementsByClassName('buttons');

// Adding the event listener for when we click the submit button something happens, preferably the data from the food file

submitBtn.addEventListener('click', getFood);


function getFood(){
    fetch('http://localhost:3000/foods')
    .then(r => r.json())
}
