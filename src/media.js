import containsAny from './utilities/containsAny'
import isString from './utilities/isString'

const modes = {
	minWidth: 'min-width',
	maxWidth: 'max-width',
	minHeight: 'min-height',
	maxHeight: 'max-height',
}

const defaultMode = modes.minWidth
const queryDefault = 768

const prependMediaRuleCheckCharacters = [
	' ',
	':',
	'(',
	')',
	'print',
	'screen',
	'speech',
	'all'
]

const media = (query = queryDefault) => {
	const queryIsString = isString(query)
	const queryContainsCharacters = queryIsString && containsAny(query.trim(), prependMediaRuleCheckCharacters)

	if (queryIsString && queryContainsCharacters) {
		return prependMediaRule(query)
	}

	if (Array.isArray(query)) {
		return renderFeatureMediaQuery(query)
	}

	return renderFeatureMediaQuery([defaultMode, query])
}

const prependMediaRule = x => {
	return `@media ${x}`
}

const renderFeatureMediaQuery = mediaQueryData => {
	const feature = mediaQueryData[0]
	const valueRaw = mediaQueryData[1]
	const value = isString(valueRaw) ? valueRaw : `${valueRaw}px`

	return prependMediaRule(`(${feature}: ${value})`)
}

export {
	media
}
