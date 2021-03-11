// 封装常用请求方法
import http from './request'

let instance = http()
export default {
	get(url, params = {}, { showMsg = true, showLoading = false } = {}, headers) {
		let options = {}
		if (params) {
			options.params = params
		}
		if (headers) {
			options.headers = headers
		}
		if (showMsg) { console.log('showMsg'); }
		if (showLoading) { console.log('showLoading'); }
		return instance.get(url, options)
	},
	post(url, params, headers) {
		let options = {}
		if (headers) {
			options.headers = headers
		}
		return instance.post(url, params, options)
	},
	//聊胜于无
	put(url, params, headers) {
		let options = {}
		if (headers) {
			options.headers = headers
		}
		return instance.put(url, params, options)
	},
	delete(url, params, headers) {
		let options = {}
		if (params) {
			options.params = params
		}
		if (headers) {
			options.headers = headers
		}
		return instance.delete(url, options)
	}
}