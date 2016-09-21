var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = "mongodb://urlUser:password1@ds044229.mlab.com:44229/urls"; //process.env.URLS_DB;

module.exports = {
  getResults: function () {
    
  }
  
  // getUrl: function (link, cb) {
  //   getConnection(function(err, collection) {
  //     if (err) throw err;
  //     collection.find({shortUrl : link}, function (err, cursor) {
  //       if (err) throw err;
  //       cursor.toArray(cb);
  //     });
  //   });
  // }
};

function getConnection(cb) {  
    MongoClient.connect(url, function (err, db) {
      if (err) console.log('Unable to connect to server. Error:', err);
      var collection = db.collection('searches');
      cb(null, collection);
    });
}    