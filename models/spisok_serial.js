var mongoose = require('mongoose');
var spisok_serialShema = mongoose.Schema({
  title: String,
  nick: {
    type: String,
    unique: true,
    required: true
  },
  avatar: String,
  desc: String,
  created:{
    type: Date,
    default: Date.now()
  }
})

module.exports.Serials = mongoose.model("Serials", spisok_serialShema)