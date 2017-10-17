const path = require('path')
const express = require('express')
const app = express()
const server = require('http').createServer(app)

app.use('/', express.static('target/wasm32-unknown-emscripten/release/'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.use('/sample', express.static('sample/'));
app.get('/sample', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'sample.html'))
});

server.listen(3000, () => {
  console.log('run server');
});
