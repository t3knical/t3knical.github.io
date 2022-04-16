const port = process.env.PORT || 3000
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const uuid = require('uuid');

const https = require('https')
const url = "https://checkip.amazonaws.com/";

let userIP = '';

https.get(url, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {    
    userIP = data;
    console.log(userIP);
  })
}).on('error', err => {
  console.log(err.message);
})

app.get("/", (req, res) => {
  res.send(`<h2>Hi There, What Are You Doing Here?</h2>`)
})

io.on("connection", (socket) => {
	socket.on("client-handshake", () => {
		console.log("Received client handshake");
		
		socket.emit("server-handshake");
		console.log("Sent server handshake");
	});
});

http.listen(port, () => console.log(`listening on port ${port}`));