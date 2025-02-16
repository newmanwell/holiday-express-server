const holidays = require('./holidays');

const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Holliday Stuff and Fun!');
})

app.get('/holidays/random', (req, res) => {
  const randNumber = () => {
    const random = Math.floor(Math.random() * holidays.length);
    return random;
  }
  const number = randNumber();

  res.send(holidays[number]);
})

app.get('/holidays', (req, res) => {
  res.send(holidays);
})

app.get('/holidays/:id', (req, res) => {
  const { id } = req.params;
   
  const holidayId = holidays.find((oneHoliday) => {
    return oneHoliday.id === Number(id);
  })
  res.send(holidayId);
})


app.listen(port, () => {
  console.log(`Listening on ${port}`);
})