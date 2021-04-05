const express = require('express');
const app = express();
const port = 8000;

app.get('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(JSON.stringify({code: "function test() {console.log('Hola Amigo, Ciao Amico!')}"}))
});

app.listen(port)
