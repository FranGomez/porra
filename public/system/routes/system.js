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
                .state('porra.group', {
                    url: '/group/:group',
                    views:{
                        'fase1@porra':{
                            templateUrl: 'public/system/views/group.html',
                            controller: 'groupController'
                        },
                        'classification@porra':{
                            templateUrl:'public/system/views/classification.html',
                            controller: 'classificationController'
                        }
                    }
                })
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
    .factory('championship2', function($q, $timeout, $http) {
            return { 
                data : {},
                load : function() {
                    var defer = $q.defer();
                    var data = this.data;
                    data.id = 'hola';
                    /*$timeout(function () {
                        $http({
                            method : 'GET',
                            url : '/porra'
                        })
                        .success(function(data, status, headers, config) {
                            var championshipBD={}
                            championshipBD.year=data[0].year;
                            championshipBD.host=data[0].host;
                            championshipBD.matches=data[0].matches;
                            championshipBD.groups=data[0].groups;
                            data = championshipBD;
                            defer.resolve(data);
                        })
                    }, 5000);*/
                    return defer.promise;
                }
            };

                /*.error(function(data, status, headers, config) {
                   console.log("ERROR");
                   return championship;
                });

*/

        //return championship;
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
    .factory('getchampionship', function($q, $timeout, $http) {
        var Webtest = {
            fetch: function(callback) {
                console.log("OBTENIENDO PORRA DE bd");
                var deferred = $q.defer();
                console.log('fetching22');

                $http({
                    method : 'GET',
                    url : '/porra'
                })
                .success(function(data, status, headers, config) {
                    var championshipBD={}
                    championshipBD.year=data[0].year;
                    championshipBD.host=data[0].host;
                    championshipBD.matches=data[0].matches;
                    championshipBD.groups=data[0].groups;
                   // console.log("DATOS DEVUELTOS: " + data[0].championship);
                    //return championshipBD;
                    console.log("OBTENIDA PORRA DE bd");
                    deferred.resolve(championshipBD);
                });
                
                return deferred.promise;
            }
        };

        return Webtest;
                /*.error(function(data, status, headers, config) {
                   console.log("ERROR");
                   return championship;
                });

*/

        //return championship;
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
            //console.log("Pasada por sharedService.prepForBroadcast" + match.teamA.name);
            this.match = match;
            this.broadcastItem(match);
        };

        sharedService.prepForBroadcastClassification = function(match) {
            //console.log("Pasada por sharedService.broadcastClassification");
            this.match = match;
            this.broadcastClassification(match.group);
        };

        sharedService.prepForBroadcastRound8 = function(match) {
            //console.log("Pasada por sharedService.broadcastClassification");
            this.match = match;
            this.broadcastRound8(match);
        };

        sharedService.prepForBroadcastRound4 = function(match) {
            //console.log("Pasada por sharedService.broadcastClassification");
            this.match = match;
            this.broadcastRound4(match);
        };

        sharedService.broadcastItem = function() {
            $rootScope.$broadcast('handleResult');
        };

        sharedService.broadcastClassification = function() {
            $rootScope.$broadcast('handleClassification');
        };

        sharedService.broadcastRound8 = function() {
            $rootScope.$broadcast('handleRound8');
        };
        
        sharedService.broadcastRound4 = function() {
            $rootScope.$broadcast('handleRound4');
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
            {"id":"1","winner":"","group":"A","teamA":{"name":"Brasil","flag":"br"},"teamB":{"name":"Croacia","flag":"hr"}},
            {"id":"2","winner":"","group":"A","teamA":{"name":"Mejico","flag":"mx"},"teamB":{"name":"Camerun","flag":"cm"}},
            {"id":"3","winner":"","group":"B","teamA":{"name":"Espa;a","flag":"es"},"teamB":{"name":"Holanda","flag":"nl"}},
            {"id":"4","winner":"","group":"B","teamA":{"name":"Chile","flag":"cl"},"teamB":{"name":"Australia","flag":"au"}},
            {"id":"5","winner":"","group":"C","teamA":{"name":"Colombia","flag":"co"},"teamB":{"name":"Grecia","flag":"gr"}},
            {"id":"6","winner":"","group":"C","teamA":{"name":"Costa de Marfil","flag":"ci"},"teamB":{"name":"Japon","flag":"jp"}},
            {"id":"7","winner":"","group":"D","teamA":{"name":"Uruguay","flag":"uy"},"teamB":{"name":"Costa Rica","flag":"cr"}},
            {"id":"8","winner":"","group":"D","teamA":{"name":"Inglaterra","flag":"_England"},"teamB":{"name":"Italia","flag":"it"}},
            {"id":"9","winner":"","group":"E","teamA":{"name":"Suiza","flag":"ch"},"teamB":{"name":"Ecuador","flag":"ec"}},
            {"id":"10","winner":"","group":"E","teamA":{"name":"Francia","flag":"fr"},"teamB":{"name":"Honduras","flag":"hn"}},
            {"id":"11","winner":"","group":"F","teamA":{"name":"Argentina","flag":"ar"},"teamB":{"name":"Bosnia & Herzegovina","flag":"ba"}},
            {"id":"12","winner":"","group":"F","teamA":{"name":"Iran","flag":"ir"},"teamB":{"name":"Nigeria","flag":"ng"}},
            {"id":"13","winner":"","group":"G","teamA":{"name":"Alemania","flag":"de"},"teamB":{"name":"Portugal","flag":"pt"}},
            {"id":"14","winner":"","group":"G","teamA":{"name":"Ghana","flag":"gh"},"teamB":{"name":"Estados Unidos","flag":"us"}},
            {"id":"15","winner":"","group":"H","teamA":{"name":"Belgica","flag":"be"},"teamB":{"name":"Argelia","flag":"dz"}},
            {"id":"16","winner":"","group":"H","teamA":{"name":"Rusia","flag":"ru"},"teamB":{"name":"Corea del Sur","flag":"kr"}},
            {"id":"17","winner":"","group":"A","teamA":{"name":"Brasil","flag":"br"},"teamB":{"name":"Mejico","flag":"mx"}},
            {"id":"18","winner":"","group":"A","teamA":{"name":"Camerun","flag":"cm"},"teamB":{"name":"Croacia","flag":"hr"}},
            {"id":"19","winner":"","group":"B","teamA":{"name":"Australia","flag":"au"},"teamB":{"name":"Holanda","flag":"nl"}},
            {"id":"20","winner":"","group":"B","teamA":{"name":"Espa;a","flag":"es"},"teamB":{"name":"Chile","flag":"cl"}},
            {"id":"21","winner":"","group":"C","teamA":{"name":"Colombia","flag":"co"},"teamB":{"name":"Costa de Marfil","flag":"ci"}},
            {"id":"22","winner":"","group":"C","teamA":{"name":"Japon","flag":"jp"},"teamB":{"name":"Grecia","flag":"gr"}},
            {"id":"23","winner":"","group":"D","teamA":{"name":"Uruguay","flag":"uy"},"teamB":{"name":"Inglaterra","flag":"_England"}},
            {"id":"24","winner":"","group":"D","teamA":{"name":"Italia","flag":"it"},"teamB":{"name":"Costa Rica","flag":"cr"}},
            {"id":"25","winner":"","group":"E","teamA":{"name":"Suiza","flag":"ch"},"teamB":{"name":"Francia","flag":"fr"}},
            {"id":"26","winner":"","group":"E","teamA":{"name":"Honduras","flag":"hn"},"teamB":{"name":"Ecuador","flag":"ec"}},
            {"id":"27","winner":"","group":"F","teamA":{"name":"Argentina","flag":"ar"},"teamB":{"name":"Iran","flag":"ir"}},
            {"id":"28","winner":"","group":"F","teamA":{"name":"Nigeria","flag":"ng"},"teamB":{"name":"Bosnia & Herzegovina","flag":"ba"}},
            {"id":"29","winner":"","group":"G","teamA":{"name":"Alemania","flag":"de"},"teamB":{"name":"Ghana","flag":"gh"}},
            {"id":"30","winner":"","group":"G","teamA":{"name":"Estados Unidos","flag":"us"},"teamB":{"name":"Portugal","flag":"pt"}},
            {"id":"31","winner":"","group":"H","teamA":{"name":"Belgica","flag":"be"},"teamB":{"name":"Rusia","flag":"ru"}},
            {"id":"32","winner":"","group":"H","teamA":{"name":"Corea del Sur","flag":"kr"},"teamB":{"name":"Argelia","flag":"dz"}},
            {"id":"33","winner":"","group":"A","teamA":{"name":"Camerun","flag":"cm"},"teamB":{"name":"Brasil","flag":"br"}},
            {"id":"34","winner":"","group":"A","teamA":{"name":"Croacia","flag":"hr"},"teamB":{"name":"Mejico","flag":"mx"}},
            {"id":"35","winner":"","group":"B","teamA":{"name":"Australia","flag":"au"},"teamB":{"name":"Espa;a","flag":"es"}},
            {"id":"36","winner":"","group":"B","teamA":{"name":"Holanda","flag":"nl"},"teamB":{"name":"Chile","flag":"cl"}},
            {"id":"37","winner":"","group":"C","teamA":{"name":"Japon","flag":"jp"},"teamB":{"name":"Colombia","flag":"co"}},
            {"id":"38","winner":"","group":"C","teamA":{"name":"Grecia","flag":"gr"},"teamB":{"name":"Costa de Marfil","flag":"ci"}},
            {"id":"39","winner":"","group":"D","teamA":{"name":"Italia","flag":"it"},"teamB":{"name":"Uruguay","flag":"uy"}},
            {"id":"40","winner":"","group":"D","teamA":{"name":"Costa Rica","flag":"cr"},"teamB":{"name":"Inglaterra","flag":"_England"}},
            {"id":"41","winner":"","group":"E","teamA":{"name":"Honduras","flag":"hn"},"teamB":{"name":"Suiza","flag":"ch"}},
            {"id":"42","winner":"","group":"E","teamA":{"name":"Ecuador","flag":"ec"},"teamB":{"name":"Francia","flag":"fr"}},
            {"id":"43","winner":"","group":"F","teamA":{"name":"Nigeria","flag":"ng"},"teamB":{"name":"Argentina","flag":"ar"}},
            {"id":"44","winner":"","group":"F","teamA":{"name":"Bosnia & Herzegovina","flag":"ba"},"teamB":{"name":"Iran","flag":"ir"}},
            {"id":"45","winner":"","group":"G","teamA":{"name":"Estados Unidos","flag":"us"},"teamB":{"name":"Alemania","flag":"de"}},
            {"id":"46","winner":"","group":"G","teamA":{"name":"Portugal","flag":"pt"},"teamB":{"name":"Ghana","flag":"gh"}},
            {"id":"47","winner":"","group":"H","teamA":{"name":"Corea del Sur","flag":"kr"},"teamB":{"name":"Belgica","flag":"be"}},
            {"id":"48","winner":"","group":"H","teamA":{"name":"Argelia","flag":"dz"},"teamB":{"name":"Rusia","flag":"ru"}},

            {"id":"49","winner":"","teamA":{"name":"","pos":"1","group":"A"},"teamB":{"name":"","pos":"2","group":"B"}},
            {"id":"50","winner":"","teamA":{"name":"","pos":"1","group":"C"},"teamB":{"name":"","pos":"2","group":"D"}},
            {"id":"51","winner":"","teamA":{"name":"","pos":"1","group":"B"},"teamB":{"name":"","pos":"2","group":"A"}},
            {"id":"52","winner":"","teamA":{"name":"","pos":"1","group":"D"},"teamB":{"name":"","pos":"2","group":"C"}},
            {"id":"53","winner":"","teamA":{"name":"","pos":"1","group":"E"},"teamB":{"name":"","pos":"2","group":"F"}},
            {"id":"54","winner":"","teamA":{"name":"","pos":"1","group":"G"},"teamB":{"name":"","pos":"2","group":"H"}},
            {"id":"55","winner":"","teamA":{"name":"","pos":"1","group":"F"},"teamB":{"name":"","pos":"2","group":"E"}},
            {"id":"56","winner":"","teamA":{"name":"","pos":"1","group":"H"},"teamB":{"name":"","pos":"2","group":"G"}},

            {"id":"57","winner":"","teamA":{"match":"49"},"teamB":{"match":"50"}},
            {"id":"58","winner":"","teamA":{"match":"53"},"teamB":{"match":"54"}},
            {"id":"59","winner":"","teamA":{"match":"51"},"teamB":{"match":"52"}},
            {"id":"60","winner":"","teamA":{"match":"55"},"teamB":{"match":"56"}},

            {"id":"61","winner":"","teamA":{"match":"57"},"teamB":{"match":"58"}},
            {"id":"62","winner":"","teamA":{"match":"59"},"teamB":{"match":"60"}},

            {"id":"63","winner":"","teamA":{"match":"61"},"teamB":{"match":"62"}}

    ]
};

/*var championship = {
    "year":"2014",
    "host":"",
    "groups":[{"id":"A"},{"id":"B"},{"id":"C"},{"id":"D"},{"id":"E"},{"id":"F"},{"id":"G"},{"id":"H"}],
    "matches":[{"id":"1","winner":{"name":"Brasil"},"group":"A","teamA":{"name":"Brasil","flag":"br"},"teamB":{"name":"Croacia","flag":"hr"}},{"id":"2","winner":{"name":"empate"},"group":"A","teamA":{"name":"Mejico","flag":"mx"},"teamB":{"name":"Camerun","flag":"cm"}},{"id":"3","winner":"","group":"B","teamA":{"name":"Espa;a","flag":"es"},"teamB":{"name":"Holanda","flag":"nl"}},{"id":"4","winner":"","group":"B","teamA":{"name":"Chile","flag":"cl"},"teamB":{"name":"Australia","flag":"au"}},{"id":"5","winner":"","group":"C","teamA":{"name":"Colombia","flag":"co"},"teamB":{"name":"Grecia","flag":"gr"}},{"id":"6","winner":"","group":"C","teamA":{"name":"Costa de Marfil","flag":"ci"},"teamB":{"name":"Japon","flag":"jp"}},{"id":"7","winner":"","group":"D","teamA":{"name":"Uruguay","flag":"uy"},"teamB":{"name":"Costa Rica","flag":"cr"}},{"id":"8","winner":"","group":"D","teamA":{"name":"Inglaterra","flag":"_England"},"teamB":{"name":"Italia","flag":"it"}},{"id":"9","winner":"","group":"E","teamA":{"name":"Suiza","flag":"ch"},"teamB":{"name":"Ecuador","flag":"ec"}},{"id":"10","winner":"","group":"E","teamA":{"name":"Francia","flag":"fr"},"teamB":{"name":"Honduras","flag":"hn"}},{"id":"11","winner":"","group":"F","teamA":{"name":"Argentina","flag":"ar"},"teamB":{"name":"Bosnia & Herzegovina","flag":"ba"}},{"id":"12","winner":"","group":"F","teamA":{"name":"Iran","flag":"ir"},"teamB":{"name":"Nigeria","flag":"ng"}},{"id":"13","winner":"","group":"G","teamA":{"name":"Alemania","flag":"de"},"teamB":{"name":"Portugal","flag":"pt"}},{"id":"14","winner":"","group":"G","teamA":{"name":"Ghana","flag":"gh"},"teamB":{"name":"Estados Unidos","flag":"us"}},{"id":"15","winner":"","group":"H","teamA":{"name":"Belgica","flag":"be"},"teamB":{"name":"Argelia","flag":"dz"}},{"id":"16","winner":"","group":"H","teamA":{"name":"Rusia","flag":"ru"},"teamB":{"name":"Corea del Sur","flag":"kr"}},{"id":"17","winner":{"name":"Mejico"},"group":"A","teamA":{"name":"Brasil","flag":"br"},"teamB":{"name":"Mejico","flag":"mx"}},{"id":"18","winner":{"name":"Camerun"},"group":"A","teamA":{"name":"Camerun","flag":"cm"},"teamB":{"name":"Croacia","flag":"hr"}},{"id":"19","winner":"","group":"B","teamA":{"name":"Australia","flag":"au"},"teamB":{"name":"Holanda","flag":"nl"}},{"id":"20","winner":"","group":"B","teamA":{"name":"Espa;a","flag":"es"},"teamB":{"name":"Chile","flag":"cl"}},{"id":"21","winner":"","group":"C","teamA":{"name":"Colombia","flag":"co"},"teamB":{"name":"Costa de Marfil","flag":"ci"}},{"id":"22","winner":"","group":"C","teamA":{"name":"Japon","flag":"jp"},"teamB":{"name":"Grecia","flag":"gr"}},{"id":"23","winner":"","group":"D","teamA":{"name":"Uruguay","flag":"uy"},"teamB":{"name":"Inglaterra","flag":"_England"}},{"id":"24","winner":"","group":"D","teamA":{"name":"Italia","flag":"it"},"teamB":{"name":"Costa Rica","flag":"cr"}},{"id":"25","winner":"","group":"E","teamA":{"name":"Suiza","flag":"ch"},"teamB":{"name":"Francia","flag":"fr"}},{"id":"26","winner":"","group":"E","teamA":{"name":"Honduras","flag":"hn"},"teamB":{"name":"Ecuador","flag":"ec"}},{"id":"27","winner":"","group":"F","teamA":{"name":"Argentina","flag":"ar"},"teamB":{"name":"Iran","flag":"ir"}},{"id":"28","winner":"","group":"F","teamA":{"name":"Nigeria","flag":"ng"},"teamB":{"name":"Bosnia & Herzegovina","flag":"ba"}},{"id":"29","winner":"","group":"G","teamA":{"name":"Alemania","flag":"de"},"teamB":{"name":"Ghana","flag":"gh"}},{"id":"30","winner":"","group":"G","teamA":{"name":"Estados Unidos","flag":"us"},"teamB":{"name":"Portugal","flag":"pt"}},{"id":"31","winner":"","group":"H","teamA":{"name":"Belgica","flag":"be"},"teamB":{"name":"Rusia","flag":"ru"}},{"id":"32","winner":"","group":"H","teamA":{"name":"Corea del Sur","flag":"kr"},"teamB":{"name":"Argelia","flag":"dz"}},{"id":"33","winner":{"name":"empate"},"group":"A","teamA":{"name":"Camerun","flag":"cm"},"teamB":{"name":"Brasil","flag":"br"}},{"id":"34","winner":{"name":"Mejico"},"group":"A","teamA":{"name":"Croacia","flag":"hr"},"teamB":{"name":"Mejico","flag":"mx"}},{"id":"35","winner":"","group":"B","teamA":{"name":"Australia","flag":"au"},"teamB":{"name":"Espa;a","flag":"es"}},{"id":"36","winner":"","group":"B","teamA":{"name":"Holanda","flag":"nl"},"teamB":{"name":"Chile","flag":"cl"}},{"id":"37","winner":"","group":"C","teamA":{"name":"Japon","flag":"jp"},"teamB":{"name":"Colombia","flag":"co"}},{"id":"38","winner":"","group":"C","teamA":{"name":"Grecia","flag":"gr"},"teamB":{"name":"Costa de Marfil","flag":"ci"}},{"id":"39","winner":"","group":"D","teamA":{"name":"Italia","flag":"it"},"teamB":{"name":"Uruguay","flag":"uy"}},{"id":"40","winner":"","group":"D","teamA":{"name":"Costa Rica","flag":"cr"},"teamB":{"name":"Inglaterra","flag":"_England"}},{"id":"41","winner":"","group":"E","teamA":{"name":"Honduras","flag":"hn"},"teamB":{"name":"Suiza","flag":"ch"}},{"id":"42","winner":"","group":"E","teamA":{"name":"Ecuador","flag":"ec"},"teamB":{"name":"Francia","flag":"fr"}},{"id":"43","winner":"","group":"F","teamA":{"name":"Nigeria","flag":"ng"},"teamB":{"name":"Argentina","flag":"ar"}},{"id":"44","winner":"","group":"F","teamA":{"name":"Bosnia & Herzegovina","flag":"ba"},"teamB":{"name":"Iran","flag":"ir"}},{"id":"45","winner":"","group":"G","teamA":{"name":"Estados Unidos","flag":"us"},"teamB":{"name":"Alemania","flag":"de"}},{"id":"46","winner":"","group":"G","teamA":{"name":"Portugal","flag":"pt"},"teamB":{"name":"Ghana","flag":"gh"}},{"id":"47","winner":"","group":"H","teamA":{"name":"Corea del Sur","flag":"kr"},"teamB":{"name":"Belgica","flag":"be"}},{"id":"48","winner":"","group":"H","teamA":{"name":"Argelia","flag":"dz"},"teamB":{"name":"Rusia","flag":"ru"}},{"id":"49","winner":{"name":"Holanda","flag":"nl"},"teamA":{"name":"Mejico","pos":"1","group":"A","flag":"mx"},"teamB":{"name":"Holanda","pos":"2","group":"B","flag":"nl"}},{"id":"50","winner":{"name":"Colombia","flag":"co"},"teamA":{"name":"Colombia","pos":"1","group":"C","flag":"co"},"teamB":{"name":"Costa Rica","pos":"2","group":"D","flag":"cr"}},{"id":"51","winner":{"name":"Camerun","flag":"cm"},"teamA":{"name":"Espa;a","pos":"1","group":"B","flag":"es"},"teamB":{"name":"Camerun","pos":"2","group":"A","flag":"cm"}},{"id":"52","winner":{"name":"Grecia","flag":"gr"},"teamA":{"name":"Uruguay","pos":"1","group":"D","flag":"uy"},"teamB":{"name":"Grecia","pos":"2","group":"C","flag":"gr"}},{"id":"53","winner":{"name":"Suiza","flag":"ch"},"teamA":{"name":"Suiza","pos":"1","group":"E","flag":"ch"},"teamB":{"name":"Bosnia & Herzegovina","pos":"2","group":"F","flag":"ba"}},{"id":"54","winner":{"name":"Alemania","flag":"de"},"teamA":{"name":"Alemania","pos":"1","group":"G","flag":"de"},"teamB":{"name":"Argelia","pos":"2","group":"H","flag":"dz"}},{"id":"55","winner":{"name":"Argentina","flag":"ar"},"teamA":{"name":"Argentina","pos":"1","group":"F","flag":"ar"},"teamB":{"name":"Ecuador","pos":"2","group":"E","flag":"ec"}},{"id":"56","winner":{"name":"Belgica","flag":"be"},"teamA":{"name":"Belgica","pos":"1","group":"H","flag":"be"},"teamB":{"name":"Portugal","pos":"2","group":"G","flag":"pt"}},{"id":"57","winner":{"name":"Holanda","flag":"nl"},"teamA":{"match":"49","name":"Holanda","flag":"nl"},"teamB":{"match":"50","name":"Colombia","flag":"co"}},{"id":"58","winner":{"name":"Suiza","flag":"ch"},"teamA":{"match":"53","name":"Suiza","flag":"ch"},"teamB":{"match":"54","name":"Alemania","flag":"de"}},{"id":"59","winner":{"name":"Camerun","flag":"cm"},"teamA":{"match":"51","name":"Camerun","flag":"cm"},"teamB":{"match":"52","name":"Grecia","flag":"gr"}},{"id":"60","winner":{"name":"Belgica","flag":"be"},"teamA":{"match":"55","name":"Argentina","flag":"ar"},"teamB":{"match":"56","name":"Belgica","flag":"be"}},{"id":"61","winner":{"name":"Suiza","flag":"ch"},"teamA":{"match":"57","name":"Holanda","flag":"nl"},"teamB":{"match":"58","name":"Suiza","flag":"ch"}},{"id":"62","winner":{"name":"Camerun","flag":"cm"},"teamA":{"match":"59","name":"Camerun","flag":"cm"},"teamB":{"match":"60","name":"Belgica","flag":"be"}},{"id":"63","winner":"","teamA":{"match":"61","name":"Suiza","flag":"ch"},"teamB":{"match":"62","name":"Camerun","flag":"cm"}}]
};*/

//[{"id":"1","winner":{"name":"Brasil"},"group":"A","teamA":{"name":"Brasil","flag":"br"},"teamB":{"name":"Croacia","flag":"hr"}},{"id":"2","winner":{"name":"empate"},"group":"A","teamA":{"name":"Mejico","flag":"mx"},"teamB":{"name":"Camerun","flag":"cm"}},{"id":"3","winner":"","group":"B","teamA":{"name":"Espa;a","flag":"es"},"teamB":{"name":"Holanda","flag":"nl"}},{"id":"4","winner":"","group":"B","teamA":{"name":"Chile","flag":"cl"},"teamB":{"name":"Australia","flag":"au"}},{"id":"5","winner":"","group":"C","teamA":{"name":"Colombia","flag":"co"},"teamB":{"name":"Grecia","flag":"gr"}},{"id":"6","winner":"","group":"C","teamA":{"name":"Costa de Marfil","flag":"ci"},"teamB":{"name":"Japon","flag":"jp"}},{"id":"7","winner":"","group":"D","teamA":{"name":"Uruguay","flag":"uy"},"teamB":{"name":"Costa Rica","flag":"cr"}},{"id":"8","winner":"","group":"D","teamA":{"name":"Inglaterra","flag":"_England"},"teamB":{"name":"Italia","flag":"it"}},{"id":"9","winner":"","group":"E","teamA":{"name":"Suiza","flag":"ch"},"teamB":{"name":"Ecuador","flag":"ec"}},{"id":"10","winner":"","group":"E","teamA":{"name":"Francia","flag":"fr"},"teamB":{"name":"Honduras","flag":"hn"}},{"id":"11","winner":"","group":"F","teamA":{"name":"Argentina","flag":"ar"},"teamB":{"name":"Bosnia & Herzegovina","flag":"ba"}},{"id":"12","winner":"","group":"F","teamA":{"name":"Iran","flag":"ir"},"teamB":{"name":"Nigeria","flag":"ng"}},{"id":"13","winner":"","group":"G","teamA":{"name":"Alemania","flag":"de"},"teamB":{"name":"Portugal","flag":"pt"}},{"id":"14","winner":"","group":"G","teamA":{"name":"Ghana","flag":"gh"},"teamB":{"name":"Estados Unidos","flag":"us"}},{"id":"15","winner":"","group":"H","teamA":{"name":"Belgica","flag":"be"},"teamB":{"name":"Argelia","flag":"dz"}},{"id":"16","winner":"","group":"H","teamA":{"name":"Rusia","flag":"ru"},"teamB":{"name":"Corea del Sur","flag":"kr"}},{"id":"17","winner":{"name":"Mejico"},"group":"A","teamA":{"name":"Brasil","flag":"br"},"teamB":{"name":"Mejico","flag":"mx"}},{"id":"18","winner":{"name":"Camerun"},"group":"A","teamA":{"name":"Camerun","flag":"cm"},"teamB":{"name":"Croacia","flag":"hr"}},{"id":"19","winner":"","group":"B","teamA":{"name":"Australia","flag":"au"},"teamB":{"name":"Holanda","flag":"nl"}},{"id":"20","winner":"","group":"B","teamA":{"name":"Espa;a","flag":"es"},"teamB":{"name":"Chile","flag":"cl"}},{"id":"21","winner":"","group":"C","teamA":{"name":"Colombia","flag":"co"},"teamB":{"name":"Costa de Marfil","flag":"ci"}},{"id":"22","winner":"","group":"C","teamA":{"name":"Japon","flag":"jp"},"teamB":{"name":"Grecia","flag":"gr"}},{"id":"23","winner":"","group":"D","teamA":{"name":"Uruguay","flag":"uy"},"teamB":{"name":"Inglaterra","flag":"_England"}},{"id":"24","winner":"","group":"D","teamA":{"name":"Italia","flag":"it"},"teamB":{"name":"Costa Rica","flag":"cr"}},{"id":"25","winner":"","group":"E","teamA":{"name":"Suiza","flag":"ch"},"teamB":{"name":"Francia","flag":"fr"}},{"id":"26","winner":"","group":"E","teamA":{"name":"Honduras","flag":"hn"},"teamB":{"name":"Ecuador","flag":"ec"}},{"id":"27","winner":"","group":"F","teamA":{"name":"Argentina","flag":"ar"},"teamB":{"name":"Iran","flag":"ir"}},{"id":"28","winner":"","group":"F","teamA":{"name":"Nigeria","flag":"ng"},"teamB":{"name":"Bosnia & Herzegovina","flag":"ba"}},{"id":"29","winner":"","group":"G","teamA":{"name":"Alemania","flag":"de"},"teamB":{"name":"Ghana","flag":"gh"}},{"id":"30","winner":"","group":"G","teamA":{"name":"Estados Unidos","flag":"us"},"teamB":{"name":"Portugal","flag":"pt"}},{"id":"31","winner":"","group":"H","teamA":{"name":"Belgica","flag":"be"},"teamB":{"name":"Rusia","flag":"ru"}},{"id":"32","winner":"","group":"H","teamA":{"name":"Corea del Sur","flag":"kr"},"teamB":{"name":"Argelia","flag":"dz"}},{"id":"33","winner":{"name":"empate"},"group":"A","teamA":{"name":"Camerun","flag":"cm"},"teamB":{"name":"Brasil","flag":"br"}},{"id":"34","winner":{"name":"Mejico"},"group":"A","teamA":{"name":"Croacia","flag":"hr"},"teamB":{"name":"Mejico","flag":"mx"}},{"id":"35","winner":"","group":"B","teamA":{"name":"Australia","flag":"au"},"teamB":{"name":"Espa;a","flag":"es"}},{"id":"36","winner":"","group":"B","teamA":{"name":"Holanda","flag":"nl"},"teamB":{"name":"Chile","flag":"cl"}},{"id":"37","winner":"","group":"C","teamA":{"name":"Japon","flag":"jp"},"teamB":{"name":"Colombia","flag":"co"}},{"id":"38","winner":"","group":"C","teamA":{"name":"Grecia","flag":"gr"},"teamB":{"name":"Costa de Marfil","flag":"ci"}},{"id":"39","winner":"","group":"D","teamA":{"name":"Italia","flag":"it"},"teamB":{"name":"Uruguay","flag":"uy"}},{"id":"40","winner":"","group":"D","teamA":{"name":"Costa Rica","flag":"cr"},"teamB":{"name":"Inglaterra","flag":"_England"}},{"id":"41","winner":"","group":"E","teamA":{"name":"Honduras","flag":"hn"},"teamB":{"name":"Suiza","flag":"ch"}},{"id":"42","winner":"","group":"E","teamA":{"name":"Ecuador","flag":"ec"},"teamB":{"name":"Francia","flag":"fr"}},{"id":"43","winner":"","group":"F","teamA":{"name":"Nigeria","flag":"ng"},"teamB":{"name":"Argentina","flag":"ar"}},{"id":"44","winner":"","group":"F","teamA":{"name":"Bosnia & Herzegovina","flag":"ba"},"teamB":{"name":"Iran","flag":"ir"}},{"id":"45","winner":"","group":"G","teamA":{"name":"Estados Unidos","flag":"us"},"teamB":{"name":"Alemania","flag":"de"}},{"id":"46","winner":"","group":"G","teamA":{"name":"Portugal","flag":"pt"},"teamB":{"name":"Ghana","flag":"gh"}},{"id":"47","winner":"","group":"H","teamA":{"name":"Corea del Sur","flag":"kr"},"teamB":{"name":"Belgica","flag":"be"}},{"id":"48","winner":"","group":"H","teamA":{"name":"Argelia","flag":"dz"},"teamB":{"name":"Rusia","flag":"ru"}},{"id":"49","winner":{"name":"Holanda","flag":"nl"},"teamA":{"name":"Mejico","pos":"1","group":"A","flag":"mx"},"teamB":{"name":"Holanda","pos":"2","group":"B","flag":"nl"}},{"id":"50","winner":{"name":"Colombia","flag":"co"},"teamA":{"name":"Colombia","pos":"1","group":"C","flag":"co"},"teamB":{"name":"Costa Rica","pos":"2","group":"D","flag":"cr"}},{"id":"51","winner":{"name":"Camerun","flag":"cm"},"teamA":{"name":"Espa;a","pos":"1","group":"B","flag":"es"},"teamB":{"name":"Camerun","pos":"2","group":"A","flag":"cm"}},{"id":"52","winner":{"name":"Grecia","flag":"gr"},"teamA":{"name":"Uruguay","pos":"1","group":"D","flag":"uy"},"teamB":{"name":"Grecia","pos":"2","group":"C","flag":"gr"}},{"id":"53","winner":{"name":"Suiza","flag":"ch"},"teamA":{"name":"Suiza","pos":"1","group":"E","flag":"ch"},"teamB":{"name":"Bosnia & Herzegovina","pos":"2","group":"F","flag":"ba"}},{"id":"54","winner":{"name":"Alemania","flag":"de"},"teamA":{"name":"Alemania","pos":"1","group":"G","flag":"de"},"teamB":{"name":"Argelia","pos":"2","group":"H","flag":"dz"}},{"id":"55","winner":{"name":"Argentina","flag":"ar"},"teamA":{"name":"Argentina","pos":"1","group":"F","flag":"ar"},"teamB":{"name":"Ecuador","pos":"2","group":"E","flag":"ec"}},{"id":"56","winner":{"name":"Belgica","flag":"be"},"teamA":{"name":"Belgica","pos":"1","group":"H","flag":"be"},"teamB":{"name":"Portugal","pos":"2","group":"G","flag":"pt"}},{"id":"57","winner":{"name":"Holanda","flag":"nl"},"teamA":{"match":"49","name":"Holanda","flag":"nl"},"teamB":{"match":"50","name":"Colombia","flag":"co"}},{"id":"58","winner":{"name":"Suiza","flag":"ch"},"teamA":{"match":"53","name":"Suiza","flag":"ch"},"teamB":{"match":"54","name":"Alemania","flag":"de"}},{"id":"59","winner":{"name":"Camerun","flag":"cm"},"teamA":{"match":"51","name":"Camerun","flag":"cm"},"teamB":{"match":"52","name":"Grecia","flag":"gr"}},{"id":"60","winner":{"name":"Belgica","flag":"be"},"teamA":{"match":"55","name":"Argentina","flag":"ar"},"teamB":{"match":"56","name":"Belgica","flag":"be"}},{"id":"61","winner":{"name":"Suiza","flag":"ch"},"teamA":{"match":"57","name":"Holanda","flag":"nl"},"teamB":{"match":"58","name":"Suiza","flag":"ch"}},{"id":"62","winner":{"name":"Camerun","flag":"cm"},"teamA":{"match":"59","name":"Camerun","flag":"cm"},"teamB":{"match":"60","name":"Belgica","flag":"be"}},{"id":"63","winner":"","teamA":{"match":"61","name":"Suiza","flag":"ch"},"teamB":{"match":"62","name":"Camerun","flag":"cm"}}]

var teams = [
{"name":"Brasil","flag":"br","pos":"","points":"0","group":"A"},
{"name":"Croacia","flag":"hr","pos":"","points":"0","group":"A"},
{"name":"Mejico","flag":"mx","pos":"","points":"0","group":"A"},
{"name":"Camerun","flag":"cm","pos":"","points":"0","group":"A"},
{"name":"Espa;a","flag":"es","pos":"","points":"0","group":"B"},
{"name":"Holanda","flag":"nl","pos":"","points":"0","group":"B"},
{"name":"Chile","flag":"cl","pos":"","points":"0","group":"B"},
{"name":"Australia","flag":"au","pos":"","points":"0","group":"B"},
{"name":"Colombia","flag":"co","pos":"","points":"0","group":"C"},
{"name":"Grecia","flag":"gr","pos":"","points":"0","group":"C"},
{"name":"Costa de Marfil","flag":"ci","pos":"","points":"0","group":"C"},
{"name":"Japon","flag":"jp","pos":"","points":"0","group":"C"},
{"name":"Uruguay","flag":"uy","pos":"","points":"0","group":"D"},
{"name":"Costa Rica","flag":"cr","pos":"","points":"0","group":"D"},
{"name":"Inglaterra","flag":"_England","pos":"","points":"0","group":"D"},
{"name":"Italia","flag":"it","pos":"","points":"0","group":"D"},
{"name":"Suiza","flag":"ch","pos":"","points":"0","group":"E"},
{"name":"Ecuador","flag":"ec","pos":"","points":"0","group":"E"},
{"name":"Francia","flag":"fr","pos":"","points":"0","group":"E"},
{"name":"Honduras","flag":"hn","pos":"","points":"0","group":"E"},
{"name":"Argentina","flag":"ar","pos":"","points":"0","group":"F"},
{"name":"Bosnia & Herzegovina","flag":"ba","pos":"","points":"0","group":"F"},
{"name":"Iran","flag":"ir","pos":"","points":"0","group":"F"},
{"name":"Nigeria","flag":"ng","pos":"","points":"0","group":"F"},
{"name":"Alemania","flag":"de","pos":"","points":"0","group":"G"},
{"name":"Portugal","flag":"pt","pos":"","points":"0","group":"G"},
{"name":"Ghana","flag":"gh","pos":"","points":"0","group":"G"},
{"name":"Estados Unidos","flag":"us","pos":"","points":"0","group":"G"},
{"name":"Belgica","flag":"be","pos":"","points":"0","group":"H"},
{"name":"Argelia","flag":"dz","pos":"","points":"0","group":"H"},
{"name":"Rusia","flag":"ru","pos":"","points":"0","group":"H"},
{"name":"Corea del Sur","flag":"kr","pos":"","points":"0","group":"H"}
];