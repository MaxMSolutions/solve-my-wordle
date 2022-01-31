export const isEmptyObject = (objectToTest) => {
	return JSON.stringify(objectToTest) === '{}';
}