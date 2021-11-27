import { toString } from '../../src'

describe('toString', () => {
    it('can return string', () => {
        expect(toString('string')).toBe('string')
    })

    it('can handle undefined', () => {
        expect(toString(undefined)).toBeUndefined()
    })
})
