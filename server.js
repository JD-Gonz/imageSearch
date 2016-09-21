var express = require('express');
var search = require('./search');
var app = express();

app.set('json spaces', 4);

app.get('/', function(req, res) {
    //get the request params
    //save query to query queue and do the acutal query
    //return json
    res.json(search.getResults());
});

app.listen(process.env.PORT || 8080, function () {
  console.log('URL shortener app is listening');
});