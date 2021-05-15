export declare function push_dataLayer(obj: object, ...arg_a1: object[]): void;
declare global {
    interface Window {
        dataLayer: object[];
    }
}
export { push_dataLayer as push__dataLayer };
