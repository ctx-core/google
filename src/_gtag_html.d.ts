import { error_Ctx } from '@ctx-core/error';
/**
 * Html to add gtag.js to the site
 */
export declare function _gtag_html(opts?: _gtag_html_opts_T): string;
export { _gtag_html as _html__gtag };
export interface _gtag_html_opts_T extends error_Ctx {
    GOOGLE_TRACKING_ID?: string;
}
