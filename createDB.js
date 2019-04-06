var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/serial', {useNewUrlParser: true});
var async = require('async')
var Serials = require('./models/spisok_serial').Serials;
// очистим бд
// вставим три героя
// закроем соединение с бд

function open(callback){
  mongoose.connection.on('open', callback)
}

function dropDB(callback){
  var db = mongoose.connection.db
  db.dropDatabase(callback)}

function insertSerials(callback){
    async.parallel([
      function(callback){
        var pig = new Serials({
          nick: "Char"
        })
        Char.save(function(err,Char){
          callback(err, "Char")
        })
      },
      function(callback){
        var vinni = new Serials({
          nick: "Sverh"
        })
        vinni.save(function(err,Sverh){
          callback(err,"Sverh")
        })
      },
      function(callback){
        var sova =new Serials({
          nick: "Mer"
        })
        sova.save(function(err,Mer){
          callback(err,"Mer")
        })
      },
	        function(callback){
        var vinni = new Serials({
          nick: "USA"
        })
        vinni.save(function(err,USA){
          callback(err,"USA")
        })
      },
	        function(callback){
        var vinni = new Serials({
          nick: "Bo"
        })
        vinni.save(function(err,Bo){
          callback(err,"Bo")
        })
      }
    ],
    function(err,result){
      callback(err)
    })
  }
  function close(callback){
    mongoose.disconnect(callback)
  }

  async.series([
    open,
    dropDB,
    insertSerials,
    close
  ],
function(err,result){
  if(err) throw err
  console.log("OK!!!")
}
)