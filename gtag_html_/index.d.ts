import { error_o_T } from 'ctx-core/error'
/**
 * Html to add gtag.js to the site
 */
export declare function gtag_html_(opts?:gtag_html_opts_T):string
export { gtag_html_ as _gtag_html, gtag_html_ as _html__gtag, }
export interface gtag_html_opts_T extends error_o_T {
	GOOGLE_TRACKING_ID?:string
}
export declare type _gtag_html_opts_T = gtag_html_opts_T
