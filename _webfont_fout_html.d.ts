import type { WebFontConfig } from './WebFontConfig';
/**
 * Html to guard against flash of unfocused text with Google Fonts.
 * @example `_webfont_fout_html({ families: ['Open Sans'] })`
 * @example `_webfont_fout_html({ WebFontConfig: { custom: { families: ['My Font', 'My Other Font:n4,i4,n7'], urls: ['/fonts.css'] }} })`
 */
export declare function _webfont_fout_html(opts?: webfont_fout_html_opts_type): string;
export { _webfont_fout_html as _html__webfont__fout };
export interface webfont_fout_html_opts_type {
    WebFontConfig?: WebFontConfig;
    families?: string[];
}
