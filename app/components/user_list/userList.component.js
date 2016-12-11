'use strict';


angular.module('app.userList').component('userList', {
	templateUrl: 'components/user_list/userList.template.html',
	controller: function(api, sharedData) {
		var ctrl = this;

		api.users.list().then(function(users) {
			ctrl.users = users.data;
			_.forEach(ctrl.users, function(user) {

				// Find if this user was selected earlier
				if (_.find(sharedData.selectedUsers, function(obj) {
					return obj.id === user.id
				})) {
					user.selected = true;
				}
			});

		});

		sharedData.selectedUsers.length ? ctrl.disableSelectButton = false : ctrl.disableSelectButton = true;


		ctrl.userClicked = function(id) {
			var usrIdx = _.findIndex(ctrl.users, function(o) {
				return o.id === id;
			});

			if (!ctrl.users[usrIdx].selected) {
				ctrl.users[usrIdx].selected = true;
				sharedData.selectedUsers.push(ctrl.users[usrIdx]);
				ctrl.disableSelectButton = false;
			} else {
				ctrl.users[usrIdx].selected = false;
				// Find this user in sharedData
				var sIndex = _.findIndex(sharedData.selectedUsers, function(o) {
					return o.id === ctrl.users[usrIdx].id;
				});
				sharedData.selectedUsers.splice(sIndex, 1);
				if (!sharedData.selectedUsers.length) {
					ctrl.disableSelectButton = true;
				}
			}
		}


		ctrl.clearSelected = function() {
			sharedData.selectedUsers.splice(0, sharedData.selectedUsers.length);

			_.forEach(ctrl.users, function(user) {
				user.selected = false;
			});

			ctrl.disableSelectButton = true;
		}

	}
})