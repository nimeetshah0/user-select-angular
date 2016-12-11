'use strict';



/**
 * Filter to search users by their full name
 */

angular.module('app.common').filter('searchFor', function() {

	return function(arr, searchString) {
		if (!searchString) {
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		_.forEach(arr, function(user) {
			if (_.includes(user.full_name.toLowerCase(), searchString)) {
				result.push(user);
			}
		});

		return result;

	}

});