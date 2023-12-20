import { has_dom } from '@ctx-core/dom'
import { import_meta_env_ } from 'ctx-core/env'
/**
 * @param {import('../_types/index.js').gtm_script_html_opts_T}[opts]
 */
export function dataLayer__init(opts = {}) {
	if (has_dom) {
		const GTM_ID = opts.GTM_ID || import_meta_env_().GTM_ID
		window['dataLayer'] = []
		window['dataLayer'] = window['dataLayer'] || []
		window['dataLayer'].push({
			'gtm.start': new Date().getTime(),
			event: 'gtm.js'
		})
		const f = document.getElementsByTagName('script')[0]
		const j = document.createElement('script')
		const dl = 'dataLayer' != 'dataLayer' ? '&l=' + 'dataLayer' : ''
		j.async = true
		j.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}${dl}`
		f.parentNode.insertBefore(j, f)
	}
}
export {
	dataLayer__init as init_dataLayer,
	dataLayer__init as init__dataLayer
}
