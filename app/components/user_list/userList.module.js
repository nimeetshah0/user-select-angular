'use strict';

/**
 * Home module for displaying home page content.
 */

angular
    .module('app.userList', [
        'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                title: 'User List Page',
                template: '<user-list></user-list>'
            });
    });
