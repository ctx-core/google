import { test } from 'uvu'
import { match } from 'uvu/assert'
import { webfont_fout_html_ } from '../index.js'
test('webfont_fout_html_', ()=>{
	match(webfont_fout_html_({ families: ['Open Sans'] }),
		`WebFontConfig = ${JSON.stringify({
			google: { families: ['Open Sans'] }
		})}`
	)
	match(webfont_fout_html_(
		{
			WebFontConfig:
					{
						custom: {
							families: ['My Font', 'My Other Font:n4,i4,n7'],
							urls: ['/fonts.css']
						}
					}
		}),
	`WebFontConfig = ${JSON.stringify({
		custom: {
			families: ['My Font', 'My Other Font:n4,i4,n7'],
			urls: ['/fonts.css']
		}
	}
	)}`
	)
})
test.run()
