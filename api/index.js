const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(express.static('public'));
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World 8');
});

app.get('/api/all', async (req, res) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log('test res: ', data)
    res.json(data);
});

// app.get('/api/test', (req, res) => {
//     res.send('hit server')
// });

// app.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   console.log('req: ', req.query.name);
//   res.setHeader('Content-Type', 'application/json');
//   res.send('submitted name = ' + name);
// });

app.listen(4000, () =>
  console.log('Express server is running on localhost:3001')
);