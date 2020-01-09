import { createMedia } from './createMedia'

describe('No argument tests', () => {
	test("Should return a function that returns '@media (min-width: 768px)' when no arguments are passed to createMedia", () => {
		const media = createMedia()
		const actual = media()
		const expected = '@media (min-width: 768px)'

		expect(actual).toBe(expected)
	})

	describe('Media overide tests', () => {
		test("Should return '@media (min-width: 300px)' when no arguments are passed to createMedia and `300` is passed to the returned function", () => {
			const media = createMedia()
			const actual = media(300)
			const expected = '@media (min-width: 300px)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (min-width: 200%)' when no arguments are passed to createMedia and '200%' (string) is passed to the returned function", () => {
			const media = createMedia()
			const actual = media('200%')
			const expected = '@media (min-width: 200%)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 300px)' when no arguments are passed to createMedia and `['max-width', 300]` is passed to the returned function", () => {
			const media = createMedia()
			const actual = media(['max-width', 300])
			const expected = '@media (max-width: 300px)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 250em)' when no arguments are passed to createMedia and `['max-width', '250em']` is passed to the returned function", () => {
			const media = createMedia()
			const actual = media(['max-width', '250em'])
			const expected = '@media (max-width: 250em)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media print' when no arguments are passed to createMedia and 'print' is passed to the returned function", () => {
			const media = createMedia()
			const actual = media('print')
			const expected = '@media print'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 100px)' when no arguments are passed to createMedia and '(max-width: 100px)' is passed to the returned function", () => {
			const media = createMedia()
			const actual = media('(max-width: 100px)')
			const expected = '@media (max-width: 100px)'

			expect(actual).toBe(expected)
		})
	})
})

describe('Integer tests', () => {
	test("Should return a function that returns '@media (min-width: 30px)' when `30` is passed to createMedia", () => {
		const media = createMedia(30)
		const actual = media()
		const expected = '@media (min-width: 30px)'

		expect(actual).toBe(expected)
	})

	describe('Integer overide tests', () => {
		test("Should return '@media (min-width: 300px)' when `100` is passed to createMedia and `300` is passed to the returned function", () => {
			const media = createMedia(100)
			const actual = media(300)
			const expected = '@media (min-width: 300px)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (min-width: 200%)' when `100` is passed to createMedia and '200%' (string) is passed to the returned function", () => {
			const media = createMedia(100)
			const actual = media('200%')
			const expected = '@media (min-width: 200%)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 300px)' when `100` is passed to createMedia and `['max-width', 300]` is passed to the returned function", () => {
			const media = createMedia(100)
			const actual = media(['max-width', 300])
			const expected = '@media (max-width: 300px)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 250em)' when `100` is passed to createMedia and `['max-width', '250em']` is passed to the returned function", () => {
			const media = createMedia(100)
			const actual = media(['max-width', '250em'])
			const expected = '@media (max-width: 250em)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media print' when `100` is passed to createMedia and 'print' is passed to the returned function", () => {
			const media = createMedia(100)
			const actual = media('print')
			const expected = '@media print'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 500px)' when `100` is passed to createMedia and '(max-width: 100px)' is passed to the returned function", () => {
			const media = createMedia(100)
			const actual = media('(max-width: 500px)')
			const expected = '@media (max-width: 500px)'

			expect(actual).toBe(expected)
		})
	})
})

describe('String tests', () => {
	test("Should return a function that returns '@media (min-width: 100em)' when '100em' is passed to createMedia", () => {
		const media = createMedia('100em')
		const actual = media()
		const expected = '@media (min-width: 100em)'

		expect(actual).toBe(expected)
	})

	describe('Media overide tests', () => {
		test("Should return '@media (min-width: 300px)' when '100em' is passed to createMedia and `300` is passed to the returned function", () => {
			const media = createMedia('100em')
			const actual = media(300)
			const expected = '@media (min-width: 300px)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (min-width: 200%)' '100em' is passed to createMedia and '200%' (string) is passed to the returned function", () => {
			const media = createMedia('100em')
			const actual = media('200%')
			const expected = '@media (min-width: 200%)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 300px)' when '100em' is passed to createMedia and `['max-width', 300]` is passed to the returned function", () => {
			const media = createMedia('100em')
			const actual = media(['max-width', 300])
			const expected = '@media (max-width: 300px)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 250em)' when '100em' is passed to createMedia and `['max-width', '250em']` is passed to the returned function", () => {
			const media = createMedia('100em')
			const actual = media(['max-width', '250em'])
			const expected = '@media (max-width: 250em)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media print' when '100em' is passed to createMedia and 'print' is passed to the returned function", () => {
			const media = createMedia('100em')
			const actual = media('print')
			const expected = '@media print'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 300px)' when '100em' is passed to createMedia and '(max-width: 100px)' is passed to the returned function", () => {
			const media = createMedia('100em')
			const actual = media('(max-width: 300px)')
			const expected = '@media (max-width: 300px)'

			expect(actual).toBe(expected)
		})
	})
})

describe('Array tests', () => {
	test("Should return a function that returns '@media (max-width: 300px)' when `['max-width', 300]` is passed to createMedia", () => {
		const media = createMedia(['max-width', 300])
		const actual = media()
		const expected = '@media (max-width: 300px)'

		expect(actual).toBe(expected)
	})

	describe('Media overide tests', () => {
		test("Should return '@media (max-width: 400px)' when `['max-width', 300]` is passed to createMedia and `400` is passed to the returned function", () => {
			const media = createMedia(['max-width', 300])
			const actual = media(400)
			const expected = '@media (max-width: 400px)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 200%)' when `['max-width', 300]` is passed to createMedia and '200%' (string) is passed to the returned function", () => {
			const media = createMedia(['max-width', 300])
			const actual = media('200%')
			const expected = '@media (max-width: 200%)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 600px)' when `['max-width', 300]` is passed to createMedia and `['max-width', 600]` is passed to the returned function", () => {
			const media = createMedia(['max-width', 300])
			const actual = media(['max-width', 600])
			const expected = '@media (max-width: 600px)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 250em)' when `['max-width', 300]` is passed to createMedia and `['max-width', '250em']` is passed to the returned function", () => {
			const media = createMedia(['max-width', 300])
			const actual = media(['max-width', '250em'])
			const expected = '@media (max-width: 250em)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media print' when `['max-width', 300]` is passed to createMedia and 'print' is passed to the returned function", () => {
			const media = createMedia(['max-width', 300])
			const actual = media('print')
			const expected = '@media print'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 100px)' when `['max-width', 300]` is passed to createMedia and '(max-width: 100px)' is passed to the returned function", () => {
			const media = createMedia(['max-width', 300])
			const actual = media('(max-width: 100px)')
			const expected = '@media (max-width: 100px)'

			expect(actual).toBe(expected)
		})
	})
})

describe('Media string tests', () => {
	test("Should return a function that returns '@media (max-width: 500px)' when 'max-width: 500px' is passed to createMedia", () => {
		const media = createMedia('(max-width: 500px)')
		const actual = media()
		const expected = '@media (max-width: 500px)'

		expect(actual).toBe(expected)
	})

	describe('Media overide tests', () => {
		test("Should return '@media (min-width: 300px)' when '(max-width: 500px)' is passed to createMedia and `300` is passed to the returned function", () => {
			const media = createMedia('(max-width: 500px)')
			const actual = media(300)
			const expected = '@media (min-width: 300px)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (min-width: 200%)' when '(max-width: 500px)' is passed to createMedia and '200%' (string) is passed to the returned function", () => {
			const media = createMedia('(max-width: 500px)')
			const actual = media('200%')
			const expected = '@media (min-width: 200%)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 300px)' when '(max-width: 500px)' is passed to createMedia and `['max-width', 300]` is passed to the returned function", () => {
			const media = createMedia('(max-width: 500px)')
			const actual = media(['max-width', 300])
			const expected = '@media (max-width: 300px)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 250em)' when '(max-width: 500px)' is passed to createMedia and `['max-width', '250em']` is passed to the returned function", () => {
			const media = createMedia('(max-width: 500px)')
			const actual = media(['max-width', '250em'])
			const expected = '@media (max-width: 250em)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media print' when '(max-width: 500px)' is passed to createMedia and 'print' is passed to the returned function", () => {
			const media = createMedia('(max-width: 500px)')
			const actual = media('print')
			const expected = '@media print'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 100px)' when '(max-width: 500px)' is passed to createMedia and '(max-width: 100px)' is passed to the returned function", () => {
			const media = createMedia('(max-width: 500px)')
			const actual = media('(max-width: 100px)')
			const expected = '@media (max-width: 100px)'

			expect(actual).toBe(expected)
		})
	})
})
