import api from '../common'
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
ApiList.zby = function (params = {}) {
	return api.get('http://localhost:8088/zby', params, { showMsg: false });
};

export default ApiList;