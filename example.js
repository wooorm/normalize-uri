// Dependencies.
var normalizeURI = require('./index.js');

// Normalize:
var a = normalizeURI('foo bar');
var b = normalizeURI('foo%20bar');
var c = normalizeURI('👌');

// Yields:
console.log('text', a);
console.log('text', b);
console.log('text', c);
