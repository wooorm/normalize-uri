var implementation = identity

try {
  normalize('')
  implementation = normalize
  /* c8 ignore next */
} catch (_) {}

export function normalizeUri(value) {
  return implementation(value)
}

// Normalize `uri`.
function normalize(uri) {
  return encodeURI(decodeURI(uri))
}

/* c8 ignore next 3 */
function identity(uri) {
  return uri
}
