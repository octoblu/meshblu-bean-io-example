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

    var sensor = new five.Sensor("A0");

    // When the sensor value changes, send the value
    sensor.on("change", function() {
      console.log(this.value);
      var value = this.value;
      conn.message({
        "devices": "*",
        "payload": {
          "analogSensor": value
        }
      });
    });
  });

});
