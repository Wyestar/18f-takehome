const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('testing server');
});

app.get('/api/all', async (req, res) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.json(data);
});

app.listen(4000, () =>
  console.log('Express server is running on localhost:4000')
);