var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
users=[];
connections=[];
server.listen(80);

console.log('server is running...');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function (socket) {
	connections.push(socket);
	console.log('Connected: %s sockets connected', connections.length);

//Disconnect
  socket.on('disconnect', function (data) {
    connections.splice(connections.indexOf(socket), 1)
    console.log('Disconnected: %s sockets connected', connections.length)
  });
});


