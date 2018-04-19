'use strict'

var test = require('tape')
var normalizeURI = require('.')

test('normalizeURI(value)', function(t) {
  t.equal(normalizeURI(true), 'true', 'should coerce to string')

  t.equal(normalizeURI('foo'), 'foo', 'should work (1)')
  t.equal(normalizeURI('foo bar'), 'foo%20bar', 'should work (2)')
  t.equal(normalizeURI('foo%20bar'), 'foo%20bar', 'should work (3)')
  t.equal(normalizeURI('👌'), '%F0%9F%91%8C', 'should work (4)')

  t.end()
})
