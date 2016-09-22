var moment = require('moment');
var mongodb = require('mongodb');
var Search = require('bing.search');
var MongoClient = mongodb.MongoClient;

var url = process.env.URLS_DB;
var search = new Search(process.env.MSFT_KEY);


module.exports = {
  getResults: function(params, cb) {
    getConnection(function(err, collection) {
      if (err) throw err;
      collection.insert({"term": params.s, "when": moment().format()});
    });
    search.images(params.s, {top: 10, skip: params.q},
      function(err, results) {
        if (err) throw err;
        cb(null, results);
      }
    );
  },
  
  getSearches: function(cb) {
    getConnection(function(err, collection) {
      if (err) throw err;
      collection.find({}, {fields:{_id: 0}, limit:10, sort:{when:-1}}, 
      function (err, cursor) {
        if (err) throw err;
        cursor.toArray(cb);
      });
    });
  }
};

function getConnection(cb) {  
    MongoClient.connect(url, function (err, db) {
      if (err) console.log('Unable to connect to server. Error:', err);
      var collection = db.collection('searches');
      cb(null, collection);
    });
}