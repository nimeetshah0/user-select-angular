'use strict';

// Declare app level module which depends on views, and components
angular
    .module('app', [
        'ngRoute',
        'app.common',
        'app.userList',
        'app.selectedUsers'
    ])
    .config(function($locationProvider, $routeProvider) {
        // $locationProvider.hashPrefix('!');
        // $routeProvider.otherwise({ redirectTo: '/' });
    })
    .run(function($rootScope) {
	    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
	    	$rootScope.common = {};
            // set page title
            $rootScope.common.title = current.title;
            $rootScope.common.previousPage = previous ? previous.$$route.originalPath : null;
        });
    });
