import { error_ctx_T } from '@ctx-core/error';
/**
 * Html to add gtag.js to the site
 */
export declare function _gtag_html(opts?: _gtag_html_opts_type): string;
export { _gtag_html as _html__gtag };
export interface _gtag_html_opts_type extends error_ctx_T {
    GOOGLE_TRACKING_ID?: string;
}
