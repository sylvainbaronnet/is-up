'use strict';
var got = require('got');

module.exports = function (url) {
	return got('http://isitup.org/' + url + '.json', {
		json: true
	}).then(function (res) {
		if (res.body.status_code === 3) {
			throw new Error('Invalid domain');
		}

		return res.body.status_code === 1 ? true : res.body.response_code;
	});
};
