'use strict';

//Setting up route
angular.module('mean.system').config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            // For unmatched routes:
            $urlRouterProvider.otherwise('/');

            // states for my app
            $stateProvider              
                .state('home', {
                    url: '/',
                    templateUrl: 'public/system/views/index.html'
                })
                .state('auth', {
                    templateUrl: 'public/auth/views/index.html'
                })
                // route to show our basic form (/form)
                .state('form', {
                    url: '/form/:group',
                    templateUrl: 'public/system/views/form.html',
                    controller: 'formController'
                })
                // nested states 
                // each of these sections will have their own view
                // url will be nested (/form/profile)
                .state('form.group', {
                    url: '/profile',
                    templateUrl: 'public/system/views/form-profile.html'
                })
                .state('form.profile', {
                    url: '/profile',
                    templateUrl: 'public/system/views/form-profile.html'
                })
                
                // url will be /form/interests
                .state('form.interests', {
                    url: '/interests',
                    templateUrl: 'public/system/views/form-interests.html'
                })
                
                // url will be /form/payment
                .state('form.payment', {
                    url: '/payment',
                    templateUrl: 'public/system/views/form-payment.html'
                });
        }
    ])
    .config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ])
    .factory('championship', function($q, $timeout, $http) {
        var Webtest = {
            fetch: function(callback) {
                
                var deferred = $q.defer();
                console.log('fetching');
                $timeout(function() {
                    $http.get('public/webtest.json').success(function(data) {
                        deferred.resolve(data);
                    });
                }, 30);

                return deferred.promise;
            }
        };

        return Webtest;
    });
    //.value( 'championship', {'year':2014,'host':'Brasil'} );
    //.value( 'championship', championship );
