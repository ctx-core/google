import { import_meta_env_ } from '@ctx-core/env'
import { missing_argument__throw } from '@ctx-core/error'
/**
 * Google Tag Manager script html to place at the top of `<body>`
 * @param {import('../_types').gtm_body_script_html_opts_T}[opts]
 * @returns {string}
 * @private
 */
export function gtm_body_script_html_(opts = {}) {
	const GTM_ID = opts.GTM_ID || import_meta_env_().GTM_ID
	if (!GTM_ID) missing_argument__throw(opts, { key: 'GTM_ID' })
	return `
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
	`.trim()
}
export {
	gtm_body_script_html_ as _gtm_body_script_html,
	gtm_body_script_html_ as _html__script__body__gtm,
}
