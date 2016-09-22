var express = require('express');
var search = require('./search');
var path = require('path');
var app = express();

app.set('json spaces', 4);

app.get('/search?*', function(req, res) {
    search.getResults(req.query, function(err, data) {
        if (err) throw err;
        res.json(data);
    });
});

app.get('/latest-searches', function(req, res) {
    search.getSearches(function(err, data) {
      if (err) throw err;
      res.json(data);
  });
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 8080, function () {
    console.log('Image search app is listening');
});