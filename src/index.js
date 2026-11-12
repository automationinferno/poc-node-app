const http = require('node:http');

function createServer(port = 3000) {
  const server = http.createServer((req, res) => {
    if (req.url === '/health' && req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok', service: 'poc-node-app' }));
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from automationinferno/poc-node-app!\n');
  });

  return server;
}

if (require.main === module) {
  const server = createServer(process.env.PORT || 3000);
  server.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}

module.exports = { createServer };
