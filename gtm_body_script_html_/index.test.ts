import { test } from 'uvu'
import { match } from 'uvu/assert'
import { gtm_body_script_html_ } from '../index.js'
test('gtm_body_script_html_', ()=>{
	match(gtm_body_script_html_(
		{ GTM_ID: 'test-gtm-id' }),
	`https://www.googletagmanager.com/ns.html?id=test-gtm-id`
	)
})
test.run()
