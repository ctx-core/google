import { throw_missing_argument } from '@ctx-core/error';
/**
 * Google Tag Manager script html to place at the top of `<body>`
 */
export function gtm_body_script_html_(opts = {}) {
    const GTM_ID = opts.GTM_ID || process.env.GTM_ID;
    if (!GTM_ID)
        throw_missing_argument(opts, { key: 'process.env.GTM_ID' });
    return `
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
	`.trim();
}
export { gtm_body_script_html_ as _gtm_body_script_html, gtm_body_script_html_ as _html__script__body__gtm, };
//# sourceMappingURL=src/gtm_body_script_html_.js.map