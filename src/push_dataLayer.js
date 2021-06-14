export function push_dataLayer(obj, ...arg_a) {
    const dataLayer = window['dataLayer'] = window['dataLayer'] || [];
    dataLayer.push(obj, ...arg_a);
}
export { push_dataLayer as push__dataLayer };
//# sourceMappingURL=src/push_dataLayer.js.map