var five = require("johnny-five");
var beanio = require("bean-io");
var boardIO = new beanio.Board({
  //   name: "ZAPP" // optional: you can specify a localName otherwise defaults to nearby bean
});

var meshblu = require('meshblu');
var meshbluJSON = require('./meshblu.json');

var uuid    = meshbluJSON.uuid;
var token   = meshbluJSON.token;

var conn = meshblu.createConnection({
  "uuid": uuid,
  "token": token
});

var MESSAGE_SCHEMA = {
  "type": 'object',
  "properties": {
    "red": {
      "type": "string",
      "default": "0"
    },
    "blue": {
      "type": "string",
      "default": "0"
    },
    "green": {
      "type": "string",
      "default": "0"
    }
  }
};

conn.on('notReady', function(data){
  console.log('UUID FAILED AUTHENTICATION!');
  console.log(data);
});

conn.on('ready', function(data){
  console.log('UUID AUTHENTICATED!');
  console.log(data);

  conn.update({
    "uuid": uuid,
    "messageSchema": MESSAGE_SCHEMA
  });


  var board = new five.Board({
    io: boardIO
  });


  board.on("ready", function() {
    console.log("Bean Ready...");

    conn.on('message', function(data){

      payload = data.payload;

      boardIO.connectedBean.setColor(new Buffer([payload.red, payload.green, payload.blue]), function(err){
        console.log('set color on', err);
      });

    });

  });

});
