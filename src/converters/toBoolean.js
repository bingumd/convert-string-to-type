const types = new Map([
	['true', true],
	['True', true],
	['false', false],
	['False', false],
	[undefined, undefined],
])

/**
 * Converts a `value` value to `boolean`
 *
 * @param value - The value to convert
 * @returns The converted boolean `value` or `undefined`
 */
export const toBoolean = value => types.get(value)
