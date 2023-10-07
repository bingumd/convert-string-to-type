// Import the conversion utility functions.
import { toBoolean, toNumber, toString } from './converters'

/**
 * Converts a `value` to `number`, `boolean`, or `string`.
 *
 * @param {any} value - The value to convert.
 * @returns {any} The converted `value`.
 */
const convertToType = value => {
	// Check if the value is one of the boolean representations ('true', 'false', 'True', 'False').
	if (['false', 'False', 'true', 'True'].includes(value)) {
		return toBoolean(value) // Convert to a boolean value.
	}

	// Try to convert to a number, if it fails, convert to a string.
	return toNumber(value) || toString(value)
}

// Export the individual conversion functions.
export { toBoolean, toNumber, toString }

// Export the main 'convertToType' function as the default export.
export default convertToType
