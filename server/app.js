var express = require('express');
var app = express();
const PORT = 4000;

// For parsing application/json
app.use(express.json());
const axios = require('axios');

app.post('/postRequest', (req, res) => {
    console.log(req.body.url)

    url = 'https://api.shrtco.de/v2/shorten?url=' + req.body.url;

    axios.get(url)
    .then(response => {
      console.log(response.data.result.full_short_link);
      res.send(response.data.result);
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(
    PORT,
    () => console.log(`server is running on ${PORT}`)
);