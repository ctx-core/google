import type { WebFontConfig } from '../_types/index.js'
/**
 * Html to guard against flash of unfocused text with Google Fonts.
 * @example `_webfont_fout_html({ families: ['Open Sans'] })`
 * @example `_webfont_fout_html({ WebFontConfig: { custom: { families: ['My Font', 'My Other Font:n4,i4,n7'], urls: ['/fonts.css'] }} })`
 */
export declare function webfont_fout_html_(opts?:webfont_fout_html_opts_T):string
export {
	webfont_fout_html_ as _webfont_fout_html,
	webfont_fout_html_ as _html__webfont__fout,
}
export interface webfont_fout_html_opts_T {
	WebFontConfig?:WebFontConfig
	families?:string[]
}
