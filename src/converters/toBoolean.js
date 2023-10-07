/**
 * Converts a string `value` to a boolean.
 *
 * @param {string} value - The string value to convert.
 * @returns {boolean|undefined} The converted boolean value or undefined if not found.
 */
export const toBoolean = value => {
	// Map of string representations to boolean values.
	const stringToBooleanMap = new Map([
		['true', true],
		['True', true],
		['false', false],
		['False', false],
	])

	// Get the boolean value from the map, or return undefined if not found.
	return stringToBooleanMap.get(value)
}
