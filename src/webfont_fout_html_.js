/**
 * Html to guard against flash of unfocused text with Google Fonts.
 * @example `_webfont_fout_html({ families: ['Open Sans'] })`
 * @example `_webfont_fout_html({ WebFontConfig: { custom: { families: ['My Font', 'My Other Font:n4,i4,n7'], urls: ['/fonts.css'] }} })`
 */
export function webfont_fout_html_(opts = {}) {
    const WebFontConfig = opts.WebFontConfig
        || {
            google: { families: opts.families || [] }
        };
    return `
<script>
WebFontConfig = ${JSON.stringify(WebFontConfig)};
(function() {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})();
</script>
	`.trim();
}
export { webfont_fout_html_ as _webfont_fout_html, webfont_fout_html_ as _html__webfont__fout, };
//# sourceMappingURL=src/webfont_fout_html_.js.map