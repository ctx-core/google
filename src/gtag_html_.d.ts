import { error_ctx_I } from '@ctx-core/error';
/**
 * Html to add gtag.js to the site
 */
export declare function gtag_html_(opts?: _gtag_html_opts_T): string;
export { gtag_html_ as _gtag_html, gtag_html_ as _html__gtag, };
export interface _gtag_html_opts_T extends error_ctx_I {
    GOOGLE_TRACKING_ID?: string;
}
