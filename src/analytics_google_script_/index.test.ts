import { test } from 'uvu'
import { match } from 'uvu/assert'
import { analytics_google_script_ } from '../index.js'
test('analytics_google_script_', ()=>{
	match(analytics_google_script_(
			{ GOOGLE_TRACKING_ID: 'trackme' }),
		`ga('create', 'trackme', 'auto');`
	)
})
test.run()
