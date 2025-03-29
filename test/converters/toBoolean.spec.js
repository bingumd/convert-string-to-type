import { toBoolean } from '../../src'

describe('toBoolean', () => {
	it('can convert truthy values', () => {
		expect(toBoolean(true)).toBe(true)
		expect(toBoolean(false)).toBe(false)
	})

	it('can convert truthy values', () => {
		expect(toBoolean('true')).toBe(true)
		expect(toBoolean('True')).toBe(true)
	})

	it('can convert falsy values', () => {
		expect(toBoolean('false')).toBe(false)
		expect(toBoolean('False')).toBe(false)
	})

	it('can handle undefined', () => {
		expect(toBoolean(undefined)).toBeUndefined()
	})
})
