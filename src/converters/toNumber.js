/**
 * Converts a `value` to a numeric value.
 *
 * @param {any} value - The value to convert.
 * @returns {number|undefined} The converted numeric value or `undefined` if conversion fails.
 */
export const toNumber = value => {
	// Attempt to convert the value to a number.
	const numericValue = Number(value)

	// Check if the conversion result is NaN (Not-a-Number).
	if (Number.isNaN(numericValue)) {
		return undefined
	}

	return numericValue
}
