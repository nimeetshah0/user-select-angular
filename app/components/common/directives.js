'use strict';

/**
 * Directive to navigate to a URL
 */

angular.module('app.common').directive('navigateTo', function($location) {
    return {
    	restrict: 'A',
        link: function(scope, element, attr) {
            var path;
            attr.$observe('navigateTo', function(val) {
                path = val;
            });

            element.bind('click', function() {
                scope.$apply(function() {
                    $location.path(path);
                });
            });
        }
    }
});


/**
 * Directive to render user avatar
 */

angular.module('app.common').directive('avatar', function(api) {
    return {
        restrict: 'E',
        scope: {
            userId: '=user'
        },
        link: function(scope, element, attr) {
            // Call API to read user-avatar.json 
            // Cannot pass user ID because the server can return only static files for now
            // Very barebones
            api.users.avatar().then(function(result) {
                scope.avatarUrl = _.find(result.data, function(o) {
                    return o.id === scope.userId;
                }).avatar;
                element.replaceWith('<img class="avatar-image" src="' + scope.avatarUrl + '"></img>');
            });
        },
    }
});
