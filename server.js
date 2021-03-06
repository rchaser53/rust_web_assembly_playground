const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)

app.use('/', express.static('wasm'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
});

server.listen(3000, () => {
  console.log('run server');
});
