import test from 'tape'
import {normalizeUri} from './index.js'

test('normalizeUri(value)', function (t) {
  t.equal(normalizeUri(true), 'true', 'should coerce to string')

  t.equal(normalizeUri('foo'), 'foo', 'should work (1)')
  t.equal(normalizeUri('foo bar'), 'foo%20bar', 'should work (2)')
  t.equal(normalizeUri('foo%20bar'), 'foo%20bar', 'should work (3)')
  t.equal(normalizeUri('👌'), '%F0%9F%91%8C', 'should work (4)')

  t.end()
})
