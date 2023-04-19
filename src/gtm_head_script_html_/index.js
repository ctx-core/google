import { import_meta_env_ } from '@ctx-core/env'
import { missing_argument__throw } from '@ctx-core/error'
/**
 * Google Tag Manager script html to place at the top of `<head>`
 * @param {import('../_types').gtm_body_script_html_opts_T}[opts]
 * @returns {string}
 * @private
 */
export function gtm_head_script_html_(opts = {}) {
	const GTM_ID = opts.GTM_ID || import_meta_env_().GTM_ID
	const { dataLayer = [] } = opts
	if (!GTM_ID) missing_argument__throw(opts, { key: 'GTM_ID' })
	return `
<script data-cfasync="false">window.dataLayer = ${JSON.stringify(dataLayer)};</script>
<!-- Google Tag Manager -->
<script data-cfasync="false">(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');</script>
<!-- End Google Tag Manager -->
	`.trim()
}
export {
	gtm_head_script_html_ as _gtm_head_script_html,
	gtm_head_script_html_ as _html__script__head__gtm,
}
