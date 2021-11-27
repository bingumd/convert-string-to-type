import { toNumber } from '../../src'

describe('toNumber', () => {
    it('can convert to number', () => {
        expect(toNumber('18')).toBe(18)
    })

    it('can convert to float number', () => {
        expect(toNumber('0.6')).toBe(0.6)
    })

    it('can handle undefined', () => {
        expect(toNumber(undefined)).toBeUndefined()
    })
})
