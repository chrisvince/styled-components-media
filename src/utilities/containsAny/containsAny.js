const containsAny = (input, array) => {
	for (let arrayItem of array) {
		if (input.includes(arrayItem)) {
			return true
		}
	}
	return false
}

export default containsAny
