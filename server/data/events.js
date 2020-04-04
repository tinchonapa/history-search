var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventsSchema = new Schema ({
  "date": String, // mix of negative years then YYYY/MM/DD
  "description": String,
  "lang": String,
  "category1":  String,
  "category2": String,
  "granularity": String,

});

module.exports = mongoose.model('Events', EventsSchema);