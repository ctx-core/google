import { test } from 'uvu'
import { init_dataLayer } from '../index.js'
test('init_dataLayer', ()=>{
	init_dataLayer({ GTM_ID: 'trackme' })
})
test.run()
