//Create web server
//Create a web server that listens for requests on port 3000. When it receives a request, it should respond with the contents of the comments.json file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Internal Server Error');
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});