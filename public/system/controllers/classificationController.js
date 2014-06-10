'use strict';

angular.module('mean.system').controller('classificationController', ['$scope', '$rootScope', '$stateParams', 'Global', 'Menus', 'championship','teams','sharedService',
    function($scope, $rootScope, $stateParams, Global, Menus,championship,teams,sharedService) {
        
        $scope.group = $stateParams.group;
        $scope.championship=championship;
        $scope.teams=teams;

        $scope.showGroup = function(team){
            return team.group === $scope.group;
        };
     
        //Evento proviene de la modificacion de un partido de fase1
        //Calcula la clasificacion de un grupo
        $scope.$on('handleResult', function() {

            console.log("handleResult:classificationController");

            updatePoints();
            updatePositions();
            sharedService.prepForBroadcastClassification(sharedService.match);

        });

        var updatePoints = function(){
            _.chain($scope.teams)
            .filter(function(team){
                return team.name == sharedService.match.teamA.name || 
                        team.name == sharedService.match.teamB.name;
            })
            .each(function(team){
                var points=0;
                _.chain($scope.championship.matches)
                .filter(function(match){
                    return  match.group==team.group &&
                             (match.teamA.name==team.name || match.teamB.name==team.name) &&
                              (match.winner.name==team.name || match.winner.name=='empate');
                })
                .each(function(match){
                    match.winner.name==team.name?points=points+3:points=points+1;
                });
                team.points=points;
            });
        };

        var updatePositions = function(){
            var position=0;
            _.chain($scope.teams)
            .filter(function(team){
                return sharedService.match.group==team.group;
            })
            .sortBy(function(team){
                return team.points;
            })
            .reverse()
            .each(function(team){
                position=position+1;
                team.pos=position;
            });
        };
    }
]);
