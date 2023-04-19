import { missing_argument__throw } from '@ctx-core/error'
import { import_meta_env_ } from '@ctx-core/env'
/**
 * Html to add gtag.js to the site
 * @param {import('./index.d.ts').gtag_html_opts_T}[opts]
 * @returns {string}
 * @private
 */
export function gtag_html_(opts = {}) {
	const GOOGLE_TRACKING_ID =
		opts.GOOGLE_TRACKING_ID
		|| import_meta_env_().GOOGLE_TRACKING_ID
		|| ''
	if (!GOOGLE_TRACKING_ID) missing_argument__throw(opts, { key: 'GOOGLE_TRACKING_ID' })
	return `
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TRACKING_ID}"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_TRACKING_ID}');
</script>
	`.trim()
}
export {
	gtag_html_ as _gtag_html,
	gtag_html_ as _html__gtag,
}
