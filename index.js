let implementation = identity

try {
  normalize('')
  implementation = normalize
  /* c8 ignore next */
} catch {}

/**
 * Normalize `value`.
 *
 * @param {string} value URI
 * @returns {string} Normalized URI
 */
export function normalizeUri(value) {
  return implementation(value)
}

/**
 * Normalize `value`.
 *
 * @param {string} value URI
 * @returns {string} Normalized URI
 */
function normalize(value) {
  return encodeURI(decodeURI(value))
}

/* c8 ignore next 9 */
/**
 * Normalize `value`.
 *
 * @param {string} value URI
 * @returns {string} Normalized URI
 */
function identity(value) {
  return value
}
