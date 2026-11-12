const { test } = require('node:test');
const assert = require('node:assert');
const { createServer } = require('../src/index.js');

test('createServer creates valid HTTP server instance', () => {
  const server = createServer();
  assert.ok(server);
  assert.strictEqual(typeof server.listen, 'function');
});

test('math check for test runner verification', () => {
  assert.strictEqual(1 + 1, 2);
});
