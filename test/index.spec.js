import convert from '../src'

describe('convertStringToTtype', () => {
    describe('convert', () => {
        it('can convert to number', () => {
            expect(typeof convert('18')).toBe('number')
        })

        it('can convert to boolean', () => {
            expect(typeof convert('true')).toBe('boolean')
        })

        it('can convert to string', () => {
            expect(typeof convert('string')).toBe('string')
        })

        it('can handle undefined', () => {
            expect(convert(undefined)).toBeUndefined()
        })
    })
})
