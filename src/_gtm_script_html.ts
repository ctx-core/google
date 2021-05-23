import type { _gtm_script_html_opts_T } from './_gtm_script_html_opts_T'
import { _gtm_head_script_html } from './_gtm_head_script_html'
import { _gtm_body_script_html } from './_gtm_body_script_html'
/**
 * Html to add gtm.js to the page
 * @param opts
 * @param opts.GTM_ID
 * @returns {string}
 */
export function _gtm_script_html(opts = {} as _gtm_script_html_opts_T) {
	return `
${_gtm_head_script_html(opts)}
${_gtm_body_script_html(opts)}
	`.trim()
}
export {
	_gtm_script_html as _html__script__gtm,
	_gtm_script_html as _script__gtm,
}
