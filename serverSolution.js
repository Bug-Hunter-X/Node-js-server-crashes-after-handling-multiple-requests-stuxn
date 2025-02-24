const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');

  request.on('error', (err) => {
    console.error('Request error:', err);
  });

  response.on('finish', () => {
    console.log('Request handled successfully!');
  });
};

const server = http.createServer(requestListener);

server.on('error', (err) => {
  console.error('Server error:', err);
});

// Gracefully handle server termination
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed gracefully.');
    process.exit(0);
  });
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});