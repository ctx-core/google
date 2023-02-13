import { test } from 'uvu'
import { dataLayer__init } from '../index.js'
test('dataLayer__init', ()=>{
	dataLayer__init({ GTM_ID: 'trackme' })
})
test.run()
