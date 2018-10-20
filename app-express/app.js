var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
  
});

app.get('/ola', function (req, res) {
    var coisa = req.query.coisa;
    res.json([
        {nome : 'Bolsonaro'},
        {nome : 'Jair'},
        {nome : 'Retarddad'},
        {nome : 'Ze'},
        {nome : coisa}
    ]
        
    );
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});