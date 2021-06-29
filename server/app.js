const express = require('express')
const app = express();
const foodList = require('./FoodData.js');
const cors = require('cors');



const port = 3000;

app.listen(port, () => console.log(`Listening now from http://localhost:${port}`))

app.use(cors());

app.get('/', (req,res) => res.send('Hello Foods!'))

app.get('/foods' , (req, res) => res.send(foodList));