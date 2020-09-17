import { error_ctx_type } from '@ctx-core/error';
/**
 * Html to guard agaist flash of unfocused text with Google Fonts.
 * @example `_html__webfont__fout({ families: ['Open Sans'] })`
 * @example `_html__webfont__fout({ WebFontConfig: { custom: { families: ['My Font', 'My Other Font:n4,i4,n7'], urls: ['/fonts.css'] }} })`
 */
export declare function _html__webfont__fout(opts?: Opts__html__webfont__fout): string;
declare type Opts__html__gtag = {
    GOOGLE_TRACKING_ID?: string;
} & error_ctx_type;
/**
 * Html to add gtag.js to the site
 */
export declare function _html__gtag(opts?: Opts__html__gtag): string;
/**
 * Html to add ga.js to the site
 */
export declare function _script__google__analytics(...opts_a1: Partial<Opts__html__script__body__gtm>[]): string;
/**
 * Html to add gtm.js to the page
 * @param opts
 * @param opts.GTM_ID
 * @returns {string}
 */
export declare function _html__script__gtm(opts?: Opts__html__script__head__gtm): string;
export declare const _script__gtm: typeof _html__script__gtm;
declare type Opts__html__script__head__gtm = error_ctx_type & {
    GTM_ID?: string;
    dataLayer?: [];
};
/**
 * Google Tag Manager script html to place at the top of `<head>`
 */
export declare function _html__script__head__gtm(opts?: Opts__html__script__head__gtm): string;
/**
 * Google Tag Manager script html to place at the top of `<body>`
 */
export declare function _html__script__body__gtm(opts?: Opts__html__script__body__gtm): string;
declare type Opts__html__webfont__fout = {
    WebFontConfig?: any;
    families?: string[];
};
declare type Opts__html__script__body__gtm = {
    GTM_ID?: string;
    GOOGLE_TRACKING_ID?: string;
    GA_ID?: string;
} & error_ctx_type;
export {};
