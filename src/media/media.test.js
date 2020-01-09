import { media } from './media'

describe('No argument tests', () => {
	test("Should return '@media (min-width: 768px)' when no arguments are passed", () => {
		const actual = media()
		const expected = '@media (min-width: 768px)'

		expect(actual).toBe(expected)
	})
})

describe('Integer tests', () => {
	test("Should return '@media (min-width: 30px)' when `30` is passed", () => {
		const actual = media(30)
		const expected = '@media (min-width: 30px)'

		expect(actual).toBe(expected)
	})
})

describe('String tests', () => {
	test("Should return '@media (min-width: 100em)' when '100em' is passed", () => {
		const actual = media('100em')
		const expected = '@media (min-width: 100em)'

		expect(actual).toBe(expected)
	})
})

describe('Array tests', () => {
	test("Should return '@media (max-width: 300px)' when `['max-width', 300]` is passed", () => {
		const actual = media(['max-width', 300])
		const expected = '@media (max-width: 300px)'

		expect(actual).toBe(expected)
	})
})

describe('Media string tests', () => {
	test("Should return '@media (max-width: 500px)' when '(max-width: 500px)' is passed", () => {
		const actual = media('(max-width: 500px)')
		const expected = '@media (max-width: 500px)'

		expect(actual).toBe(expected)
	})
})
