/**
 * @param {object}obj
 * @param {object}arg_a
 */
export function dataLayer__push(obj, ...arg_a) {
	const dataLayer = window['dataLayer'] = window['dataLayer'] || []
	dataLayer.push(obj, ...arg_a)
}
export {
	dataLayer__push as push_dataLayer,
	dataLayer__push as push__dataLayer,
}
