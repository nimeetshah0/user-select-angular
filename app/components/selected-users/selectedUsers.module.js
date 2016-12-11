'use strict';

/**
 * Home module for displaying home page content.
 */

angular
    .module('app.selectedUsers', [
        'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/selected', {
                title: 'Selected Users Page',
                template: '<selected-users></selected-users>'
            });
    });
