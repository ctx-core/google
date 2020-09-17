declare const ga
export function push__dataLayer(obj, ...arg_a1:unknown[]) {
	const dataLayer = window['dataLayer'] = window['dataLayer'] || []
	dataLayer.push(obj, ...arg_a1)
}
export function ga$() {
	ga(...arguments)
}
