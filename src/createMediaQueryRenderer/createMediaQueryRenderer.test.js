import createMediaQueryRenderer from './'

describe('No argument tests', () => {
	test("Should return a function that returns '@media (min-width: 768px)' when no arguments are passed to createMedia", () => {
		const renderMediaQuery = createMediaQueryRenderer()
		const actual = renderMediaQuery()
		const expected = '@media (min-width: 768px)'

		expect(actual).toBe(expected)
	})

	describe('Media overide tests', () => {
		test("Should return '@media (min-width: 300px)' when no arguments are passed to createMedia and `300` is passed to the returned function", () => {
			const renderMediaQuery = createMediaQueryRenderer()
			const actual = renderMediaQuery(300)
			const expected = '@media (min-width: 300px)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (min-width: 200%)' when no arguments are passed to createMedia and '200%' (string) is passed to the returned function", () => {
			const renderMediaQuery = createMediaQueryRenderer()
			const actual = renderMediaQuery('200%')
			const expected = '@media (min-width: 200%)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 300px)' when no arguments are passed to createMedia and `['max-width', 300]` is passed to the returned function", () => {
			const renderMediaQuery = createMediaQueryRenderer()
			const actual = renderMediaQuery(['max-width', 300])
			const expected = '@media (max-width: 300px)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 250em)' when no arguments are passed to createMedia and `['max-width', '250em']` is passed to the returned function", () => {
			const renderMediaQuery = createMediaQueryRenderer()
			const actual = renderMediaQuery(['max-width', '250em'])
			const expected = '@media (max-width: 250em)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media print' when no arguments are passed to createMedia and 'print' is passed to the returned function", () => {
			const renderMediaQuery = createMediaQueryRenderer()
			const actual = renderMediaQuery('print')
			const expected = '@media print'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 100px)' when no arguments are passed to createMedia and '(max-width: 100px)' is passed to the returned function", () => {
			const renderMediaQuery = createMediaQueryRenderer()
			const actual = renderMediaQuery('(max-width: 100px)')
			const expected = '@media (max-width: 100px)'

			expect(actual).toBe(expected)
		})
	})
})

describe('Integer tests', () => {
	test("Should return a function that returns '@media (min-width: 30px)' when `30` is passed to createMedia", () => {
		const settings = {
			value: 30
		}
		const renderMediaQuery = createMediaQueryRenderer(settings)
		const actual = renderMediaQuery()
		const expected = '@media (min-width: 30px)'

		expect(actual).toBe(expected)
	})

	describe('Integer overide tests', () => {
		test("Should return '@media (min-width: 300px)' when `100` is passed to createMedia and `300` is passed to the returned function", () => {
			const settings = {
				value: 100
			}
			const renderMediaQuery = createMediaQueryRenderer(settings)
			const actual = renderMediaQuery(300)
			const expected = '@media (min-width: 300px)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (min-width: 200%)' when `100` is passed to createMedia and '200%' (string) is passed to the returned function", () => {
			const settings = {
				value: 100
			}
			const renderMediaQuery = createMediaQueryRenderer(settings)
			const actual = renderMediaQuery('200%')
			const expected = '@media (min-width: 200%)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 300px)' when `100` is passed to createMedia and `['max-width', 300]` is passed to the returned function", () => {
			const settings = {
				value: 100
			}
			const renderMediaQuery = createMediaQueryRenderer(settings)
			const actual = renderMediaQuery(['max-width', 300])
			const expected = '@media (max-width: 300px)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 250em)' when `100` is passed to createMedia and `['max-width', '250em']` is passed to the returned function", () => {
			const settings = {
				value: 100
			}
			const renderMediaQuery = createMediaQueryRenderer(settings)
			const actual = renderMediaQuery(['max-width', '250em'])
			const expected = '@media (max-width: 250em)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media print' when `100` is passed to createMedia and 'print' is passed to the returned function", () => {
			const settings = {
				value: 100
			}
			const renderMediaQuery = createMediaQueryRenderer(settings)
			const actual = renderMediaQuery('print')
			const expected = '@media print'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 500px)' when `100` is passed to createMedia and '(max-width: 100px)' is passed to the returned function", () => {
			const settings = {
				value: 100
			}
			const renderMediaQuery = createMediaQueryRenderer(settings)
			const actual = renderMediaQuery('(max-width: 500px)')
			const expected = '@media (max-width: 500px)'

			expect(actual).toBe(expected)
		})
	})
})

describe('String tests', () => {
	test("Should return a function that returns '@media (min-width: 100em)' when '100em' is passed to createMedia", () => {
		const settings = {
			value: '100em'
		}
		const renderMediaQuery = createMediaQueryRenderer(settings)
		const actual = renderMediaQuery()
		const expected = '@media (min-width: 100em)'

		expect(actual).toBe(expected)
	})

	describe('Media overide tests', () => {
		test("Should return '@media (min-width: 300px)' when '100em' is passed to createMedia and `300` is passed to the returned function", () => {
			const settings = {
				value: '100em'
			}
			const renderMediaQuery = createMediaQueryRenderer(settings)
			const actual = renderMediaQuery(300)
			const expected = '@media (min-width: 300px)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (min-width: 200%)' '100em' is passed to createMedia and '200%' (string) is passed to the returned function", () => {
			const settings = {
				value: '100em',
			}
			const renderMediaQuery = createMediaQueryRenderer(settings)
			const actual = renderMediaQuery('200%')
			const expected = '@media (min-width: 200%)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 300px)' when '100em' is passed to createMedia and `['max-width', 300]` is passed to the returned function", () => {
			const settings = {
				value: '100em',
			}
			const renderMediaQuery = createMediaQueryRenderer(settings)
			const actual = renderMediaQuery(['max-width', 300])
			const expected = '@media (max-width: 300px)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 250em)' when '100em' is passed to createMedia and `['max-width', '250em']` is passed to the returned function", () => {
			const settings = {
				value: '100em',
			}
			const renderMediaQuery = createMediaQueryRenderer(settings)
			const actual = renderMediaQuery(['max-width', '250em'])
			const expected = '@media (max-width: 250em)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media print' when '100em' is passed to createMedia and 'print' is passed to the returned function", () => {
			const settings = {
				value: '100em',
			}
			const renderMediaQuery = createMediaQueryRenderer(settings)
			const actual = renderMediaQuery('print')
			const expected = '@media print'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 300px)' when '100em' is passed to createMedia and '(max-width: 100px)' is passed to the returned function", () => {
			const settings = {
				value: '100em',
			}
			const renderMediaQuery = createMediaQueryRenderer(settings)
			const actual = renderMediaQuery('(max-width: 300px)')
			const expected = '@media (max-width: 300px)'

			expect(actual).toBe(expected)
		})
	})
})

describe('Array tests', () => {
	test("Should return a function that returns '@media (max-width: 300px)' when `['max-width', 300]` is passed to createMedia", () => {
		const settings = {
			feature: 'max-width',
			value: 300,
		}
		const renderMediaQuery = createMediaQueryRenderer(settings)
		const actual = renderMediaQuery()
		const expected = '@media (max-width: 300px)'

		expect(actual).toBe(expected)
	})

	describe('Media overide tests', () => {
		test("Should return '@media (max-width: 400px)' when `['max-width', 300]` is passed to createMedia and `400` is passed to the returned function", () => {
			const settings = {
				feature: 'max-width',
				value: 300,
			}
			const renderMediaQuery = createMediaQueryRenderer(settings)
			const actual = renderMediaQuery(400)
			const expected = '@media (max-width: 400px)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 200%)' when `['max-width', 300]` is passed to createMedia and '200%' (string) is passed to the returned function", () => {
			const settings = {
				feature: 'max-width',
				value: 300,
			}
			const renderMediaQuery = createMediaQueryRenderer(settings)
			const actual = renderMediaQuery('200%')
			const expected = '@media (max-width: 200%)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 600px)' when `['max-width', 300]` is passed to createMedia and `['max-width', 600]` is passed to the returned function", () => {
			const settings = {
				feature: 'max-width',
				value: 300,
			}
			const renderMediaQuery = createMediaQueryRenderer(settings)
			const actual = renderMediaQuery(['max-width', 600])
			const expected = '@media (max-width: 600px)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 250em)' when `['max-width', 300]` is passed to createMedia and `['max-width', '250em']` is passed to the returned function", () => {
			const settings = {
				feature: 'max-width',
				value: 300,
			}
			const renderMediaQuery = createMediaQueryRenderer(settings)
			const actual = renderMediaQuery(['max-width', '250em'])
			const expected = '@media (max-width: 250em)'

			expect(actual).toBe(expected)
		})

		test("Should return '@media print' when `['max-width', 300]` is passed to createMedia and 'print' is passed to the returned function", () => {
			const settings = {
				feature: 'max-width',
				value: 300,
			}
			const renderMediaQuery = createMediaQueryRenderer(settings)
			const actual = renderMediaQuery('print')
			const expected = '@media print'

			expect(actual).toBe(expected)
		})

		test("Should return '@media (max-width: 100px)' when `['max-width', 300]` is passed to createMedia and '(max-width: 100px)' is passed to the returned function", () => {
			const settings = {
				feature: 'max-width',
				value: 300,
			}
			const renderMediaQuery = createMediaQueryRenderer(settings)
			const actual = renderMediaQuery('(max-width: 100px)')
			const expected = '@media (max-width: 100px)'

			expect(actual).toBe(expected)
		})
	})
})

describe('Alias tests', () => {
	test("Loads prefilled aliases", () => {
		const aliases = {
			xs: '(min-width: 576px)',
			sm: '(min-width: 768px)',
			md: '(min-width: 992px)',
			lg: '(min-width: 1200px)',
		}
		const settings = {
			feature: 'max-width',
			value: 300,
		}
		const renderMediaQuery = createMediaQueryRenderer(settings)

		for (const aliasKey in aliases) {
			const actual = renderMediaQuery(aliasKey)
			const expected = `@media ${aliases[aliasKey]}`

			expect(actual).toBe(expected)
		}
	})

	test("Loads custom aliases", () => {
		const settings = {
			feature: 'max-width',
			value: 300,
			aliases: {
				breakpoint1: '(min-width: 500px)',
				breakpoint2: '(min-width: 600em)',
				print: 'print',
				screen: 'screen',
			}
		}
		const renderMediaQuery = createMediaQueryRenderer(settings)

		const aliases = settings.aliases

		for (const aliasKey in aliases) {
			const actual = renderMediaQuery(aliasKey)
			const expected = `@media ${aliases[aliasKey]}`

			expect(actual).toBe(expected)
		}
	})
})
