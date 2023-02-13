export declare function dataLayer__push(obj:object, ...arg_a:object[]):void
declare global {
	interface Window {
		dataLayer:object[]
	}
}
export {
	dataLayer__push as push_dataLayer,
	dataLayer__push as push__dataLayer, 
}
