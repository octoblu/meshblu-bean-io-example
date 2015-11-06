var five = require("johnny-five");
var beanio = require("bean-io");
var boardIO = new beanio.Board({
  //    name: "ZAPP" // optional: you can specify a localName otherwise defaults to nearby bean
});

var meshblu = require('meshblu');
var meshbluJSON = require('./meshblu.json');

var uuid    = meshbluJSON.uuid;
var token   = meshbluJSON.token;

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


  var board = new five.Board({
    io: boardIO
  });


  board.on("ready", function() {
    console.log("Bean Ready...");

    var button = new five.Button(12);

    // "down" the button is pressed
    button.on("down", function() {
      console.log("down");
      conn.message({
        "devices": "*",
        "payload": {
          "button":"down"
        }
      });
    });

    // "hold" the button is pressed for specified time.
    //        defaults to 500ms (1/2 second)
    //        set
    button.on("hold", function() {
      console.log("hold");
      conn.message({
        "devices": "*",
        "payload": {
          "button":"hold"
        }
      });

    });

    // "up" the button is released
    button.on("up", function() {
      console.log("up");
      conn.message({
        "devices": "*",
        "payload": {
          "button":"up"
        }
      });
    });

  });

});
