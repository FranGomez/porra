'use strict';

angular.module('mean.system').controller('round2Controller', ['$scope', '$rootScope', '$stateParams', 'Global', 'Menus', 'championship','teams','sharedService',
    function($scope, $rootScope, $stateParams, Global, Menus,championship,teams,sharedService) {
        
        $scope.group = $stateParams.group;
        $scope.championship=championship;
        $scope.teams=teams;

        $scope.showGroup = function(team){
            return team.group === $scope.group;
        };
     
        $scope.$on('handleResult', function() {
            _.chain($scope.teams)
            .filter(function(team){
                return team.name == sharedService.match.teamA.name || team.name == sharedService.match.teamB.name;
            })
            .map(function(team){
                var points=0;
                _.chain($scope.championship.matches)
                .filter(function(match){
                    return (match.group==team.group) && 
                            (match.teamA.name==team.name || match.teamB.name==team.name) && (match.result==team.name || match.result=='empate');
                })
                .map(function(match){
                    return match.result==team.name?points=points+3:points=points+1;
                })
                .map(function(){
                    team.points=points;
                });
            });
        });
    }
]);
