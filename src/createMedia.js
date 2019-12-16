import { media } from './media'

const createMedia = defaultArgument => {
	return (...args) => {
		if (args.length === 0) {
			return media(defaultArgument)
		}
		return media(...args)
	}
}

export {
	createMedia
}
