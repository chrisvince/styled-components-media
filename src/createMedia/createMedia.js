import is from 'is'
import containsAny from '../utilities/containsAny'

const features = {
	minWidth: 'min-width',
	maxWidth: 'max-width',
	minHeight: 'min-height',
	maxHeight: 'max-height',
}

const noFeaturePassedValue = features.minWidth
const noValuePassedValue = 768

const prependMediaRuleCheckCharacters = [
	' ',
	':',
	'(',
	')',
	'print',
	'screen',
	'speech',
	'all',
]

const createMedia = arg => {
	const defaultFeature = is.array(arg) ? arg[0] : noFeaturePassedValue
	const defaultValue = (is.array(arg) ? arg[1] : arg) || noValuePassedValue
	const defaultMediaQueryString = isMediaQueryString(arg) && arg

	return arg => {
		if (!arg && defaultMediaQueryString) {
			return prependMediaRule(defaultMediaQueryString)
		}
		if (isMediaQueryString(arg)) {
			return prependMediaRule(arg)
		}

		const feature = is.array(arg) ? arg[0] : defaultFeature
		const value = (is.array(arg) ? arg[1] : arg) || defaultValue

		return renderFeatureMediaQuery([feature, value])
	}
}

const isMediaQueryString = x => {
	const trimmedQuery = is.string(x) && x.trim()
	return is.string(x) && containsAny(trimmedQuery, prependMediaRuleCheckCharacters)
}

const prependMediaRule = x => {
	return `@media ${x}`
}

const renderFeatureMediaQuery = mediaQueryData => {
	const feature = mediaQueryData[0]
	const value = mediaQueryData[1]
	const computedValue = is.string(value) ? value : `${value}px`

	return prependMediaRule(`(${feature}: ${computedValue})`)
}

export {
	createMedia
}
