export function push_dataLayer(obj, ...arg_a1:unknown[]) {
	const dataLayer = window['dataLayer'] = window['dataLayer'] || []
	dataLayer.push(obj, ...arg_a1)
}
export {
	push_dataLayer as push__dataLayer
}
