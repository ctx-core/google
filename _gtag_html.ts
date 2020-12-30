import { error_ctx_type, throw_missing_argument } from '@ctx-core/error'
/**
 * Html to add gtag.js to the site
 */
export function _gtag_html(opts = {} as _gtag_html_opts_type) {
	const GOOGLE_TRACKING_ID = opts.GOOGLE_TRACKING_ID || process.env.GOOGLE_TRACKING_ID || ''
	if (!GOOGLE_TRACKING_ID) throw_missing_argument(opts, { key: 'process.env.GOOGLE_TRACKING_ID' } as error_ctx_type)
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
	_gtag_html as _html__gtag
}
export interface _gtag_html_opts_type extends error_ctx_type {
	GOOGLE_TRACKING_ID?:string
}