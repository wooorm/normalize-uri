# normalize-uri

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Normalize a URI.

## Install

[npm][]:

```sh
npm install normalize-uri
```

## Use

```js
var normalizeURI = require('normalize-uri')

normalizeURI('foo bar') // => 'foo%20bar'
normalizeURI('foo%20bar') // => 'foo%20bar'
normalizeURI('👌') // => '%F0%9F%91%8C'
```

## API

### `normalizeURI(value)`

Normalize `uri`.
This only works when both `encodeURI` and `decodeURI` are available.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/wooorm/normalize-uri.svg

[build]: https://travis-ci.org/wooorm/normalize-uri

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/normalize-uri.svg

[coverage]: https://codecov.io/github/wooorm/normalize-uri

[downloads-badge]: https://img.shields.io/npm/dm/normalize-uri.svg

[downloads]: https://www.npmjs.com/package/normalize-uri

[size-badge]: https://img.shields.io/bundlephobia/minzip/normalize-uri.svg

[size]: https://bundlephobia.com/result?p=normalize-uri

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com
