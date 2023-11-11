import { test } from 'uvu'
import { match } from 'uvu/assert'
import { gtag_html_ } from '../index.js'
test('gtag_html_', ()=>{
	match(gtag_html_(
			{ GOOGLE_TRACKING_ID: 'trackme' }),
		`gtag('config', 'trackme')`
	)
})
test.run()
