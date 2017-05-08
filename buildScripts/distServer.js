import express from 'express';
import path from 'path';
import opn from 'opn';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(express.static('dist'));
app.use(compression());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.htm'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    opn('http://localhost:' + port, { app: 'chrome' });
  }
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});
