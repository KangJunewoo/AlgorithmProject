//Code for connecting MongoDB
var mongoose = require('mongoose');


function connectDB() {
  var mongoURI = 'mongodb://localhost:27017/unibus';
  
  mongoose.connect(mongoURI, function (err) {
    if (err) {
      console.error('DBERROR', err);
    } else {
      console.log('UNIBUS mongodb connected');
    }
  });

}
module.exports = connectDB;
