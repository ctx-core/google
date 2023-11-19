import { import_meta_env_ } from '@ctx-core/env'
import { missing_argument__throw } from '@ctx-core/error'
import { clone } from '@ctx-core/object'
/** @typedef {import('../_types/index.d.ts').gtm_body_script_html_opts_T} */
/**
 * Html to add ga.js to the site
 * @param {Partial<gtm_body_script_html_opts_T>}opts_a
 * @returns {string}
 * @private
 */
export function analytics_google_script_(...opts_a) {
	const opts = clone(...opts_a)
	const GOOGLE_TRACKING_ID =
		opts.GOOGLE_TRACKING_ID
		|| opts.GA_ID
		|| import_meta_env_().GA_GOOGLE_TRACKING_ID
	if (!GOOGLE_TRACKING_ID) missing_argument__throw({
		key: 'import.meta.env.GOOGLE_TRACKING_ID'
	})
	return `
<!-- Google Analytics -->
<script data-cfasync="false">
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');	
ga('create', '${GOOGLE_TRACKING_ID}', 'auto');
ga('send', 'pageview');
</script>
<!-- End Google Analytics -->
	`.trim()
}
export {
	analytics_google_script_ as _analytics_google_script,
	analytics_google_script_ as _script__google__analytics,
}
