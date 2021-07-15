import { error_ctx_I, throw_missing_argument } from '@ctx-core/error'
/**
 * Html to add gtag.js to the site
 */
export function gtag_html_(opts = {} as _gtag_html_opts_T):string {
	const GOOGLE_TRACKING_ID = opts.GOOGLE_TRACKING_ID || process.env.GOOGLE_TRACKING_ID || ''
	if (!GOOGLE_TRACKING_ID) throw_missing_argument(opts, { key: 'process.env.GOOGLE_TRACKING_ID' } as error_ctx_I)
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
export interface _gtag_html_opts_T extends error_ctx_I {
	GOOGLE_TRACKING_ID?:string
}
