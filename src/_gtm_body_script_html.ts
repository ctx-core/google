import { error_Ctx, throw_missing_argument } from '@ctx-core/error'
import type { gtm_body_script_html_opts_T } from './gtm_body_script_html_opts_T'
/**
 * Google Tag Manager script html to place at the top of `<body>`
 */
export function _gtm_body_script_html(opts = {} as gtm_body_script_html_opts_T) {
	const GTM_ID = opts.GTM_ID || process.env.GTM_ID
	if (!GTM_ID) throw_missing_argument(opts, { key: 'process.env.GTM_ID' } as error_Ctx)
	return `
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
	`.trim()
}
export {
	_gtm_body_script_html as _html__script__body__gtm
}
