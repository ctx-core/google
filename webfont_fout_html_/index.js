/**
 * Html to guard against flash of unfocused text with Google Fonts.
 * @example `webfont_fout_html_({ families: ['Open Sans'] })`
 * @example `webfont_fout_html_({ WebFontConfig: { custom: { families: ['My Font', 'My Other Font:n4,i4,n7'], urls: ['/fonts.css'] }} })`
 * @param {import('./index.d.ts').webfont_fout_html_opts_T}[opts]
 * @returns {string}
 * @private
 */
export function webfont_fout_html_(opts = {}) {
	const WebFontConfig =
		opts.WebFontConfig
		|| {
			google: { families: opts.families || [] }
		}
	return `
<script>
WebFontConfig = ${JSON.stringify(WebFontConfig)};
(function() {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = true;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})();
</script>
	`.trim()
}
export {
	webfont_fout_html_ as _webfont_fout_html,
	webfont_fout_html_ as _html__webfont__fout,
}
