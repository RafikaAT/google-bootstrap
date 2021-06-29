const express = require('express')
const app = express();
const foodList = require('./FoodData.js');
const cors = require('cors');



const port = 3000;

app.listen(port, () => console.log(`Listening now from http://localhost:${port}`))

app.use(cors());

app.get('/', (req,res) => res.send('Hello Foods!'))

app.get('/foods' , (req, res) => res.send(foodList));

// const action = async () => {
//     const response = await fetch ('http://localhost3000/foods.json');
//     const myJson = await response.json();
// }

// function getAllFoods(){
//     fetch('http://localhost:3000/foods')
//     .then(r => r.json())
//     .then
}