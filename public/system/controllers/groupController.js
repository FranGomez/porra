'use strict';

angular.module('mean.system').controller('groupController', ['$scope', '$rootScope', '$stateParams', 'Global', 'Menus', 'championship','getchampionship','teams','sharedService',
    function($scope, $rootScope, $stateParams, Global, Menus,championship,getchampionship,teams,sharedService) {
        
        $scope.championship = championship.data;

        $scope.group=$stateParams.group;

        $scope.showGroup = function(match){
            return match.group === $stateParams.group;
        };

        $scope.handleResult = function(match) {
            sharedService.prepForBroadcast(match);
        };

        $scope.isWinner = function(match,team){
            return match.winner.name==team.name;
        };
    }
]);
