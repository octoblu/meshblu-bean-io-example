var five = require("johnny-five");
var beanio = require("bean-io");
var boardIO = new beanio.Board({
  //    name: "ZAPP" // optional: you can specify a localName otherwise defaults to nearby bean
});

var meshblu = require('meshblu');

var uuid    = "";
var token   = "";

var conn = meshblu.createConnection({
  "uuid": uuid,
  "token": token
});

conn.on('notReady', function(data){
  console.log('UUID FAILED AUTHENTICATION!');
  console.log(data);
});

conn.on('ready', function(data){
  console.log('UUID AUTHENTICATED!');
  console.log(data);

  var accelVal, tempVal;


  var board = new five.Board({
    io: boardIO
  });


  board.on("ready", function() {
    console.log("Bean Ready...");

    boardIO.connectedBean.on("accell", function(x, y, z, valid){
      accelVal = {"x": x, "y": y, "z": z};
      conn.message({
        "devices": "*",
        "payload": {
          "accell": accelVal
        }
      });
    });

    boardIO.connectedBean.on("temp", function(temp, valid){
      tempVal = temp;
      conn.message({
        "devices": "*",
        "payload": {
          "temp":   tempValc
        }
      });
    });

    setInterval(function(){
      boardIO.connectedBean.requestAccell();
      boardIO.connectedBean.requestTemp();
    }, 1000);

  });

});
