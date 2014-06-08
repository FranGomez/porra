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
                .state('porra.group', {
                    url: '/group/:group',
                    views:{
                        'fase1@porra':{
                            templateUrl: 'public/system/views/group.html',
                            controller: 'formController'
                        },
                        'classification@porra':{
                            templateUrl:'public/system/views/classification.html',
                            controller: 'classificationController'
                        }
                    }
                    
                })
                .state('.round8', {
                    template: 'hola',
                    controller: 'round8Controller'
                })
                .state('.round4', {
                    template: 'hola',
                    controller: 'round4Controller'
                })
                .state('.round2', {
                    template: 'hola',
                    controller: 'round2Controller'
                })
                .state('.round1', {
                    template: 'hola',
                    controller: 'round1Controller'
                })
                // nested states 
                // each of these sections will have their own view
                // url will be nested (/form/profile)
                .state('porra.profile', {
                    url: '/profile',
                    templateUrl: 'public/system/views/form-profile.html'
                })
                .state('porra.payment', {
                    url: '/payment',
                    templateUrl: 'public/system/views/form-payment.html'
                })
                
                // url will be /form/interests
                .state('porra.interests', {
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
        return championship;
/*        var Webtest = {
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

        return Webtest;*/
    })
    .factory('teams', function($q, $timeout, $http) {
        return teams;
/*var Webtest = {
            fetch: function(callback) {
                
                var deferred = $q.defer();
                console.log('fetching');
                $timeout(function() {
                    $http.get('public/teams.json').success(function(data) {
                        deferred.resolve(data);
                    });
                }, 30);

                return deferred.promise;
            }
        };

        return Webtest;*/
    })
    .factory('sharedService', function($rootScope) {
        var sharedService = {};
        
        sharedService.message = '';

        sharedService.prepForBroadcast = function(match) {
            console.log("Pasada por sharedService.prepForBroadcast" + match.teamA.name);
            this.match = match;
            this.broadcastItem();
        };

        sharedService.broadcastItem = function() {
            $rootScope.$broadcast('handleResult');
        };

        return sharedService;
    });
    //.value( 'championship', {'year':2014,'host':'Brasil'} );
    //.value( 'championship', championship );
var championship = {
    "year":"2014",
    "host":"",
    "groups":[{"id":"A"},{"id":"B"},{"id":"C"},{"id":"D"},{"id":"E"},{"id":"F"},{"id":"G"},{"id":"H"}],
    "matches":[
            {"id":"1","result":"","group":"A","teamA":{"name":"Brasil","flag":"br"},"teamB":{"name":"Croacia","flag":"hr"}},
            {"id":"2","result":"","group":"A","teamA":{"name":"Mejico","flag":"mx"},"teamB":{"name":"Camerun","flag":"cm"}},
            {"id":"3","result":"","group":"B","teamA":{"name":"Espa;a","flag":"es"},"teamB":{"name":"Holanda","flag":"nl"}},
            {"id":"4","result":"","group":"B","teamA":{"name":"Chile","flag":"cl"},"teamB":{"name":"Australia","flag":"au"}},
            {"id":"5","result":"","group":"C","teamA":{"name":"Colombia","flag":"co"},"teamB":{"name":"Grecia","flag":"gr"}},
            {"id":"6","result":"","group":"C","teamA":{"name":"Costa de Marfil","flag":"ci"},"teamB":{"name":"Japon","flag":"jp"}},
            {"id":"7","result":"","group":"D","teamA":{"name":"Uruguay","flag":"uy"},"teamB":{"name":"Costa Rica","flag":"cr"}},
            {"id":"8","result":"","group":"D","teamA":{"name":"Inglaterra","flag":"_England"},"teamB":{"name":"Italia","flag":"it"}},
            {"id":"9","result":"","group":"E","teamA":{"name":"Suiza","flag":"ch"},"teamB":{"name":"Ecuador","flag":"ec"}},
            {"id":"10","result":"","group":"E","teamA":{"name":"Francia","flag":"fr"},"teamB":{"name":"Honduras","flag":"hn"}},
            {"id":"11","result":"","group":"F","teamA":{"name":"Argentina","flag":"ar"},"teamB":{"name":"Bosnia & Herzegovina","flag":"ba"}},
            {"id":"12","result":"","group":"F","teamA":{"name":"Iran","flag":"ir"},"teamB":{"name":"Nigeria","flag":"ng"}},
            {"id":"13","result":"","group":"G","teamA":{"name":"Alemania","flag":"de"},"teamB":{"name":"Portugal","flag":"pt"}},
            {"id":"14","result":"","group":"G","teamA":{"name":"Ghana","flag":"gh"},"teamB":{"name":"Estados Unidos","flag":"us"}},
            {"id":"15","result":"","group":"H","teamA":{"name":"Belgica","flag":"be"},"teamB":{"name":"Argelia","flag":"dz"}},
            {"id":"16","result":"","group":"H","teamA":{"name":"Rusia","flag":"ru"},"teamB":{"name":"Corea del Sur","flag":"kr"}},
            {"id":"17","result":"","group":"A","teamA":{"name":"Brasil","flag":"br"},"teamB":{"name":"Mejico","flag":"mx"}},
            {"id":"18","result":"","group":"A","teamA":{"name":"Camerun","flag":"cm"},"teamB":{"name":"Croacia","flag":"hr"}},
            {"id":"19","result":"","group":"B","teamA":{"name":"Australia","flag":"au"},"teamB":{"name":"Holanda","flag":"nl"}},
            {"id":"20","result":"","group":"B","teamA":{"name":"Espa;a","flag":"es"},"teamB":{"name":"Chile","flag":"cl"}},
            {"id":"21","result":"","group":"C","teamA":{"name":"Colombia","flag":"co"},"teamB":{"name":"Costa de Marfil","flag":"ci"}},
            {"id":"22","result":"","group":"C","teamA":{"name":"Japon","flag":"jp"},"teamB":{"name":"Grecia","flag":"gr"}},
            {"id":"23","result":"","group":"D","teamA":{"name":"Uruguay","flag":"uy"},"teamB":{"name":"Inglaterra","flag":"_England"}},
            {"id":"24","result":"","group":"D","teamA":{"name":"Italia","flag":"it"},"teamB":{"name":"Costa Rica","flag":"cr"}},
            {"id":"25","result":"","group":"E","teamA":{"name":"Suiza","flag":"ch"},"teamB":{"name":"Francia","flag":"fr"}},
            {"id":"26","result":"","group":"E","teamA":{"name":"Honduras","flag":"hn"},"teamB":{"name":"Ecuador","flag":"ec"}},
            {"id":"27","result":"","group":"F","teamA":{"name":"Argentina","flag":"ar"},"teamB":{"name":"Iran","flag":"ir"}},
            {"id":"28","result":"","group":"F","teamA":{"name":"Nigeria","flag":"ng"},"teamB":{"name":"Bosnia & Herzegovina","flag":"ba"}},
            {"id":"29","result":"","group":"G","teamA":{"name":"Alemania","flag":"de"},"teamB":{"name":"Ghana","flag":"gh"}},
            {"id":"30","result":"","group":"G","teamA":{"name":"Estados Unidos","flag":"us"},"teamB":{"name":"Portugal","flag":"pt"}},
            {"id":"31","result":"","group":"H","teamA":{"name":"Belgica","flag":"be"},"teamB":{"name":"Rusia","flag":"ru"}},
            {"id":"32","result":"","group":"H","teamA":{"name":"Corea del Sur","flag":"kr"},"teamB":{"name":"Argelia","flag":"dz"}},
            {"id":"33","result":"","group":"A","teamA":{"name":"Camerun","flag":"cm"},"teamB":{"name":"Brasil","flag":"br"}},
            {"id":"34","result":"","group":"A","teamA":{"name":"Croacia","flag":"hr"},"teamB":{"name":"Mejico","flag":"mx"}},
            {"id":"35","result":"","group":"B","teamA":{"name":"Australia","flag":"au"},"teamB":{"name":"Espa;a","flag":"es"}},
            {"id":"36","result":"","group":"B","teamA":{"name":"Holanda","flag":"nl"},"teamB":{"name":"Chile","flag":"cl"}},
            {"id":"37","result":"","group":"C","teamA":{"name":"Japon","flag":"jp"},"teamB":{"name":"Colombia","flag":"co"}},
            {"id":"38","result":"","group":"C","teamA":{"name":"Grecia","flag":"gr"},"teamB":{"name":"Costa de Marfil","flag":"ci"}},
            {"id":"39","result":"","group":"D","teamA":{"name":"Italia","flag":"it"},"teamB":{"name":"Uruguay","flag":"uy"}},
            {"id":"40","result":"","group":"D","teamA":{"name":"Costa Rica","flag":"cr"},"teamB":{"name":"Inglaterra","flag":"_England"}},
            {"id":"41","result":"","group":"E","teamA":{"name":"Honduras","flag":"hn"},"teamB":{"name":"Suiza","flag":"ch"}},
            {"id":"42","result":"","group":"E","teamA":{"name":"Ecuador","flag":"ec"},"teamB":{"name":"Francia","flag":"fr"}},
            {"id":"43","result":"","group":"F","teamA":{"name":"Nigeria","flag":"ng"},"teamB":{"name":"Argentina","flag":"ar"}},
            {"id":"44","result":"","group":"F","teamA":{"name":"Bosnia & Herzegovina","flag":"ba"},"teamB":{"name":"Iran","flag":"ir"}},
            {"id":"45","result":"","group":"G","teamA":{"name":"Estados Unidos","flag":"us"},"teamB":{"name":"Alemania","flag":"de"}},
            {"id":"46","result":"","group":"G","teamA":{"name":"Portugal","flag":"pt"},"teamB":{"name":"Ghana","flag":"gh"}},
            {"id":"47","result":"","group":"H","teamA":{"name":"Corea del Sur","flag":"kr"},"teamB":{"name":"Belgica","flag":"be"}},
            {"id":"48","result":"","group":"H","teamA":{"name":"Argelia","flag":"dz"},"teamB":{"name":"Rusia","flag":"ru"}},

            {"id":"49","teamA":{"pos":"1","group":"A"},"teamB":{"pos":"2","group":"B"}},
            {"id":"50","teamA":{"pos":"1","group":"C"},"teamB":{"pos":"2","group":"D"}},
            {"id":"51","teamA":{"pos":"1","group":"B"},"teamB":{"pos":"2","group":"A"}},
            {"id":"52","teamA":{"pos":"1","group":"D"},"teamB":{"pos":"2","group":"C"}},
            {"id":"53","teamA":{"pos":"1","group":"E"},"teamB":{"pos":"2","group":"F"}},
            {"id":"54","teamA":{"pos":"1","group":"G"},"teamB":{"pos":"2","group":"H"}},
            {"id":"55","teamA":{"pos":"1","group":"F"},"teamB":{"pos":"2","group":"E"}},
            {"id":"56","teamA":{"pos":"1","group":"H"},"teamB":{"pos":"2","group":"G"}},

            {"id":"57","teamA":{"match":"49"},"teamB":{"match":"50"}},
            {"id":"58","teamA":{"match":"53"},"teamB":{"match":"54"}},
            {"id":"59","teamA":{"match":"51"},"teamB":{"match":"52"}},
            {"id":"60","teamA":{"match":"55"},"teamB":{"match":"56"}},

            {"id":"61","teamA":{"match":"57"},"teamB":{"match":"58"}},
            {"id":"62","teamA":{"match":"59"},"teamB":{"match":"60"}},

            {"id":"63","teamA":{"match":"61"},"teamB":{"match":"62"}}

    ]
};


var teams = [
{"name":"Brasil","flag":"br","pos":"1","points":"0","group":"A"},
{"name":"Croacia","flag":"hr","pos":"2","points":"0","group":"A"},
{"name":"Mejico","flag":"mx","pos":"3","points":"0","group":"A"},
{"name":"Camerun","flag":"cm","pos":"4","points":"0","group":"A"},
{"name":"Espa;a","flag":"es","pos":"1","points":"0","group":"B"},
{"name":"Holanda","flag":"nl","pos":"2","points":"0","group":"B"},
{"name":"Chile","flag":"cl","pos":"3","points":"0","group":"B"},
{"name":"Australia","flag":"au","pos":"4","points":"0","group":"B"},
{"name":"Colombia","flag":"co","pos":"1","points":"0","group":"C"},
{"name":"Grecia","flag":"gr","pos":"2","points":"0","group":"C"},
{"name":"Costa de Marfil","flag":"ci","pos":"3","points":"0","group":"C"},
{"name":"Japon","flag":"jp","pos":"4","points":"0","group":"C"},
{"name":"Uruguay","flag":"uy","pos":"1","points":"0","group":"D"},
{"name":"Costa Rica","flag":"cr","pos":"2","points":"0","group":"D"},
{"name":"Inglaterra","flag":"_England","pos":"3","points":"0","group":"D"},
{"name":"Italia","flag":"it","pos":"4","points":"0","group":"D"},
{"name":"Suiza","flag":"ch","pos":"1","points":"0","group":"E"},
{"name":"Ecuador","flag":"ec","pos":"2","points":"0","group":"E"},
{"name":"Francia","flag":"fr","pos":"3","points":"0","group":"E"},
{"name":"Honduras","flag":"hn","pos":"4","points":"0","group":"E"},
{"name":"Argentina","flag":"ar","pos":"1","points":"0","group":"F"},
{"name":"Bosnia & Herzegovina","flag":"ba","pos":"2","points":"0","group":"F"},
{"name":"Iran","flag":"ir","pos":"3","points":"0","group":"F"},
{"name":"Nigeria","flag":"ng","pos":"4","points":"0","group":"F"},
{"name":"Alemania","flag":"de","pos":"1","points":"0","group":"G"},
{"name":"Portugal","flag":"pt","pos":"2","points":"0","group":"G"},
{"name":"Ghana","flag":"gh","pos":"3","points":"0","group":"G"},
{"name":"Estados Unidos","flag":"us","pos":"4","points":"0","group":"G"},
{"name":"Belgica","flag":"be","pos":"1","points":"0","group":"H"},
{"name":"Argelia","flag":"dz","pos":"2","points":"0","group":"H"},
{"name":"Rusia","flag":"ru","pos":"3","points":"0","group":"H"},
{"name":"Corea del Sur","flag":"kr","pos":"4","points":"0","group":"H"}
];