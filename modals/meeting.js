const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MeetingSchema = new Schema({
  uid1: String,
  uname1: String,
  uid2: String,
  uname2: String,
  date: String,
  mid: String,
  mname: String
});

module.exports = mongoose.model('Meeting', MeetingSchema);