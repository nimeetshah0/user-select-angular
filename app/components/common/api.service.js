'use strict';


angular.module('app.common').factory('api', function($http) {

	var api = {}



	api.users = {
		list: function() {
			return $http({
				method: 'GET',
				url: '/data/user-list.json'
			});
		},
		avatar: function() {
			return $http({
				method: 'GET',
				url: '/data/user-avatar.json'
			});
		}

	}



	api.easterEgg = {
		xkcd: function(comic) {
			return $http.jsonp('http://dynamic.xkcd.com/api-0/jsonp/comic/' + comic + '?callback=JSON_CALLBACK');
		}
	}

	return api;	

});