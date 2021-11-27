/**
 * Converts a `value` value to `number`
 *
 * @param value - The value to convert
 * @returns The converted numeric `value` or `undefined`
 */
export const toNumber = (value) => {
    const number = Number(value)
    return Number.isNaN(number) ? undefined : number
}
