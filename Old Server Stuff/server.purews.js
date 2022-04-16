var WebSocketServer = require('ws').Server;
var Player = require('./Classes/Player.js');

const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function connection(ws) {
  var player = new Player();
  var currentPlayerID = player.id
  
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
  ws.send(`'register', {"id": "${currentPlayerID}"}`);
});