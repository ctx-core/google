export function push_dataLayer(obj:object, ...arg_a:object[]):void {
	const dataLayer = window['dataLayer'] = window['dataLayer'] || []
	dataLayer.push(obj, ...arg_a)
}
declare global {
	interface Window {
		dataLayer:object[]
	}
}
export {
	push_dataLayer as push__dataLayer
}
