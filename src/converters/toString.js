/**
 * Converts a `value` to a string.
 *
 * @param {any} value - The value to convert.
 * @returns {string|undefined} The converted string value or `undefined` if the value is `undefined`.
 */
export const toString = value => {
	// Check if the value is undefined.
	if (value === undefined) {
		return undefined
	}

	// Use the `toString` method if it exists, or fall back to a basic string conversion.
	return value.toString !== undefined ? value.toString() : value
}
