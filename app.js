const express = require('express');
const app = express();
const router = require('./routes/route');
const dbconnect = require('./db/db');
require('dotenv').config();
const cust = require('./custom404'); 
const port = process.env.PORT;

app.use(express.json());
app.use(express.static('public'));

app.use('/api/tickets', router);

app.use((req, res) => {
  res.status(404).type('html').send(cust); 
});

const start = async () => {
  try {
    await dbconnect(process.env.DB_URI);
    app.listen(port, () => {
      console.log(`Server is running...`);
    });
  } catch (error) {
    console.log(error)
  }
};

start();