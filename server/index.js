const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose')
const Events = require('./data/events');

// db connection port
mongoose.connect('mongodb://localhost:27017/histEvents', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('db connected');
});

app.use(express.json());
//load static file (index.html)
app.use(express.static(__dirname + '/../client/public'));

app.get('/events', function (req, res) {
    Events.find({}, function (err, docs){
      res.json(docs);
    });
    // res.send('Hello World');
});

app.listen(port, () => console.log(`Running on port ${port}`))