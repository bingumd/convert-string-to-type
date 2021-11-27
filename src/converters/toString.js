/**
 * Convert a `value` to `string`
 *
 * @param value - The value to convert
 * @returns The converted string `value` or `undefined`
 */
export const toString = (value) => {
    if (value === undefined) {
        return undefined
    }

    return value.toString !== undefined ? value.toString() : value
}
