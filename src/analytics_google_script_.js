import { clone } from '@ctx-core/object';
import { throw_missing_argument } from '@ctx-core/error';
/**
 * Html to add ga.js to the site
 */
export function analytics_google_script_(...opts_a) {
    const opts = clone(...opts_a);
    const GOOGLE_TRACKING_ID = opts.GOOGLE_TRACKING_ID || opts.GA_ID || process.env.GA_GOOGLE_TRACKING_ID;
    if (!GOOGLE_TRACKING_ID)
        throw_missing_argument({ key: 'process.env.GOOGLE_TRACKING_ID' });
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
	`.trim();
}
export { analytics_google_script_ as _analytics_google_script, analytics_google_script_ as _script__google__analytics, };
//# sourceMappingURL=src/analytics_google_script_.js.map