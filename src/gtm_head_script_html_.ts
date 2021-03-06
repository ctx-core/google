import { error_ctx_I, throw_missing_argument } from '@ctx-core/error'
import type { gtm_script_html_opts__T } from './gtm_script_html_opts___t.js'
/**
 * Google Tag Manager script html to place at the top of `<head>`
 */
export function gtm_head_script_html_(
	opts = {} as gtm_script_html_opts__T
):string {
	const GTM_ID = opts.GTM_ID || process.env.GTM_ID
	const { dataLayer = [] } = opts
	if (!GTM_ID) throw_missing_argument(opts, { key: 'process.env.GTM_ID' } as error_ctx_I)
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
