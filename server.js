const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); // for parsing application/json

app.post('/', (req, res) => {
  req.accepts('json');
  console.log('body', req.body);
  res.send(req.body);
});

app.listen(8000);
