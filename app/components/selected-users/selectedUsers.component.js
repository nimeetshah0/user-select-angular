'use strict';


angular.module('app.selectedUsers').component('selectedUsers', {
	templateUrl: 'components/selected-users/selectedUsers.template.html',
	controller: function(api, sharedData) {
		var ctrl = this;
		ctrl.users = sharedData.selectedUsers;

		if (!ctrl.users.length) {

			// Generate random number from 1 to 1500
			var comic = parseInt(Math.random() * 1500);

			api.easterEgg.xkcd(comic).then(function(data) {
				ctrl.xkcd = data.data;
			});
		}
	}
})