const http = require('http');
const { addListener } = require('process');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page');
  } else if (req.url === '/about') {
    res.end('About');
  } else {
    res.end(`<h1>OOps!</h1>
  <a href='/'>back to Home</a>  
  `);
  }
});

server.listen(5000);
