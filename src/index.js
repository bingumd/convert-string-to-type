import { toBoolean, toNumber, toString } from './converters'
export { toBoolean, toNumber, toString }

/**
 * Converts a `value` to `number`, `boolean` or `string`
 *
 * @param value - The value to convert
 * @returns The converted `value`
 */
const convert = value => {
	if (['false', 'False', 'true', 'True'].includes(value)) {
		return toBoolean(value)
	}

	return toNumber(value) || toString(value)
}

export default convert
