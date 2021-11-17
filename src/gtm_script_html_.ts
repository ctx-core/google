import { gtm_body_script_html_ } from './gtm_body_script_html_.js'
import { gtm_head_script_html_ } from './gtm_head_script_html_.js'
import type { gtm_script_html_opts__T } from './gtm_script_html_opts___t.js'
/**
 * Html to add gtm.js to the page
 * @param opts
 * @param opts.GTM_ID
 * @returns {string}
 */
export function gtm_script_html_(opts = {} as gtm_script_html_opts__T):string {
	return `
${gtm_head_script_html_(opts)}
${gtm_body_script_html_(opts)}
	`.trim()
}
export {
	gtm_script_html_ as _gtm_script_html,
	gtm_script_html_ as _html__script__gtm,
	gtm_script_html_ as _script__gtm,
}
