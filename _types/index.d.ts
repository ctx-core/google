import type { error_o_T } from 'ctx-core/error'
export interface gtm_body_script_html_opts_T extends error_o_T {
	GTM_ID?:string
	GOOGLE_TRACKING_ID?:string
	GA_ID?:string
}
export interface gtm_script_html_opts_T extends error_o_T {
	GTM_ID?:string
	dataLayer?:[]
}
export declare type gtm_script_html_opts__T = gtm_script_html_opts_T
export interface WebFontConfig {
	loading?:()=>void,
	active?:()=>void,
	inactive?:()=>void,
	fontloading?:(familyName:string, fvd:string)=>void,
	fontactive?:(familyName:string, fvd:string)=>void,
	fontinactive?:(familyName:string, fvd:string)=>void,
	timeout?:number,
	classes?:boolean,
	events?:boolean,
	custom?:{
		families?:string[],
		urls?:string[],
		testStrings?:Record<string, string>,
	},
	fontdeck?:{
		id:string,
	},
	google?:{
		families:string[],
	},
	monotype?:{
		projectId:string,
		version?:number, // (optional, flushes the CDN cache)
		loadAllFonts?:boolean //(optional, loads all project fonts)
	},
	typekit?:{
		id:string,
		api?:string,
	},
}
