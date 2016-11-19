'use strict';

/* eslint-env mocha */

var assert = require('assert');
var normalizeURI = require('./');

describe('normalizeURI(value)', function () {
  it('should coerce to string', function () {
    assert.equal(normalizeURI(true), 'true');
  });

  it('should work', function () {
    assert.equal(normalizeURI('foo'), 'foo');
    assert.equal(normalizeURI('foo bar'), 'foo%20bar');
    assert.equal(normalizeURI('foo%20bar'), 'foo%20bar');
    assert.equal(normalizeURI('👌'), '%F0%9F%91%8C');
  });
});
