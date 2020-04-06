import { prop, is } from 'ramda'
import swutch from 'swutch'
import containsAny from '../utilities/containsAny'

const MEDIA_QUERY_CHECK_CHARACTERS = [
	' ',
	':',
	'(',
	')',
	'print',
	'screen',
	'speech',
	'all',
]

const DEFAULT_FEATURE = 'min-width'
const DEFAULT_VALUE = '768px'
const DEFAULT_ALIASES = {
	xs: '(min-width: 576px)',
	sm: '(min-width: 768px)',
	md: '(min-width: 992px)',
	lg: '(min-width: 1200px)',
}

const createMediaQueryRenderer = (props = {}) => {

	const {
		feature,
		value,
		aliases: aliasesProp,
	} = props

	const typeCheckError = typeCheckArguments(props)
	if (typeCheckError) {
		console.error(typeCheckError)
		return
	}

	const unitifiedValue = is(Number, value) ? `${value}px` : value
	const prefilledFeature = feature || DEFAULT_FEATURE
	const prefilledValue = unitifiedValue || DEFAULT_VALUE
	const aliases = aliasesProp || DEFAULT_ALIASES

	return props => {
		const propIsString = is(String, props)
		const propIsArray = is(Array, props)
		const aliasValue = propIsString && prop(props, aliases)

		if (aliasValue) {
			return prependMediaRule(aliasValue)
		}

		if (isMediaQueryString(props)) {
			return prependMediaRule(props)
		}

		const feature = propIsArray ? props[0] : prefilledFeature
		const value = (propIsArray ? props[1] : props) || prefilledValue

		return renderFeatureMediaQuery([feature, value])
	}
}

const typeCheckArguments = x => swutch([
	[!is(Object, x), 'The first argument must be an object.'],
	[x.feature && !is(String, x.feature), '`feature` must be a string.'],
	[x.value && !(is(String, x.value) || is(Number, x.value)), '`value` must be a string or number.'],
	[x.aliases && is(Array, x.aliases), '`aliases` must be an array.'],
], null)

const isMediaQueryString = x => {
	const trimmedQuery = is(String, x) && x.trim()
	return is(String, x) && containsAny(trimmedQuery, MEDIA_QUERY_CHECK_CHARACTERS)
}

const renderFeatureMediaQuery = mediaQueryData => {
	const feature = mediaQueryData[0]
	const value = mediaQueryData[1]
	const computedValue = is(String, value) ? value : `${value}px`
	return prependMediaRule(`(${feature}: ${computedValue})`)
}

const prependMediaRule = x => `@media ${x}`

export default createMediaQueryRenderer
