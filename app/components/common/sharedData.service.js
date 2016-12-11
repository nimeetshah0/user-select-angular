'use strict';


angular.module('app.common').factory('sharedData', function($http) {

	var data = {};

	data.selectedUsers = [];
	

	return data;	

});