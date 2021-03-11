import api from '../index'
let ApiList = {};
const baseUrl = 'https://autumnfish.cn'

ApiList.toLogin = function (params = {}) {
	return api.post('xxxxxx', params);
};

ApiList.userInfo = function (params = {}) {
	return api.get('xxxxxx', params, { showMsg: false });
};

ApiList.demsong = function (params = {}) {
	return api.get(baseUrl + '/song/detail?ids=574566207', params, { showMsg: false });
};

export default ApiList;