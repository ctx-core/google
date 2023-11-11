import { test } from 'uvu'
import { match } from 'uvu/assert'
import { gtm_script_html_ } from '../index.js'
test('gtm_script_html_', ()=>{
	const gtm_script_html = gtm_script_html_({ GTM_ID: 'trackme' })
	match(gtm_script_html,
		`(window,document,'script','dataLayer','trackme')`
	)
	match(gtm_script_html,
		`src="https://www.googletagmanager.com/ns.html?id=trackme"`
	)
})
test.run()
