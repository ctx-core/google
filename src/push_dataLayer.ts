export function push_dataLayer(obj:object, ...arg_a1:object[]) {
	const dataLayer = window['dataLayer'] = window['dataLayer'] || []
	dataLayer.push(obj, ...arg_a1)
}
declare global {
	interface Window {
		dataLayer:object[]
	}
}
export {
	push_dataLayer as push__dataLayer
}
