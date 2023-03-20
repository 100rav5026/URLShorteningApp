var express = require('express');
const cors = require("cors");
var app = express();
const bodyParser = require("body-parser");

// For parsing application/json
app.use(cors());
app.use(express.json());
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(req.body);

    url = 'https://api.shrtco.de/v2/shorten?url=' + req.body.formData;

    axios.get(url)
    .then(response => {
      console.log(response.data.result.full_short_link);
      res.send(response.data.result);
    })
    .catch(error => {
      console.log(error);
    });
});

app.listen(process.env.PORT || 4000, () => {
  console.log('Server is running on port 8000.');
});
