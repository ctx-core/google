import { has_dom } from '@ctx-core/dom'
export function init_dataLayer():void {
	if (has_dom) {
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
		j.src = `https://www.googletagmanager.com/gtm.js?id=${process.env.GTM_ID}${dl}`
		;(f.parentNode as Node).insertBefore(j, f)
	}
}
export {
	init_dataLayer as init__dataLayer
}
