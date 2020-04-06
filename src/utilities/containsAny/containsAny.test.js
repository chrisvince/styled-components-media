import containsAny from './containsAny'

describe('Basic tests', () => {
	test('Returns `true` when a single length array is passed with a matching string', () => {
		const actual = containsAny('hello', ['hello'])
		const expected = true

		expect(actual).toBe(expected)
	})

	test('Returns `false` when a single length array is passed with a non-matching string', () => {
		const actual = containsAny('hello', ['goodbye'])
		const expected = false

		expect(actual).toBe(expected)
	})

	test('Returns `true` when a multi length array is passed with a matching string', () => {
		const actual = containsAny('hello', ['goodbye', 'hello'])
		const expected = true

		expect(actual).toBe(expected)
	})

	test('Returns `false` when a multi length array is passed with non-matching strings', () => {
		const actual = containsAny('hello', ['goodbye', 'gday'])
		const expected = false

		expect(actual).toBe(expected)
	})
})
