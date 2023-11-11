import { test } from 'uvu'
import { match } from 'uvu/assert'
import { gtm_head_script_html_ } from '../index.js'
test('gtm_head_script_html_', ()=>{
	match(gtm_head_script_html_(
			{ GTM_ID: 'trackme' }),
		`(window,document,'script','dataLayer','trackme')`
	)
})
test.run()
